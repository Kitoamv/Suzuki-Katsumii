const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "kemonomimi",
        aliases: ["kmimi","waifu"],
        description: "Veja imagens de personagens com orelhas :3",
        usage: "kemonomimi",
        category: "fun",
    run: async (client, message, args) => {
        let kemonomimi = await neko.sfw.kemonomimi();
        message.channel.send(`kemonomimi! ${kemonomimi.url}`);

        return;
    }
}
