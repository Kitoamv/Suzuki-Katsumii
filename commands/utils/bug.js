const { RichEmbed } = require("discord.js");
const config = require("../../JSON/config.json");

module.exports = {
    name: "bug",
    aliases: [""],
    category: "utils",
    description: "Um Comando para reportar um bug que esteja ocorrendo sobre o bot, seja comando ou não",
    run: async (client, message, args) => {
        await message.delete();
        let suggestion = args.join(" ");
        if(!suggestion) return message.reply("Diga-me o que você quer sugerir! `/suggest <sugestão>`");

        let suggestembed = new RichEmbed()
        .setTitle("Uma Nova Sugestão Acaba de Ser Adicionada")
        .setAuthor(message.member.displayName)
        .setColor(config.colors.purple)
        .setDescription(suggestion)

        let suggestionchannel = message.guild.channels.find(`name`, "📓▌bugs-log");
        suggestionchannel.send(suggestembed);

        return message.reply("Sua sugestão foi enviada!").then(msg => msg.delete(5000));

    }
}
