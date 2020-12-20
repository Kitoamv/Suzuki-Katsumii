const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Faça o bot dizer coisas atráves deste comando!",
    usage: "<input>",
    run: (client, message, args) => {
        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Você claramente não é adequado(a) para usar este comando!.").then(m => m.delete(5000));

        if (args.length < 0)
            return message.reply("Você não espera que eu faça o trabalho todo sozinha né ?").then(m => m.delete(5000));

        const roleColor = message.guild.me.highestRole.hexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColorv);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
