var fs = require('fs')
const words = fs.readFileSync('./commands/games/TCR/data/words.txt', 'utf8').split('\n')

module.exports = {
    startMessage: `uma palavra que começa com a seguinte letra:`,
    defTime: 10000,
    name: 'tcr',
    run: async function (channel, players, time, client, info) {
        var letter = makeid()
        channel.send(`**${letter}**`)

        const collector = channel.createMessageCollector(() => true);

        const settings = info.settings

        let collected
        collector.on('end', collected_ => {
            collected = collected_
        });

        //when time is up
        await sleep(time)
        await channel.send('Time\'s up!')

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
                    if(!message.content.toLowerCase().startsWith(letter.toLowerCase()) || words.indexOf(message.content.toLowerCase()) < 0){
                        out.push(player)
                        outIndex.push(i)
                        break
                    }
                    //if simon didnt say, the player is out
                    sentMessage = true
                    break
                }
            }
            if (!sentMessage) {
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

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
 }
