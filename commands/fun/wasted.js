const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "wasted",
        aliases: [],
        description: "Ele realmente é se fodeu.",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
   const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário para mostra-lo que se ferrou.");
   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./assets/images/plate_wasted.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(300, 300)
    .resetTransformation()
    .addImage(body, 0, 0, 300, 300)
    .addImage(plate, 0, 0, 300, 300)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.first().avatarURL;
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'wasted.png' }] });
  } catch (error) {
    throw error;
  }
}
}
