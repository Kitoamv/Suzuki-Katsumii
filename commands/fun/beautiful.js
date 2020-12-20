const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "beautiful",
        aliases: [],
        description: "que pessoa linda :3",
        ussage: "<prefix>beautiful <mention>",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
   const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário para torná-lo bonito(a)");
   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./assets/images/plate_beautiful.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(634, 675)
    .setColor(0x00A2E8)
    .addRect(0, 0, 634, 675)
    .addImage(body, 423, 45, 168, 168)
    .addImage(body, 426, 382, 168, 168)
    .addImage(plate, 0, 0, 634, 675)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.first().avatarURL;
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'beautiful.png' }] });
  } catch (error) {
    throw error;
  }
}
}
