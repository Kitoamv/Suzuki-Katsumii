const musicfuncs = require('../../assets/handlers/music.js');

module.exports = {
    name: "radiostations",
    category: "music",
    description: "Veja quais estações de rádio você pode ouvir.",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    try {
        musicfuncs.radioStations(message);
    } catch (e) {
        console.log(e);
        funcs.send(`Ah não! Um erro ocorreu! \`${e.message}\`.`);
    }
}
}
}
