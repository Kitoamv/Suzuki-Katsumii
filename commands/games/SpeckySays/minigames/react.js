//example of a simple minigame

module.exports = {
    startMessage: 'Reagir a esta mensagem!',
    defTime: 20000,
    name: 'react',
    run: async function (channel, players, time, client, info) {


        let allReactions = info.startMessage.awaitReactions(() => true, {
            time: time
        })
        await sleep(time - 1000)
        //when time is up
        if (info.settings.opposite_day) await channel.send('Tudo bem, o tempo acabou!')
        else await channel.send('Suzuki diz que o tempo acabou!')
        await sleep(1000)
        allReactions = await allReactions
        allReactions = allReactions.array()

        let allUsers = []
        for(let reaction of allReactions){
            let users = await reaction.fetchUsers()
            allUsers = allUsers.concat(users.array())
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
        return({
            playersOut: out,
            playersLeft: newPlayers,
            settingsOut: info.settings
        })
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
