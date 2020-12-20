const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reporte algum usuário do servidor!",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        // If the bot can delete the message, do so
        if (message.deletable) message.delete();

        // Either a mention or ID
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No person found
        if (!rMember)
            return message.reply("Como posso dizer isso... quem deveria ser essa pessoa ?").then(m => m.delete(5000));

        // The member has BAN_MEMBERS or is a bot
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Não é possível denunciar um membro banido!").then(m => m.delete(5000));

        // If there's no argument
        if (!args[1])
            return message.channel.send("Forneça um motivo para o relatório").then(m => m.delete(5000));

        const channel = message.guild.channels.find(c => c.name === "relatórios")

        // No channel found
        if (!channel)
            return message.channel.send("Não foi possível encontrar um canal de #relatórios").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Relatando membro", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Membro:** ${rMember} (${rMember.user.id})
            **> Reportado pelo:** ${message.member}
            **> Reportado no canal:** ${message.channel}
            **> Motivo:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}
