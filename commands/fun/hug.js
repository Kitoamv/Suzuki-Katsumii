const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "hug",
        aliases: [],
        description: "Send a virtual hug to someone!",
        usage: "(@user)",
        category: "fun",
    run: async (client, message, args) => {
        let hugurl = await neko.sfw.hug();
        let huser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(huser){
            message.channel.send(`${huser}, ${message.author} acaba de te dar um abraço virtual! \n${hugurl.url}`);
        } else {
            message.channel.send(`Estou lhe dando um abraço virtual! \n${hugurl.url}`);
        }

        return;
    }
}
