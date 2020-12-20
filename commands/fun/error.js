const request = require('node-superfetch');
const fsn = require("fs-nextra");

module.exports = {
        name: "error",
        aliases: [],
        description: "Isso faz 3000 anos.",
        category: "fun",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
    const {
      Canvas
    } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Error 404: Você não mencionou um usuário.");
    const getSlapped = async (person) => {
      const plate = await fsn.readFile('./assets/images/error.png');
      const png = person.replace('.gif', '.png');
      const {
        body
      } = await request.get(png);
      return new Canvas(331, 120)
        .addImage(plate, 0, 0, 331, 120)
        .addImage(body, 10, 30, 50, 50, {
          type: "round",
          radius: 25
        })
        //.restore()
        .toBuffer();
    };
    try {
      if (message.mentions.users.size < 1) {
        const person = message.author.avatarURL;
        const result = await getSlapped(person);
        await message.channel.send({
          files: [{
            attachment: result,
            name: 'error.png'
          }]
        });
      } else {
        const person = message.mentions.users.first().avatarURL;
        const result = await getSlapped(person);
        await message.channel.send({
          files: [{
            attachment: result,
            name: 'error.png'
          }]
        });
      }
    } catch (error) {
      throw error;
    }
}
}
}
