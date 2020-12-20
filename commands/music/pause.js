const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "pause",
    category: "music",
    description: "Pausa a música atualmente sendo reproduzida.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.pause(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
