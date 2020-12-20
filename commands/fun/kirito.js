const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "kirito",
        aliases: ["kirimeme","kitomeme","kito"],
        description: "Um meme somente para quem conhece o Kirito",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [
          "https://media.giphy.com/media/dzOjT2lUqzGz4JuP22/giphy.gif?raw=true",
          "https://media.discordapp.net/attachments/696515039968100375/698383470128529468/IMG_20200411_000626.jpg?raw=true",
          "https://cdn.discordapp.com/attachments/637590984338702364/699030771914244136/530621_399957676763599_646219538_n.jpg?raw=true",
          "https://i.imgur.com/WMa1YsA.gif?raw=true",
      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`${message.author} está querendo ver memes do kirito`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`${message.author} está querendo ver memes do kirito`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
