const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "crush",
        aliases: [],
        description: "Hmmmmmm um crush ein...",
        ussage: "<prefix>crush <mention>",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
    const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário que gosta dele");
    const getSlapped = async (slapper, slapped) => {
    const plate = await fsn.readFile('./assets/images/plate_crush.png');
    const pngSlapper = slapper.replace('.gif', '.png');
    const pngSlapped = slapped.replace('.gif', '.png');
    const Slapper = await snek.get(pngSlapper);
    const Slapped = await snek.get(pngSlapped);
      return new Canvas(600, 873)
    .rotate(-0.09)
    .addImage(Slapped.body, 109, 454, 417, 417)
    .resetTransformation()
    .addImage(plate, 0, 0, 600, 873)
    .addImage(Slapper.body, 407, 44, 131, 131, { type: 'round', radius: 66 })
    .restore()
    .toBuffer();
  }
  try {
    const slapped = message.mentions.users.first().avatarURL;
    const slapper = message.author.avatarURL;
    const result = await getSlapped(slapper, slapped);
    await message.channel.send({ files: [{ attachment: result, name: 'crush.png' }] });
  } catch (error) {
    throw error;
  }
}
}
