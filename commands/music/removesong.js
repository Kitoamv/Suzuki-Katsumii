const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "removesong",
    category: "music",
    description: "Remove uma música da fila.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.removesong(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
