const { PREFIX } = process.env
const { RichEmbed } = require('discord.js')

module.exports.usageCommand = (client, message, name, content) => {
  const command = client.commands.get(name)
  const embed = new RichEmbed()
    .setDescription(`${PREFIX}${command.help.name} ${command.help.usage}\n${content || ''}`)
    .setColor('#f1c40f')
  return message.channel.send(embed)
}
