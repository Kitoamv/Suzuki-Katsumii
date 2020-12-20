var fs = require('fs')

module.exports = {
    startMessage: 'Escreva a resposta correta para esta equação:',
    defTime: 16000,
    name: 'solveEquation',
    run: async function (channel, players, time, client, info) {
        const symbols = ['+', '-', '*'] //×
        const symbol = symbols[getRandomInt(symbols.length)]
        const equation = `${getRandomInt(symbol == '*' ? 10 : 20)} ${symbol} ${getRandomInt(symbol == '*' ? 10 : 20)}`
        await channel.send(`**${equation.toUpperCase().replace('*', '×')}**`)
        const answer = eval(equation)

        const collector = channel.createMessageCollector(() => true);

        const settings = info.settings

        let collected
        collector.on('end', collected_ => {
            collected = collected_
        });

        //when time is up
        await sleep(time)
        if (settings.opposite_day) await channel.send('Tudo bem, o tempo acabou!')
        else await channel.send('Suzuki diz que o tempo acabou!')
        collector.stop()

        let messages = collected.array()
        let out = []
        let outIndex = []
        //check each player to see if they are out
        players.forEach((player, i) => {
            //check each message
            let sentCorrectMessage = false
            for (const message of messages) {
                if (message.author == player && parseInt(message.content.toLowerCase()) == answer) {
                    //if simon didnt say, the player is out
                    if (!info.simonSaid) {
                        out.push(player)
                        outIndex.push(i)
                    } else {
                        sentCorrectMessage = true
                    }
                    break
                }
            }
            if (info.simonSaid && !sentCorrectMessage) {
                out.push(player)
                outIndex.push(i)
            }
        })
        let newPlayers = players.filter( ( el ) => !out.includes( el ) )
        return ({
            playersOut: out,
            playersLeft: newPlayers,
            settingsOut: info.settings
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
