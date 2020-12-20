const fetch = require('node-fetch')
const { RichEmbed } = require('discord.js')

module.exports = {
    name: "mee6",
    aliases: [],
    category: "misc",
    description: "Veja a tabela de liderança no bot mee6.",
    run: async (bot, msg, args, config) => {
    let baseURL = `https://mee6.xyz/api/plugins/levels/leaderboard/`
    let embed = new RichEmbed();

    fetch(`${baseURL}${args[0]}`)
        .then(resp => resp.json())
        .then(json => {
            json.players.forEach(user => {
                embed.addField(`${user.username}#${user.discriminator}`,`Level: ${user.level}\nExperience: ${user.xp}`)
            });
            msg.channel.send(embed, {split: ''})
        })
}
}
