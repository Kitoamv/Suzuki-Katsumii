const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
        name: "aicat",
        aliases: [],
        description: "Aprove uma pessoa",
        ussage: "<prefix>aicat",
        category: "fun",
    run: async (client, message, args) => {
      superagent.get('https://thiscatdoesnotexist.com/')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Random ai cat")
      .setColor(`#000000`)
      .setFooter(`uwu`)
      .attachFile({attachment: "http://thiscatdoesnotexist.com/", name: "image.jpeg"})
      .setImage("attachment://image.jpeg")

      message.channel.send(lewdembed);
    })
}
}
