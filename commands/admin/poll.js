const Discord = require("discord.js");

module.exports = {
    name: "poll",
    category: "admin",
    aliases: ['votações'],
    description: "Inicie uma votação",
    usage: "<question>",
    permission: "MANAGE_GUILD",
    run: async (client, msg, arg) => {
        msg.delete();

        const nopermEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Você não tem permissão para usar isso!`)
        const nochannelEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Canal de pesquisa não encontrado`)
        const noquestionEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Forneça uma pergunta para iniciar uma enquete`)
            .setFooter(`A pergunta deve ter mais de 10 caracteres`)

        if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return msg.channel.send(nopermEmbed).then(msg => msg.delete(5000));
        let pollchannel = msg.guild.channels.find(pollchannel => pollchannel.name === `💡┇votações`);
        if(!pollchannel) return msg.channel.send(nochannelEmbed).then(msg => msg.delete(5000));
        let question = arg.join(' ');
        if(!question || question < 10) return msg.channel.send(noquestionEmbed).then(msg => msg.delete(5000));
        let pollEmbed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`**${question}**`)
            .setDescription(`*Reagir para votar*`)
            .setTimestamp()
        pollchannel.send(pollEmbed).then(sentEmbed => {
            sentEmbed.react("👍")
            .then (() => sentEmbed.react("❔"))
            .then (() => sentEmbed.react("👎"))
        })
    }
}
