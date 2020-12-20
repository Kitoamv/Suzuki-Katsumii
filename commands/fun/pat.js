const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "pat",
        aliases: ["cafune"],
        description: "Faça um bom e velho cafune xD!",
        usage: "(@usuário)",
        category: "fun",
    run: async (client, message, args) => {
        let pat = await neko.sfw.pat();
        let puser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(puser){
            message.channel.send(`${puser}, ${message.author} está fazendo um cafune em! \n${pat.url}`);
        } else {
            message.channel.send(`Estou lhe dando um cafune! \n${pat.url}`);
        }

        return;
    }
}
