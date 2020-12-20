const client = require("nekos.life");
const gata = new client();

module.exports = {
        name: "nekogif",
        aliases: ["ngif"],
        description: "Veja gifs de lindas nekos :3",
        usage: "nekogif",
        category: "fun",
    run: async (client, message, args) => {
        let nekogif = await gata.sfw.nekogif();
        message.channel.send(`nekogif! ${nekogif.url}`);

        return;
    }
}
