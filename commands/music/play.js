const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "play",
    category: "music",
    description: "Tocar música com o bot.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.play(message, args, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
