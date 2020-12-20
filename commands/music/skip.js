const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "skip",
    category: "music",
    description: "Pule a música atual.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.skip(message, bot, funcs);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
