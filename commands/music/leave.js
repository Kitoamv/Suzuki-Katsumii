const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "leave",
    category: "music",
    description: "Sai do chat de voz atual.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.leave(message, bot, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
