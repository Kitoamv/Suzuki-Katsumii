const request = require('node-superfetch');
const fsn = require("fs-nextra");

module.exports = {
        name: "continued",
        aliases: [],
        description: "Isso faz 3000 anos.",
        category: "fun",
        cooldownTime: '0',
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args, funcs) => {
        const {
            Canvas
        } = require('canvas-constructor');
        if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário.");
        const getSlapped = async (person) => {
            const plate = await fsn.readFile('./assets/images/to-be-continued.png');
            const png = person.replace('.gif', '.png');
            const {
                body
            } = await request.get(png);
            return new Canvas(634, 675)
            .setColor(0x6B363E)
            .addRect(0, 0, 634, 675)
            .addImage(body, 0, 0, 634, 675)
            .addImage(plate, 233, 545, 384, 165)
            .toBuffer();
        };
        try {
            const person = message.mentions.users.first().avatarURL;
            const result = await getSlapped(person);
            await message.channel.send({
                files: [{
                    attachment: result,
                    name: 'continued.png'
                }]
            });
        } catch (error) {
            throw error;
        }
}
}
}
