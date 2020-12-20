const { RichEmbed } = require('discord.js');
const request = require('node-superfetch');

module.exports = {
    name: "porngif",
    category: "nsfw",
    description: "Use este comando para procurar um GIF pornô.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
 if (!message.channel.nsfw) return message.channel.send("Você deve usar este comando em um chat **NSFW**!");
    try {
        const { body } = await request
            .get('https://www.reddit.com/r/adultgifs.json?sort=top&t=week')
            .query({
                limit: 800
            });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('Parece que estamos sem memes novos !, Tente novamente mais tarde.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        let image = allowed[randomnumber].data.url
        let imagefix = image.replace(".gifv", ".gif")
        const embed = new RichEmbed()
            .setColor("#ff0033")
            .setTitle(allowed[randomnumber].data.title)
            .setDescription("Enviado Por: " + allowed[randomnumber].data.author)
            .setImage(imagefix)
        return message.channel.send(embed);
    } catch (err) {
        console.log(err);
        return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente novamente mais tarde.`);
    }
}
}
}
