const Discord = require("discord.js");

module.exports = {
    name: "botactivity",
    aliases: ["ba"],
    category: "owner",
    description: "Use este comando para adicionar uma atividade para o bot",
    usage: "<message>",
    run: async (client, msg, arg) => {
        msg.delete();
        checkBotOwner(message)
        let activity = arg.join(" ");
        if (!activity) return msg.reply("Forneça uma mensagem válida")
        let baEmbed = new Discord.RichEmbed()
            .setTitle("Alteração de Atividade do Bot")
            .setDescription(activity)
            .setColor("#00ff00")
        client.user.setActivity(activity) && msg.channel.send(baEmbed)
    }
}
