const { RichEmbed } = require('discord.js');
const request = require('node-superfetch');

module.exports = {
    name: "milf",
    category: "nsfw",
    description: "Use este comando para uma imagem com um milf.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
  try {
    const {
      body
    } = await request
      .get("https://www.reddit.com/r/milf.json?sort=top&t=week")
      .query({
        limit: 800
      });
    //const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
    //if (!allowed.length) return send(`Can't find any other images right now, try again later.`);
    const allowed = body.data.children;
    if (!message.channel.nsfw) return funcs.send(`Você deve usar este comando em um chat **NSFW**!`);
    const randomnumber = Math.floor(Math.random() * allowed.length);
    const embed = new RichEmbed()
      .setColor("#ff0033")
      .setTitle(allowed[randomnumber].data.title)
      .setDescription("Posted by: " + allowed[randomnumber].data.author)
      .setImage(allowed[randomnumber].data.url)
    message.channel.send(embed);
  } catch (err) {
    console.log(err);
    return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente novamente mais tarde.`);
  }
}
}
}
