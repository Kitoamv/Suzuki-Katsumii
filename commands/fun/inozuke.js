const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "inozuke",
        aliases: ["inozukee"],
        description: "Você realmente esta querendo chorar? Vá em frente...",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/97439bc6166afaf2eccba48f5acb3e58/tenor.gif?raw=true",
"https://media.tenor.com/images/f6acf5178a93c3f2a7629b195d1b898c/tenor.gif?raw=true",
"https://media.tenor.com/images/9cb1ddcba6ff6739b644eedacedacaab/tenor.gif?raw=true",
"https://media.tenor.com/images/8f590d707d2da132ecd431db18bff7e1/tenor.gif?raw=true",
"https://media.tenor.com/images/ea29a9202142015db900da9b521a196a/tenor.gif?raw=true",
"https://media.tenor.com/images/79b85e55b33d23df4bb0355a9969c242/tenor.gif?raw=true",
"https://media.tenor.com/images/e8b4bd1a238bd468ec1536c7ec56589f/tenor.gif?raw=true",
"https://media.tenor.com/images/6541ce9d06623a37949b002f7b4cdc88/tenor.gif?raw=true",
"https://media.tenor.com/images/6541ce9d06623a37949b002f7b4cdc88/tenor.gif?raw=true",
"https://media.tenor.com/images/09b7b169a294c6982090bff7d9173882/tenor.gif?raw=true",
"https://media.tenor.com/images/cba545d0dbccec397c9aa17457e8184d/tenor.gif?raw=true",
"https://media.tenor.com/images/9c6e3cf86ace6446e76cc008718375f3/tenor.gif?raw=true",
"https://media.tenor.com/images/ab5d43d18dbed532cfca90ffe19b44d4/tenor.gif?raw=true",
"https://media.tenor.com/images/7fd58663b4fe4aa4c1e2c0e9fffbdb8a/tenor.gif?raw=true",
"https://media.tenor.com/images/077ebdc5d7ec1c23e694d472e5e6dff9/tenor.gif?raw=true",
"https://media.tenor.com/images/0a0cb18d701681f3303a978fea86dd32/tenor.gif?raw=true",
"https://media.tenor.com/images/7b4d9bf2417f51d5a5a18abdc8a36f84/tenor.gif?raw=true",
"https://media.tenor.com/images/a4ba27842f4241feab9b89e1385fef9f/tenor.gif?raw=true",
"https://media.tenor.com/images/9420bbbb9aab16026a7fb2f2081fa305/tenor.gif?raw=true",
"https://media.tenor.com/images/6d4ffb15cdd8aea9715409b77611b7c3/tenor.gif?raw=true",
"https://media.tenor.com/images/892e8a5309f710a7a200b42c8d3b9d31/tenor.gif?raw=true",
"https://media.tenor.com/images/1d6448ba8b110ca01df4f658f422348c/tenor.gif?raw=true",
"https://media.tenor.com/images/d1c8085ced101db15176903654e3dfd6/tenor.gif?raw=true",
"https://media.tenor.com/images/1c57a9738d388cd88be6de7a8a6a3cfe/tenor.gif?raw=true",
"https://media.tenor.com/images/f5f91958bfd447af05b30f2bc88167f8/tenor.gif?raw=true",
"https://media.tenor.com/images/6cb0afea5fad658b7302e5cdd23a7b52/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`INOZUKE! INOZUKE! INOZUKE!!!`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`INOZUKE! INOZUKE! INOZUKE!!!`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
