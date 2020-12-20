const { RichEmbed } = require("discord.js");
const config = require("../../JSON/config.json");

module.exports = {
  name: "userinfo",
  aliases: ["uinfo"],
  category: "info",
  description: "Returns server info",
  run: async (client, message, args) => {
        let info = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(info){
            let uembed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", info.user.createdAt)
            .addField("Joined Server", info.joinedAt)
            .addField("Roles", info.roles.map(r => `${r}`).join(" | "), true)
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${message.member.displayName}`, message.member.user.displayAvatarURL)

            message.channel.send(uembed);
        } else {
            let info = message.member;
            let uembed = new RichEmbed()
            .setTitle(`Info for: ${info.displayName}`)
            .setColor(config.colors.purple)
            .setThumbnail(info.user.displayAvatarURL)
            .addField("Discord Tag", info.user.tag)
            .addField("Discord ID", info.id)
            .addField("Account Created", info.user.createdAt)
            .addField("Joined Server", info.joinedAt)
            .addField("Roles", info.roles.map(r => `${r}`).join(" | "), true)
            .addField("Status", info.presence.status)
            .setTimestamp()
            .setFooter(`Info requested by: ${info.displayName}`, info.user.displayAvatarURL)

            message.channel.send(uembed);
        }

        return;
    }
}
