const Discord = require("discord.js");

module.exports = {
    name: "icon",
    aliases: [],
    category: "info",
    description: "Returns Bot info",
    run: async (bot, message, args) => {
let msg = await message.channel.send("Gerando ícone...");

if(!message.guild.iconURL) return msg.edit("Nenhum ícone encontrado!");

let iconembed = new Discord.RichEmbed()
.setColor("00ff00")
.setFooter("Pesquisado por " + message.author.tag)
.setImage(message.guild.iconURL)
.setTitle("Ícone")
.setDescription("[Link do URL do ícone]("+message.guild.iconURL+")")

message.channel.send(iconembed)

    msg.delete();
}
}
