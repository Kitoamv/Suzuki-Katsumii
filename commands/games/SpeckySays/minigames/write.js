var fs = require('fs')

module.exports = {
    startMessage: 'Escreva algo no chat!',
    defTime: 10000,
    name: 'write',
    run: async function (channel, players, time, client, info) {

        //when time is up

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
            let sentMessage = false
            for (const message of messages) {
                if (message.author == player) {
                    //if simon didnt say, the player is out
                    if (!info.simonSaid) {
                        out.push(player)
                        outIndex.push(i)
                    } else {
                        sentMessage = true
                    }
                    break
                }
            }
            if (info.simonSaid && !sentMessage) {
                out.push(player)
                outIndex.push(i)
            }
        })
        let newPlayers = players.filter( ( el ) => !out.includes( el ) )
        return ({
            playersOut: out,
            playersLeft: newPlayers,
            settingsOut: settings
        })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
