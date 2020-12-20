const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
  name: "donate",
  aliases: ["doação"],
  category: "bot",
  description: "Faça uma doação para que o bot continue a funcionar",
  run: async (client, message, args) => {
    let embed = new Discord.RichEmbed()
      .setThumbnail("http://logok.org/wp-content/uploads/2014/05/Paypal-logo-pp-2014.png")
      .setDescription('<a:5107_intslWOW:595219717015470120> Obrigado por considerar doar, o financiamento dos bots custa MUITO dinheiro, então qualquer quantia de dinheiro ajudaria nosso bot de discórdia a permanecer vivo, obrigado e bot! <a:5107_intslWOW:595219717015470120>')
      .setColor(0x00A2E8)
      .addField("Paypal Email", "kiritoamvs202@gmail.com")
      .addField("Patreon", "https://bit.ly/2UuTHa9")
      message.channel.send({embed});
    }
}
