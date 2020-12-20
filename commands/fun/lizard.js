const client = require("nekos.life");
const neko = new client();

module.exports = {
        name: "lizard",
        aliases: [""],
        description: "Lizard",
        usage: "lizard",
        category: "fun",
    run: async (client, message, args) => {
        let lizard = await neko.sfw.lizard();
        message.channel.send(`lizard! ${lizard.url}`);

        return;
    }
}
