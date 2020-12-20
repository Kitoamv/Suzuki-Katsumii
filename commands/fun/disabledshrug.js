const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
        name: "disabledshrug",
        aliases: [],
        description: "Não quer um abraço ?",
        ussage: "<prefix>disabledshrug",
        category: "fun",
    run: async (client, message, args) => {
    message.channel.send('¯\_(ツ)_/¯');
}
}
