const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
    description: "Retorna informações do usuário",
    usage: "[usuário | id | marcação]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Informação do Membro:', stripIndents`**> Nome a Amostra:** ${member.displayName}
            **> Ingressou em:** ${joined}
            **> Cargos:** ${roles}`, true)

            .addField('Informação do usuário:', stripIndents`**> ID:** ${member.user.id}
            **> Nome de usuário**: ${member.user.username}
            **> Tag**: ${member.user.tag}
            **> Criado em**: ${created}`, true)

            .setTimestamp()

        if (member.user.presence.game)
            embed.addField('Jogando neste momento', stripIndents`**> Nome:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}
