const Discord = require("discord.js")
const { usernameResolver } = require("./../../utils/resolvers/username")
var imposterDetector = [true, false]

module.exports = {
  name: "impostor",
  aliases: [""],
  category: "fun",
  description: "Você está parecendo meio suspeito...",
  run: async (client, message, args) => {
    await message.delete();
    if(args[0]){
        const username = args[0]
        var blames = await usernameResolver(message, username)
    }
    const impostor = Math.floor(Math.random() * imposterDetector.length)
        const embed = new Discord.RichEmbed()
        .setAuthor(
            `${message.author.tag}`,
        )
        .setTitle("Comando do Impostor")
        .setColor("#8800FF")
        .setFooter(`User ID: ${message.author.id}`)
        .setDescription(`
                .      　。　　　　•　    　ﾟ　　。
        　　.　　　.　　　  　　.　　　　　。　　   。　.
         　.　　      。　        ඞ   。　    .    •
         .      ${blames ? blames : message.author} ${impostor ? "" : "não"} era o impostor　 。　.
        　 　　。　　　　　　ﾟ　　　.　　　　　.
        ,　　　　.　 .　　       .
        `)
        .setTimestamp();
        message.channel.send(embed)
}
}
