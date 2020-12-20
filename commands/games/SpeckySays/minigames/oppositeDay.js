const fs = require('fs')
module.exports = {
    startMessage: 'É um novo dia!',
    defTime: 20000,
    name: 'oppositeDay',
    run: async function (channel, players, time, client, info) {
        var settings = info.settings

        if (!settings.opposite_day) await channel.send('O dia oposto começa logo! Escreva **ok** no chat se estiver pronto!')
        else await channel.send('O dia oposto terminou! Escreva **ok** se você estiver pronto para voltar ao normal!')

        const collector = channel.createMessageCollector(() => true);

        let collected
        collector.on('end', collected_ => {
            collected = collected_
        });

        //when time is up
        await sleep(time)

        if (!settings.opposite_day) await channel.send('Suzuki diz que o tempo acabou! Estamos prontos para começar o dia oposto! \n **A partir de agora e até o dia oposto ao dia, faça o oposto do que você normalmente faria para permanecer no jogo!**')
        else await channel.send('Tudo bem, o tempo acabou! Terminamos o dia oposto!')

        collector.stop()
        await sleep(6000)
        let messages = collected.array()
        let out = []
        let outIndex = []
        //check each player to see if they are out
        players.forEach((player, i) => {
            //check each message
            let sentCorrectMessage = false
            for (const message of messages) {
                if (message.author == player && message.content.toLowerCase().includes("ok")) {
                    sentCorrectMessage = true
                    break
                }
            }
            if (!sentCorrectMessage) {
                out.push(player)
                outIndex.push(i)
            }
        })
        let newPlayers = players.filter( ( el ) => !out.includes( el ) )

        settings.opposite_day = !settings.opposite_day


        return ({
            playersOut: out,
            playersLeft: newPlayers,
            settingsOut: settings
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
