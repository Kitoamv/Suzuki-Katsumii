const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "tickle",
        aliases: ["cócegas"],
        description: "faça cócegas em alguém!",
        usage: "(@usuário)",
        category: "fun",
    run: async (client, message, args) => {
        let tickle = await neko.sfw.tickle();
        let tuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(tuser){
            message.channel.send(`${tuser}, ${message.author} está fazendo muitas cócegas em você! \n${tickle.url}`);
        } else {
            message.channel.send(`Estou fazendo cócegas em você! \n${tickle.url}`);
        }

        return;
    }
}
