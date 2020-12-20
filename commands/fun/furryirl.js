const Discord = require("discord.js")
const randomPuppy = require(`random-puppy`)

module.exports = {
        name: "furryirl",
        aliases: [],
        description: "Pegue uma imagem aleatória do subreddit furry, pode ser um meme ou talvez não.",
        ussage: "<prefix>furryirl",
        category: "fun",
    run: async (client, message, args) => {
      await message.delete();
      const subReddits = [`furry_irl`, `furry`];
      const random = subReddits[Math.floor(Math.random() * subReddits.length)]
      const img = await randomPuppy(random);
      const furry = new Discord.RichEmbed()
          .setAuthor(`${message.author.username}`)
          .setTitle("Furries são incríveis UwU!")
          .setImage(img)
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(`ID: ${message.author.id}`)
      message.channel.send(furry)
  }
}
