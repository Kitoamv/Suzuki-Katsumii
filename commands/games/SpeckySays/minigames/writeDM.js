var fs = require('fs')

module.exports = {
    startMessage: 'Envie-me uma mensagem direta (Privado)!',
    defTime: 20000,
    name: 'writeDM',
    run: async function (channel, players, time, client, info) {

        //when time is up
        const settings = info.settings

        //making a bunch of collectors
        let collectors = []
        for(let player of players){
            await player.createDM()
            let dmCollector = player.dmChannel.awaitMessages(() => true, { max: 1, time: time })
            collectors.push(dmCollector)
        }

        //when time is up
        await sleep(time)
        if (settings.opposite_day) await channel.send('Tudo bem, o tempo acabou!')
        else await channel.send('Suzuki diz que o tempo acabou!')

        await Promise.all(collectors)
        let messages = []

        for(let collected of collectors){
            let rCollected = await collected
            messages = messages.concat(rCollected.array())
        }


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
