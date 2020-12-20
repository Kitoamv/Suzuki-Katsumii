const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")

module.exports = {
        name: "divorce",
        aliases: [],
        description: "Você esta agora mesmo divorciado(a)",
        ussage: "<prefix>divorce <mention>",
        category: "fun",
    run: async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("você não pode se divorciar de ninguém")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} Você se divorciou de ${message.author.username} :broken_heart:`,{
                embed: {
                    image: {
                        url: "https://i.imgur.com/IgvLWaa.gif"
                    }
                }
            })
}
}
