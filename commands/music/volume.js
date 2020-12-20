const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "volume",
    category: "music",
    description: "Permite controlar o volume das músicas.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.volume(message, args, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
