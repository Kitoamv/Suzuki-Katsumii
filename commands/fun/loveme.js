module.exports = {
    name: "lover",
    aliases: [],
    category: "fun",
    description: "Eu amo o...",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
    var user = client.guilds.get(message.guild.id).members.random();
    message.channel.send(`Eu amo o(a) ${user.user.username}!`)
}
}
