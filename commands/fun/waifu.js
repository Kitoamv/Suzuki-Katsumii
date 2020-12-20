const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
  name: "waifu",
  aliases: [],
  category: "fun",
  description: "Agora isso é ilegal...",
  run: async (client, message, args) => {
            if(message.guild === null)return;

          superagent.get('https://nekos.life/api/v2/img/waifu')
          .end((err, response) => {
          const lewdembed = new Discord.RichEmbed()
          .setDescription(message.author.toString() + " Essa é a sua waifu!")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setURL(response.body.url);
          message.channel.send(lewdembed);
    })
}
}
