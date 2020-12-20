const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "brazzers",
        aliases: [],
        description: "Você é da brazzers ?",
        ussage: "<prefix>brazzers <mention>",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
   const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário para torná-lo oficialmente da brazzers xD.");
   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./assets/images/plate_brazzers.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(634, 675)
    .setColor(0x00A2E8)
    .addRect(0, 0, 634, 675)
    .addImage(body, 0, 0, 634, 675)
    .addImage(plate, 233, 485, 384, 245)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.first().avatarURL;
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'brazzers.png' }] });
  } catch (error) {
    throw error;
  }
}
}
