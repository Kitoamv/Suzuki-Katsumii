const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "removesong",
    category: "music",
    description: "Retomar a música pausada.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.resume(message, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
