const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "queue",
    category: "music",
    description: "Visualiza a fila atual no servidor.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.queue(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
