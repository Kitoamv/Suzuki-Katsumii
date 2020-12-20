const Discord = require("discord.js");

module.exports = {
    name: "kemonomimi",
    category: "nsfw",
    description: "Uma Imagem em 4K",
    run: async (client, message, args) => {
    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send('Você deve usar este comando em um chat **NSFW**!')

    var lo = new Discord.RichEmbed()
                .setDescription(`Por favor aguarde... <a:Loading:592829210054098944>`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'kemonomimi'}).end((err, response) => {

            var embed_nsfw = new Discord.RichEmbed()
                .setDescription(`:underage:\n**[A imagem não carrega? clique aqui](${response.body.message})**`)
                .setTimestamp()
                .setImage(response.body.message)

            m.edit(embed_nsfw);
        });
    });
}
}
