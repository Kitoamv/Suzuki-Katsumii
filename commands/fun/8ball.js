const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
        name: "8ball",
        aliases: ["8b", "9ball"],
        description: "faça suas perguntas para a Suzuki",
        category: "fun",
    run: async (client, message, args) => {
           let reason = args.join(' ');
          if (reason.length < 1) return message.channel.send('Você não fez uma pergunta ao bot.');
          var ball = ['É certo.','Sem dúvida.', 'Sem chance.', 'Talvez, o tempo dirá.', 'De jeito nenhum.', 'Concentre-se e tente novamente.', 'A meu ver, sim', 'Outlook é bom' , 'Provavelmente', 'Melhor não dizer agora', 'Minhas fontes dizem não', 'Sinais apontam para sim', 'Sim definitivamente', 'É decididamente verdade', 'Pelo que vejo, sim', 'Minhas fontes dizem não','Minhas fontes dizem não','Outlook não é tão bom','Muito duvidoso'];
          const embed = new Discord.RichEmbed()
          .setColor(0x00A2E8)
          .addField("Sua Pergunta :", reason)
          .addField("Katsumi Responde :", ball[Math.floor(Math.random () * ball.length)])
          .setThumbnail("http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png")
          message.channel.send({embed})
      }
}
