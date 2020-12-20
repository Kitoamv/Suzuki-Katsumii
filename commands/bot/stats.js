const { RichEmbed } = require('discord.js')
const os = require('os')

module.exports = {
    name: "stats",
    category: "bot",
    description: "Mostra o estado atual do bot.",
    run: async (bot, msg, args, config) => {
  let cEmbed = new RichEmbed()
  .setColor('#FF00AA')
  .setDescription('Aqui estão algumas estatísticas sobre o servidor que está executando o bot')
  .setAuthor(`${bot.user.username}`, msg.guild.iconURL)
  .addField(`Tipo de sistema operacional:`, os.type())
  .addField(`Tempo de atividade do sistema:`, `${os.uptime()} seconds`)
  .addField(`Memória RAM grátis:`, `${os.freemem() / 1000000}MB`)
  .addField(`Memória RAM total:`, `${os.totalmem() / 1000000}MB`)
  .addBlankField()
//  .addField(`Permissions:`, `${msg.guild.fetchMember(bot.user.id).permissions()}`)
  .setTimestamp()
  .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)

  msg.channel.send({embed: cEmbed})
}
}
