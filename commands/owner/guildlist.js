const { RichEmbed } = require('discord.js');

module.exports = {
    name: "guildlist",
    category: "owner",
    description: "Permite que você veja em quais guildas o bot está.",
    usage: "<prefix>guildlist",
    run: async (client, message, args, funcs, bot) => {
module.exports.run = (bot, message, args, funcs) => {
  checkBotOwner(message)
  try {
    let guilds = bot.guilds.map(g => `Nome do Server: ${g.name}, Contagem de membro: ${g.members.size}, ID do Server: ${g.id}`).join('\n');
    if (bot.guilds.size >= 1) {
      message.channel.send("```" + guilds + "```", {
        split: {
          prepend: "```",
          append: "```"
        }
      });
      return;
    }
    let embed = new RichEmbed()
      .setTimestamp()
      .setThumbnail(bot.user.avatarURL)
      .setFooter(`Total de guildas: ${bot.guilds.size}`)
      .setColor(funcs.rc())
    bot.guilds.forEach(guild => {
      embed.addField(`__**${guild.name}**__`, `Owner: ${guild.owner.user.tag}\nMembercount: ${guild.members.size}\nID: ${guild.id}`)
    });
    message.channel.send(embed);
  } catch (e) {
    console.log(e);
    funcs.send(`Oh não, ocorreu um erro!\n${e.message}`);
  }
}
}
}
