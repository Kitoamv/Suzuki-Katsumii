const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
    name: "gif",
    category: "nsfw",
    description: "Uma Imagem em 4K",
    run: async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Tags: gif`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	}
}
