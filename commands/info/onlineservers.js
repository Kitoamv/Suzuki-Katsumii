module.exports = {
    name: "serverlist",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const dc = new Discord.RichEmbed()
        .setDescription(`Eu estou online em exatamente ${client.guilds.size} servidores!!`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor(`#a500ff`)
      message.channel.send(dc)
    }
}
