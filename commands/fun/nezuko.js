const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "nezuko",
        aliases: ["nezu","nezukogif","nezuchan"],
        description: "Você realmente esta querendo chorar? Vá em frente...",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/d70d683092553fb302fd8b829fe18899/tenor.gif?raw=true",
"https://media.tenor.com/images/4a387a4040f68a13e1316fbac47944fe/tenor.gif?raw=true",
"https://media.tenor.com/images/9ab8690cef87ddd1cb7ef4b807ac0580/tenor.gif?raw=true",
"https://media.tenor.com/images/7513cea30d5b06dfd6766243a34a8545/tenor.gif?raw=true",
"https://media.tenor.com/images/d2f32d3a13a2c36da9a413fff8b2d157/tenor.gif?raw=true",
"https://media.tenor.com/images/8e3fae37b32d99395fce2724ae307c7c/tenor.gif?raw=true",
"https://media.tenor.com/images/4cdc00086dad667195c9d372828c5087/tenor.gif?raw=true",
"https://media.tenor.com/images/5dd72feb5acc9861fc98521640d073d1/tenor.gif?raw=true",
"https://media.tenor.com/images/7be5f0892000ef833b804bfa95b1379c/tenor.gif?raw=true",
"https://media.tenor.com/images/5870306df58ec45fd2793dd5148c04be/tenor.gif?raw=true",
"https://media.tenor.com/images/88f1b043f4f607df40ea8a6036e58870/tenor.gif?raw=true",
"https://media.tenor.com/images/2a09efece78ef8ff61d5b5521114b3c2/tenor.gif?raw=true",
"https://media.tenor.com/images/f2afd72c4e8e37ef73109efa6ff4cef2/tenor.gif?raw=true",
"https://media.tenor.com/images/443023e5a8defd1ee63666d2735dd2f1/tenor.gif?raw=true",
"https://media.tenor.com/images/9f8a66a1cec248c560c4f068b9e5bf87/tenor.gif?raw=true",
"https://media.tenor.com/images/9521db5c4df0ac34edc0803ab41a0afa/tenor.gif?raw=true",
"https://media.tenor.com/images/13048f0910e1a54345b3d85a547d987b/tenor.gif?raw=true",
"https://media.tenor.com/images/8cc6e00304cfc5ba42174b361ded1b91/tenor.gif?raw=true",
"https://media.tenor.com/images/e313ac478744e0931f5433c71968f9eb/tenor.gif?raw=true",
"https://media.tenor.com/images/30895e5b7bb1454169cd8c53ea2c2d52/tenor.gif?raw=true",
"https://media.tenor.com/images/384bcb3f2ba99d458fc63bb5890e88bd/tenor.gif?raw=true",
"https://media.tenor.com/images/a2933d54797a026a351d43126caaf212/tenor.gif?raw=true",
"https://media.tenor.com/images/b061ef44ece54fa5f29ff2a8dbc2a6f0/tenor.gif?raw=true",
"https://media.tenor.com/images/8f29255135f8417d7ea3736de44bd733/tenor.gif?raw=true",
"https://media.tenor.com/images/b99a7c6ff98dcce9202b155d5987a4eb/tenor.gif?raw=true",
"https://media.tenor.com/images/0139dfab718b5d2f1ca0eefaa2e5fe29/tenor.gif?raw=true",
"https://media.tenor.com/images/e62c6eeacc1513caec2886c0395b3368/tenor.gif?raw=true",
"https://media.tenor.com/images/3e72c95a23fdf2f8e3755eddfdf40957/tenor.gif?raw=true",
"https://media.tenor.com/images/165893986e2dcdab1b766ec168bdd5d1/tenor.gif?raw=true",
"https://media.tenor.com/images/32a560841504193c6ad032ca7d9fb3ca/tenor.gif?raw=true",
"https://media.tenor.com/images/ea57dd29663a8769a52f78bcbbdd7a8e/tenor.gif?raw=true",
"https://media.tenor.com/images/62db4e0f84f6c96d9418dd26392e510b/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`${message.author} QUER VER A NEZUKO-CHAN!!`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`${message.author} QUER VER A NEZUKO-CHAN COM O ${killed}`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
