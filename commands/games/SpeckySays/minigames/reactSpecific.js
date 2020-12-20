var fs = require('fs');

module.exports = {
    startMessage: 'fazem isto:',
    defTime: 25000,
    name: 'reactSpecific',
    run: async function (channel, players, time, client, info) {
        const settings = info.settings
        const alternatives = settings.tasks.react

        const emoji = alternatives[getRandomInt(alternatives.length)]
        const startMessage = await channel.send(`Reaja a esta mensagem com este emoji: ${emoji}`)

        let allReactions = startMessage.awaitReactions(() => true, {
            time: time
        })
        await sleep(time - 1000)
        //when time is up
        if (settings.opposite_day) await channel.send('Tudo bem, o tempo acabou!')
        else await channel.send('Suzuki diz que o tempo acabou!')
        await sleep(1000)
        allReactions = await allReactions
        allReactions = allReactions.array()

        let allUsers = []
        for (let reaction of allReactions) {

            if (reaction.emoji.toString() === emoji) {
                let users = await reaction.fetchUsers()
                allUsers = allUsers.concat(users.array())
            }
        }

        //console.log(allUsers.map(user => user.name))

        let out = []
        let outIndex = []
        //check each player to see if they are out
        players.forEach((player, i) => {
            //check each message
            let reacted = false

            if (allUsers.includes(player)) {
                //if simon didnt say, the player is out
                if (!info.simonSaid) {
                    out.push(player)
                    outIndex.push(i)
                } else {
                    reacted = true
                }

            }

            if (info.simonSaid && !reacted) {
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
