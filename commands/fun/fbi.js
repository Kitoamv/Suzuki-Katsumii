const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "fbi",
        aliases: [],
        description: "CHAME O FBI PARA ESTE SUJEITO LOLICON!",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media1.tenor.com/images/e683152889dc703c77ce5bada1e89705/tenor.gif?itemid=11500735?raw=true",
"https://media1.tenor.com/images/379969e7e8fc038539699571f66c7a28/tenor.gif?itemid=12588971?raw=true",
"https://media1.tenor.com/images/8cd4c402e04b62eec0328eaa2c05794c/tenor.gif?itemid=13195594?raw=true",
"https://media1.tenor.com/images/ad30a04a6d010717872c59a9b314f422/tenor.gif?itemid=3385163?raw=true",
"https://media1.tenor.com/images/deb652a7590d7ba3b496707b21ddab25/tenor.gif?itemid=10741910?raw=true",
"https://media1.tenor.com/images/3b0016a54369d03e1c81cc04465b8d77/tenor.gif?itemid=15524876?raw=true",
"https://media1.tenor.com/images/049d7634b324eabfcc231d60da63ce3e/tenor.gif?itemid=14018832?raw=true",
"https://media.tenor.com/images/d705b78cd43dcdd55a52bbe005af593f/tenor.gif?raw=true",
"https://media.giphy.com/media/QVmK3dFFvOIgZ6pBKR/giphy.gif?raw=true",
"https://cdn.discordapp.com/attachments/571775019311562784/706947841116864532/Comp-1.gif?raw=true",
"https://media1.tenor.com/images/e1c69ebb1bcc9e8b319e584abe4b61a9/tenor.gif?itemid=12699976?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor(colors.lightPurple)
          .setDescription(`${message.author} está chamando o FBI para um cidadão qualquer...`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor(colors.lightPurple)
          .setDescription(`${message.author} CHAMOU O FBI PARA O ${killed} FUJA! FUJA!!!`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
