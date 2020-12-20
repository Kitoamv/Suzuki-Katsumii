const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = {
        name: "sexyrate",
        aliases: ["sexrate"],
        description: "Taxa de Porcentagem de você ser sexy.",
        category: "fun",
    run: async (client, message, args) => {
    const sexyrate = Math.floor(Math.random() * 100)
       const embed = new Discord.RichEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "Eu avalio você **" + sexyrate + " de 100** na escala sexy")
            .setThumbnail(message.author.displayAvatarURL)
       message.channel.send({embed})
}
}
