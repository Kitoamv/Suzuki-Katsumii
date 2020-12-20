const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["server"],
    category: "info",
    description: "Returns server info",
    run: async (client, msg, arg) => {
        const role = msg.guild.roles.size;
        const online = msg.guild.members.filter(m => m.presence.status != 'offline').size
        const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
            const embed = new Discord.RichEmbed()
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setColor(`RANDOM`)
            .setThumbnail(msg.guild.iconURL)
            .setDescription(`<a:diamond:595219713970405388> Owner <a:diamond:595219713970405388>: ${msg.guild.owner.user.tag} (${msg.guild.owner.id})`)
            .addField('👥 **Membros No Servidor** 👥', `${msg.guild.memberCount}`, true)
            .addField('<a:loading:637596963709386771> **Pessoas Online** <a:loading:637596963709386771>', `Exatamente ${online} online`, true)
            .addField('<a:6570_planet:641036863926173707> **Região do Server** <a:6570_planet:641036863926173707>', msg.guild.region)
            .addField('<a:loadingg:641036417157562378> **Criado Em** <a:loadingg:641036417157562378>', msg.guild.createdAt.toLocaleString(), true)
            .addField(msg.author.username + " Ingressou em", msg.member.joinedAt.toLocaleString(), true)
            .addBlankField()
            .addField('<a:boost:637596974102872064> **Nível de Boost** <a:boost:637596974102872064> : ', `${verificationLevels[msg.guild.verificationLevel]}`)
            .addField('<a:jotaro:595219714221932547> **Canais de Voz** <a:jotaro:595219714221932547>' , `${msg.guild.channels.filter(chan => chan.type === 'voice').size}`)
            .addField('<a:jotaro:595219714221932547> **Canais de Texto** <a:jotaro:595219714221932547>' , `${msg.guild.channels.filter(chan => chan.type === 'text').size}`, true)
            .addField('<a:imloved:595219704168185868> **Cargos** <a:imloved:595219704168185868>', role, true)
            msg.channel.send({embed})
    }
}
