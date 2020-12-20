const { checkBotOwner } = require("./../../utils/permissions")

module.exports = {
    name: "forceleave",
    category: "owner",
    description: "Força o bot a deixar uma guilda.",
    run: async (client, message, args) => {
module.exports.run = (bot, message, args, funcs) => {
    checkBotOwner(message)
    const guildToLeave = args.join('')
    const checkGuild = bot.guilds.get(guildToLeave);
    if (!checkGuild) return message.channel.send(`Não estou na guilda com o ID: ${guildToLeave}`)
    try {
        if (message.guild.id === guildToLeave) return ('Por favor, use este comando apenas para forçar a deixar outras guildas.')
        checkGuild.leave();
        funcs.send(`Eu deixei a guilda com ID: ${guildToLeave}`)
    } catch (err) {
        console.log(err.stack)
        return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente novamente mais tarde.`);
    }
}
}
}
