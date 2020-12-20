const Discord = require("discord.js");
const randomPuppy = require("random-puppy");


module.exports = {
        name: "animeme",
        description: "Suzuki Katsumi envia um meme aleatório de anime no reddit!",
        usage: "<prefix>animeme",
        category: "fun",
    run: async (client, message, args) => {
  const subReddits = ["Animemes"];
  const random = subReddits[Math.floor(Math.random() * subReddits.length)];
  const img = await randomPuppy(random);
  const embed = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setImage(img)
    .setTitle(`subreddit: ${random}`)
    .setURL(`https://reddit.com/r/${random}`);

  message.channel.send(embed);
}
}
