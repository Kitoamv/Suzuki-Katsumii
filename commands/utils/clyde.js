const { RichEmbed } = require("discord.js");
const fetch = require('node-fetch')

module.exports = {
        name: "clyde",
        aliases: [''],
        description: "Faça o Bot Clyde falar alguma coisa.",
        ussage: "<prefix>clyde <text>",
        category: "utils",
    run: async (client, message, args) => {
const text = args.slice(0).join(" ")
if(!text) return message.channel.send("Você precisa de algum texto lá")
fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
.then((res) => res.json())
.then((body) => {
    console.log(body)
    let eembed = new RichEmbed()
    .setImage(body.message)
    .setColor("GOLD")
    message.channel.send(eembed)
})
  }
}
