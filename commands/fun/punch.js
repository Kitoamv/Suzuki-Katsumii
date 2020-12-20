const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "punch",
        aliases: ["socar","soco"],
        description: "DANDO UM SOCO NA CARA NESSE BABACA!",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/00a3cca756b4bbae191ac33ccc6d7bcf/tenor.gif?raw=true",
"https://media.tenor.com/images/eb379f98c7ced6d43a16e78dc25ae864/tenor.gif?raw=true",
"https://media.tenor.com/images/5b668436338971d42469d7348a5340e5/tenor.gif?raw=true",
"https://media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif?raw=true",
"https://media.tenor.com/images/b11c79cf158d8c9bd6e721676b06ad73/tenor.gif?raw=true",
"https://media.tenor.com/images/7eb5ede6402a3fb97ab9fccc81640c2c/tenor.gif?raw=true",
"https://media.tenor.com/images/bdd77613427552c73ba0a7ba82b21787/tenor.gif?raw=true",
"https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif?raw=true",
"https://media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif?raw=true",
"https://media.tenor.com/images/9d0c77708b26b8ddbe2c5663fdca84a3/tenor.gif?raw=true",
"https://media.tenor.com/images/b648d3b85d05174cc66348d50e5fc34e/tenor.gif?raw=true",
"https://media.tenor.com/images/03c7abfa76741ec624aed65169cf8024/tenor.gif?raw=true",
"https://media.tenor.com/images/dfa40524e03f4b982de034980388ed7a/tenor.gif?raw=true",
"https://media.tenor.com/images/26ed0cee60197a8329defae1f6586dd5/tenor.gif?raw=true",
"https://media.tenor.com/images/296565f08e695a3e82a465ab62984667/tenor.gif?raw=true",
"https://media.tenor.com/images/f0e8430234e167af1adb61f2654d862b/tenor.gif?raw=true",
"https://media.tenor.com/images/472e545c4abb8ec5f2dd2989b80425b6/tenor.gif?raw=true",
"https://media.tenor.com/images/81f5de245fb92e504d51f030877b48fc/tenor.gif?raw=true",
"https://media.tenor.com/images/697ef4b275b5d9de5215a37b1e7f96da/tenor.gif?raw=true",
"https://media.tenor.com/images/f73e3653ecbe2922d278fe68cc1ab15d/tenor.gif?raw=true",
"https://media.tenor.com/images/9422d0dba2fb1cbd112e2951788cb4cf/tenor.gif?raw=true",
"https://media.tenor.com/images/b65ae75b7610580ee3af9c7a6dd7e7e8/tenor.gif?raw=true",
"https://media.tenor.com/images/09c22ca21ef9a523dd62e78817991900/tenor.gif?raw=true",
"https://media.tenor.com/images/b561ad7377142adf365fe33f20fa45e8/tenor.gif?raw=true",
"https://media.tenor.com/images/9892c70c245fd094978e9ac9dda984ca/tenor.gif?raw=true",
"https://media.tenor.com/images/eb6c0f1a9c1ff768b457994cce116ab6/tenor.gif?raw=true",
"https://media.tenor.com/images/17b7e46bad0bcbf9a3fd5d863ceb04fe/tenor.gif?raw=true",
"https://media.tenor.com/images/7eddfd84a0250cf16b7265080edace2c/tenor.gif?raw=true",
"https://media.tenor.com/images/1938c13f5f820e34f9d43f1661a67b3f/tenor.gif?raw=true",
"https://media.tenor.com/images/45b5ef22c2b5b146ae12927c45f192f1/tenor.gif?raw=true",
"https://media.tenor.com/images/d4f4a7a19c6560450d54561c6ebe55f0/tenor.gif?raw=true",
"https://media.tenor.com/images/3df1bbc40adf0d817494fee57f4a9b62/tenor.gif?raw=true",
"https://media.tenor.com/images/485586f713edd5eddff6c0ac619c9c77/tenor.gif?raw=true",
"https://media.tenor.com/images/7ece8bf188299c898cc208c108da21e4/tenor.gif?raw=true",
"https://media.tenor.com/images/b29bc8874bb6444bea43cbf17c332b76/tenor.gif?raw=true",
"https://media.tenor.com/images/38e80fa3e8829b37008070fafe37bedf/tenor.gif?raw=true",
"https://media.tenor.com/images/e9f33925a9d24e22f5e5d6612ccf37f1/tenor.gif?raw=true",
"https://media.tenor.com/images/af187d245e5705592eda77b0a8c4084c/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor(colors.lightPurple)
          .setDescription(`${message.author} acaba de dar um soco em uma pessoa inocente`)
          .setImage(gif2)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor(colors.lightPurple)
          .setDescription(`${message.author} deu um soco em cheio no ${killed}`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
