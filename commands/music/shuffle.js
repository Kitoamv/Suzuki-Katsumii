const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "shuffle",
    category: "music",
    description: "Baralha as músicas na fila.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.shuffle(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
