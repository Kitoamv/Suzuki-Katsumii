const { RichEmbed } = require('discord.js')

module.exports = {
  name: "avatar",
  category: "misc",
  description: "Mostre a foto de perfil de algum usuário",
  usage: "<id | mention>",
  run: async (client, message, args) => {
    const member = message.guild.member(message.mentions.users.first())
    const embed = displayAvatarURL => {
      const embed = new RichEmbed().setImage(displayAvatarURL)
      return message.channel.send(embed)
    }
    if (member) return embed(message.mentions.users.first().displayAvatarURL)
    return embed(message.author.displayAvatarURL)
  }
}
