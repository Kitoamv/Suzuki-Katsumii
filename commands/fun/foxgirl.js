const client = require("nekos.life");
const neka = new client();

module.exports = {
        name: "foxgirl",
        aliases: [""],
        description: "foxgirl",
        usage: "foxgirl",
        category: "fun",
    run: async (client, message, args) => {
        let foxgirl = await neka.sfw.foxgirl();
        message.channel.send(`foxgirl! ${foxgirl.url}`);

        return;
    }
}
