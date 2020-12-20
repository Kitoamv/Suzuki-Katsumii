const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "slap",
        aliases: ["tapa"],
        description: "Bata em alguém por ser um idiota!",
        usage: "<@usuário>",
        category: "fun",
    run: async (client, message, args) => {
        let slap = await neko.sfw.slap();
        let suser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(suser){
            message.channel.send(`${suser}, ${message.author} está lhe enchendo de tapas... você é um idiota! \n${slap.url}`);
        } else {
            return;
        }

        return;
    }
}
