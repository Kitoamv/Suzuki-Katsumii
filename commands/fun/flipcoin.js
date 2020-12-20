const Discord = require("discord.js");

module.exports = {
    name: "flipcoin",
    aliases: ["coinflip", "cf", "fc", "headsortails", "ht", "coin", "moeda", "mflip"],
    category: "fun",
    description: "Flip a coin",
    run: async (client, msg, arg) => {
        msg.delete();
        var coin = ["Cara","Coroa","Neutro"];
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Coin Flip")
        .setDescription("Invertendo")

        const embed1 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Coin Flip")
        .setDescription("Invertendo .")

        const embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Coin Flip")
        .setDescription("Invertendo . .")

        const embed3 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Coin Flip")
        .setDescription("Invertendo . . .")

        const embed4 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Coin Flip")
        .setDescription(msg.author.toString() + " jogou uma moeda para o alto e o resultado foi: **" + (coin[Math.floor(Math.random() * coin.length)]) + "**")

        const m = await msg.channel.send(embed);
        m.edit(embed1);
        m.edit(embed2);
        m.edit(embed3);
        m.edit(embed4);
    }
}
