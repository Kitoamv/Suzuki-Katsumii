const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "stopradio",
    category: "music",
    description: "Interrompe o rádio de tocar música.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.stopRadio(message, bot, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu!! \`${e.message}\`.`);
    }
}
}
}
