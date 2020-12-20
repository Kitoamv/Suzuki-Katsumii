var fs = require('fs')

module.exports = {
    startMessage: 'Altere seu status para:',
    defTime: 10000,
    name: 'status',
    run: async function (channel, players, time, client, info) {
        const settings = info.settings
        const alternatives = settings.tasks.status

        const status = alternatives[getRandomInt(alternatives.length)]

        await channel.send(`**${status.replace('dnd', 'do not disturb').replace('offline', 'invisible')}**`)

        //when time is up
        await sleep(time)
        if (settings.opposite_day) await channel.send('Tudo bem, o tempo acabou!')
        else await channel.send('Suzuki diz que o tempo acabou!')



        let out = []
        let outIndex = []
        //check each player to see if they are out
        players.forEach((player, i) => {

            if(player.presence.status == status){
                if(!info.simonSaid){
                    out.push(player)
                    outIndex.push(i)
                }
            } else {
                if(info.simonSaid){
                    out.push(player)
                    outIndex.push(i)
                }
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
