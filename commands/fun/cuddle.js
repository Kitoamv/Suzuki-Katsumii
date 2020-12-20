const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "cuddle",
        aliases: ["carinho","affection","care"],
        description: "Faça carinho na pessoa que você mencionar!",
        usage: "(@user)",
        category: "fun",
    run: async (client, message, args) => {
        let cuddle = await neko.sfw.cuddle();
        let cuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(cuser){
            message.channel.send(`${cuser}, ${message.author} abraçou você! \n${cuddle.url}`);
        } else {
            message.channel.send(`Eu vou te abraçar! \n${cuddle.url}`);
        }

        return;
    }
}
