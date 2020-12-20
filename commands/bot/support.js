const Discord = require("discord.js");

module.exports = {
  name: "support",
  aliases: ["suporte"],
  category: "bot",
  description: "Receba o convite para entrar no server oficial do bot",
  run: async (client, message, args) => {
const embedd = new Discord.RichEmbed()
  .setColor('#00FFFF')
  .setTitle('Junte-se ao servidor de suporte!')
  .setURL('https://discord.gg/EYGU6wpH4u');
return message.channel.send(embedd);
}
}
