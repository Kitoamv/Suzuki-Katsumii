const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
    name: "futa",
    category: "nsfw",
    description: "Uma Imagem em 4K",
    run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/futanari')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`RAMDOM`)
      .setFooter(`Tags: futa`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
}
}
