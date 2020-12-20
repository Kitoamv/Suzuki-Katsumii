const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "currentsong",
    category: "music",
    description: "Diz a você o que está tocando no momento.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.currentSong(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
