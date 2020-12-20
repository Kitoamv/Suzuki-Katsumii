const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "pokerface",
        aliases: ["tédio","pf"],
        description: "Um belo rosto de tédio...!",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [
          "https://media.tenor.com/images/ebb134ac9cba7cab1ea85abce1c08cec/tenor.gif?raw=true",
          "https://media.tenor.com/images/aed877101cbf951d44fe7f105914b5d6/tenor.gif?raw=true",
          "https://media.tenor.com/images/c01bfbb83a3338aebd41ee2d4ba3d05f/tenor.gif?raw=true",
          "https://media.tenor.com/images/c3f0b2ce02489b7a64d0c51ec92f02d5/tenor.gif?raw=true",
          "https://media.tenor.com/images/f1b9f2523aae5c32ffc7d0c758673711/tenor.gif?raw=true",
          "https://media.tenor.com/images/db81c1c7fce41ddaa8452de27d2a1888/tenor.gif?raw=true",
          "https://media.tenor.com/images/9df5ed519421338371d37a758974ca06/tenor.gif?raw=true",
          "https://media.tenor.com/images/e4907397b2eced2e01dc6dd57f3b1447/tenor.gif?raw=true",
          "https://media.tenor.com/images/1b32a153c46a260099a45d1d96970a18/tenor.gif?raw=true",
          "https://media.tenor.com/images/8729229b46bf9e2756692cfeff94ae64/tenor.gif?raw=true",
          "https://media.tenor.com/images/2b01941229402261390460f00b66b045/tenor.gif?raw=true",
          "https://media.tenor.com/images/802a99696c95ac9e24f2da9bde2142be/tenor.gif?raw=true",
          "https://media.tenor.com/images/4693e68518d442409be4df723ad4a5e5/tenor.gif?raw=true",
          "https://media.tenor.com/images/bc80939e6a58724bffcc6b6f4f546864/tenor.gif?raw=true",
          "https://media.tenor.com/images/24fb711e66d0582fae22f382a94ea65f/tenor.gif?raw=true",
          "https://media.tenor.com/images/f27a54ca736f2520050387ad87c132b9/tenor.gif?raw=true",
          "https://media.tenor.com/images/4461705a7f9ca5e155bb3c00f3b55547/tenor.gif?raw=true",
          "https://media.tenor.com/images/cb4e20fa632807028690ac4b867cc0c5/tenor.gif?raw=true"
      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está com um baita tédio`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está com tédio do que ${killed} anda dizendo`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
