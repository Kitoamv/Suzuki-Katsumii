let randomStart = require('./randomStart.js')
var discord = require('discord.js')
var fs = require('fs')

module.exports.runGame = async function (channel, players_, bot) {

    bot.minigames = []
    const gameFiles = fs.readdirSync('./commands/games/SpeckySays/minigames').filter(file => file.endsWith('.js'))

    for (const file of gameFiles) {
        const game = require(`./minigames/${file}`)
        bot.minigames.push(game)
    }

    let players = players_
    let time = 1
    let winners
    let gameOn
    let prematurelyEnd
    if(players_.length < 1){
        prematurelyEnd = true
        gameOn = false
    }else{
        prematurelyEnd = false
        gameOn = true
    }
    let rounds = 4
    let lastGame = null
    //example of how to start a game
    let settings = require('./settings');

    while (gameOn) {

        //chooses a random minigame

        let enabledGames = []
        for(let game of bot.minigames){
            if(settings.minigames[game.name]){
                if(game.name == 'oppositeDay' && rounds < 5) continue
                enabledGames.push(game)
            }
        }

        if(enabledGames.length == 0){
            channel.send('Você precisa ter pelo menos um jogo habilitado para jogar. Ativar/desativar com o comando config.')
            return
        }
        let currentGame  = enabledGames[getRandomInt(enabledGames.length)]

        while(currentGame == lastGame){
            currentGame = enabledGames[getRandomInt(enabledGames.length)]
        }

        //picks a random start of startmessage (67% chance of getting "Simon says")
        let start
        if (currentGame.name == 'oppositeDay') {
            start = {
                string: settings.opposite_day ? 'Bom Dia,' : 'Suzuki Diz',
                real: true
            }
        } else if(rounds < 15){
            start = {
                string: 'Suzuki diz',
                real: true
            }
        } else {
            start = randomStart(channel.guild.id, settings)
        }

        let actualTime = (time * currentGame.defTime).clamp(5000, 15000)
        //sends startmessage
        const startMessage = await channel.send(`**${start.string} ${currentGame.startMessage.toLowerCase()}** *(Você tem ${Math.floor(actualTime / 1000)} segundos)*`)
        //runs the game

        let {
            playersOut,
            playersLeft,
            settingsOut
        } = await currentGame.run(channel, players, actualTime, bot, {
            simonSaid: start.real,
            startMessage: startMessage,
            settings: settings
        })
        settings = settingsOut

        await sleep(1000)
        playersOut = [...new Set(playersOut)]
        //say whos out
        var embed = new discord.RichEmbed()
        if (playersOut.length > 0) {
            embed.setDescription(`${playersOut.join(', ')} ${playersOut.length > 1 ? "estão" : "é"} Fora!`)
                .setColor(`#FF230F`)
        } else {
            embed.setTitle('Bom trabalho! Ninguém caiu!')
                .setColor(`#33CC14`)
        }

        channel.send(embed)
        await sleep(1000)


        if (playersLeft.length < 1) {
            winners = playersOut
            gameOn = false
            break
        }
        time *= 0.93
        players = playersLeft
        rounds++
        lastGame = currentGame
    }

    if(!prematurelyEnd){
        var embed = new discord.RichEmbed()
            .setTitle('O jogo terminou!')
            .setDescription(`${winners.join(', ')} ganhou com ${rounds} pontos! GG!`)
            .setColor('#FFBE11')
        channel.send(embed)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};
