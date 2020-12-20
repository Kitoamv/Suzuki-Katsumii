const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "kiss",
        aliases: ["beijo"],
        description: "Dê um belo beijo virtual na pessoa que você mencionar!",
        usage: "(@user)",
        category: "fun",
    run: async (client, message, args) => {
        let kiss = await neko.sfw.kiss();
        let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(kuser){
            message.channel.send(`${kuser}, ${message.author} acaba de te dar um beijo virtual! \n${kiss.url}`);
        } else {
            message.channel.send(`Vou te dar um beijo virtual! \n${kiss.url}`);
        }

        return;
    }
}
