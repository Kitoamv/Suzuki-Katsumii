const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "sleep",
        aliases: ["dormir","sono"],
        description: "Que sono...",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/3ad841e639ccc41b4d11242ef451cd71/tenor.gif?raw=true",
"https://media.tenor.com/images/fdb3feec0e46f50ff17ea3910011781a/tenor.gif?raw=true",
"https://media.tenor.com/images/ebb3a5dd38c58878ebd588ad28e00560/tenor.gif?raw=true",
"https://media.tenor.com/images/afec7c115b7f42acb9e3a9f0fc2a8fc4/tenor.gif?raw=true",
"https://media.tenor.com/images/24cf02cf54c31241622a4d3f4dcc2e3c/tenor.gif?raw=true",
"https://media.tenor.com/images/8b3ac1d9fcbac3701957d1826043fedc/tenor.gif?raw=true",
"https://media.tenor.com/images/2d198e4454e891404cca6651a582d49e/tenor.gif?raw=true",
"https://media.tenor.com/images/47ac1ed8c5d5e71e8737ad173f2f8696/tenor.gif?raw=true",
"https://media.tenor.com/images/6216fb895a167b823e2659e5e3c198c9/tenor.gif?raw=true",
"https://media.tenor.com/images/24cf02cf54c31241622a4d3f4dcc2e3c/tenor.gif?raw=true",
"https://media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif?raw=true",
"https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif?raw=true",
"https://media.tenor.com/images/482a5f00a0b50e1688c4c66f48029aff/tenor.gif?raw=true",
"https://media.tenor.com/images/87c1214eb60e46e1ec78520c6c7cd415/tenor.gif?raw=true",
"https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif?raw=true",
"https://media.tenor.com/images/a12ae008516d6b0e3e70bdbda8d0af7c/tenor.gif?raw=true",
"https://media.tenor.com/images/8c8e95fea5ba16f5d5fe782889201509/tenor.gif?raw=true",
"https://media.tenor.com/images/5bc6468e30a510d6b1f40fd297551e6f/tenor.gif?raw=true",
"https://media.tenor.com/images/7c5f7f7f81f93c057c92bc54a56d9402/tenor.gif?raw=true",
"https://media.tenor.com/images/049c3cca5c5797fabe045d7239241e55/tenor.gif?raw=true",
"https://media.tenor.com/images/e86174a470e4ec20c65bc5fed27455fe/tenor.gif?raw=true",
"https://media.tenor.com/images/6591a4e528866eae4f24816b1730a513/tenor.gif?raw=true",
"https://media.tenor.com/images/3ca01c7206f084d042304b9c4d3c80c0/tenor.gif?raw=true",
"https://media.tenor.com/images/f9d879d86e1caa599235fbb0e91f74e2/tenor.gif?raw=true",
"https://media.tenor.com/images/95922faed078942fc06fac0a9039f521/tenor.gif?raw=true",
"https://media.tenor.com/images/5773bf6468e5d1989ea18263fe48036a/tenor.gif?raw=true",
"https://media.tenor.com/images/e2e2bd3878f4d5fa2a9cab57fde486f5/tenor.gif?raw=true",
"https://media.tenor.com/images/397861dcb46aaddc02a0d46beccb63ee/tenor.gif?raw=true",
"https://media.tenor.com/images/e733262049286707d944188460855f59/tenor.gif?raw=true",
"https://media.tenor.com/images/717d27c960e4395c3d994f40c09e0e75/tenor.gif?raw=true",
"https://media.tenor.com/images/c3556af5d1f650b9e7a6246f85eb57c1/tenor.gif?raw=true",
"https://media.tenor.com/images/9f446887ac81ddbaa5f076972eb74bb2/tenor.gif?raw=true",
"https://media.tenor.com/images/73f35419936055719a65f0fbf796f3b3/tenor.gif?raw=true",
"https://media.tenor.com/images/8e63ba12c0f0f78fca98d52c905318ac/tenor.gif?raw=true",
"https://media.tenor.com/images/9119198c1d51be46d4b7d44447c427ec/tenor.gif?raw=true",
"https://media.tenor.com/images/d0b0cc21ba340ac3b6049b45bc9e2ff5/tenor.gif?raw=true",
"https://media.tenor.com/images/c90f1dd7e033283adada1346b1682085/tenor.gif?raw=true",
"https://media.tenor.com/images/f9583e3f41fbfffccce416a546f76feb/tenor.gif?raw=true",
"https://media.tenor.com/images/ce2349eb97709893d49e8f314d488598/tenor.gif?raw=true",
"https://media.tenor.com/images/f473204003ec4da6f4f74172a5800696/tenor.gif?raw=true",
"https://media.tenor.com/images/9a5b4b470b0324dcfadb4dddc8f19fdf/tenor.gif?raw=true",
"https://media.tenor.com/images/9d3678a780b8458deb97fdf9d879440e/tenor.gif?raw=true",
"https://media.tenor.com/images/f99ad8119e9f336df45fcc434b7eccf4/tenor.gif?raw=true",
"https://media.tenor.com/images/ae803b0f06debb4f52718df0a5066ef6/tenor.gif?raw=true",
"https://media.tenor.com/images/82f7e06430f953fb88c4582b3e3231af/tenor.gif?raw=true",
"https://media.tenor.com/images/414c44f4f56afb5b2ff383f77beb9fef/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está extremamente cansado...`)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está com sono`)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
