const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "poke",
        aliases: ["cutucar"],
        description: "Cutuque alguém! ( ͡° ͜ʖ ͡°)",
        usage: "<@mencionar>",
        category: "fun",
    run: async (client, message, args) => {
        let poke = await neko.sfw.poke();
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(puser){
            message.channel.send(`${puser}, está lhe cutucando! \n${poke.url}`);
        } else {
            message.channel.send(`cutuca! \n${poke.url}`);
        }

        return;
    }
}
