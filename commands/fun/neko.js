const client = require("nekos.life");
const nekoo = new client();

module.exports = {
        name: "neko",
        aliases: [],
        description: "Veja imagens de lindas nekos :3",
        usage: "neko",
        category: "fun",
    run: async (client, message, args) => {
        let neko = await nekoo.sfw.neko();
        message.channel.send(`neko! ${neko.url}`);

        return;
    }
}
