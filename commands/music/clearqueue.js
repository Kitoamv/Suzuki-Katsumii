const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "clearqueue",
    category: "music",
    description: "Remove tudo na fila.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.clearqueue(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
