const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "bite",
        aliases: ["morder"],
        description: "HAHAHA VOU TE MORDER!!",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/30bde4274d30becac7e20144fc13be10/tenor.gif?raw=true",
"https://media.tenor.com/images/435a23e4b93744acb8bc28feb8b66cc0/tenor.gif?raw=true",
"https://media.tenor.com/images/8dcb92c129d419af60ae0a819c2b2624/tenor.gif?raw=true",
"https://media.tenor.com/images/b82198ff7c3c531f8aec996fb4fc44ea/tenor.gif?raw=true",
"https://media.tenor.com/images/777029607cf365f58e8b8ac57d548f19/tenor.gif?raw=true",
"https://media.tenor.com/images/1a2937708e385443e7e5024205947327/tenor.gif?raw=true",
"https://media.tenor.com/images/616dcf3690e7edfac70c0e02c6d73559/tenor.gif?raw=true",
"https://media.tenor.com/images/a2d0979e377e122f75338352bfd5be75/tenor.gif?raw=true",
"https://media.tenor.com/images/ab0bbcf15e9b58f6817d4473875376c4/tenor.gif?raw=true",
"https://media.tenor.com/images/3d553e16a334c2e13e2fc29d95f4e248/tenor.gif?raw=true",
"https://media.tenor.com/images/074c277bd85dc8554a3a192e72c228cc/tenor.gif?raw=true",
"https://media.tenor.com/images/145ecb3018ebd63e3c8c1c8f59712b99/tenor.gif?raw=true",
"https://media.tenor.com/images/58d42c414f1ea605ad05a90280c93d81/tenor.gif?raw=true",
"https://media.tenor.com/images/1e3821d132230c8810312f7553354743/tenor.gif?raw=true",
"https://media.tenor.com/images/5aec5f5ffa7de54f804e67474964fc90/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está mordendo...`)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está mordendo o ${killed} `)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
