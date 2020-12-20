const { RichEmbed } = require("discord.js");
const { checkBotOwner } = require("./../../utils/permissions")

module.exports = {
    name: "ssay",
    aliases: [],
    category: "moderation",
    description: "Faça o bot dizer coisas atráves deste comando!",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();
        checkBotOwner(message)
    for(var i = 0; i< 1; i++){
    message.channel.send(args.slice(0).join(" "))
    }
}
}
