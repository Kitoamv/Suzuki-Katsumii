const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "radio",
    category: "music",
    description: "Reproduz música do rádio.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.radio(message, args, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
