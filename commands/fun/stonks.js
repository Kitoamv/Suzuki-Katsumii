const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "stonks",
        aliases: [],
        description: "STONKS!",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://cdn.dicionariopopular.com/imagens/image-128.jpg?raw=true",
"https://cdn.dicionariopopular.com/imagens/image-129.jpg?raw=true",
"https://pm1.narvii.com/7299/046229ac625f2f02b4437ed652d2f70d36cd5e3er1-700-1619v2_hq.jpg?raw=true",
"https://i.pinimg.com/originals/9f/07/4b/9f074b8d551800c112b382559455baf3.jpg?raw=true",
"https://cdn.dicionariopopular.com/imagens/image-130.jpg?raw=true",
"https://images7.memedroid.com/images/UPLOADED663/5d96a26c93a6c.jpeg?raw=true",
"https://i.pinimg.com/736x/08/9a/ae/089aae4316671587a2743b263ae1e7b4.jpg?raw=true",
"http://img.ibxk.com.br/ns/rexposta/2019/08/30/30200752948142.jpg?raw=true",
"https://i.pinimg.com/originals/b9/a1/bd/b9a1bdffb60cbc3c8814f0e7a1b42c0f.jpg?raw=true",
"https://www.ahnegao.com.br/wp-content/uploads/2019/09/memes-25.jpg?raw=true",
"http://pm1.narvii.com/7299/ff627ce30a1db6ea7769aa847c15f2027404e3bfr1-720-868v2_00.jpg?raw=true",
"https://www.ahnegao.com.br/wp-content/uploads/2019/09/memes-26-1.jpg?raw=true",
"https://i.redd.it/lxoxpmujmw341.jpg?raw=true",
"https://i.pinimg.com/originals/ab/e8/84/abe884467bd7c0d9341cc8c146bcbae8.jpg?raw=true",
"https://images7.memedroid.com/images/UPLOADED879/5d65b2569b9ff.jpeg?raw=true",
"https://images3.memedroid.com/images/UPLOADED293/5dd7202f3f97f.jpeg?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor(colors.blurple)
          .setDescription(`${message.author} está vendo memes do stonks`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor(colors.blurple)
          .setDescription(`${message.author} está vendo memes do stonks com o ${killed}`)
          .setImage(gif)
          .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
