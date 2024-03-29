const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "checkout",
        aliases: ["ch"],
        description: "Você precisar checar este usuário.",
        ussage: "<prefix>checkout <mention>",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
const { Canvas } = require('canvas-constructor');
   if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário para ch");
   const getSlapped = async (slapper, slapped) => {
    const plate = await fsn.readFile('./assets/images/plate_checkout.png');
    const pngSlapper = slapper.replace('.gif', '.png');
    const pngSlapped = slapped.replace('.gif', '.png');
    const Slapper = await snek.get(pngSlapper);
    const Slapped = await snek.get(pngSlapped);
    return new Canvas(850, 475)
      .addImage(plate, 0, 0, 850, 475)
      .addImage(Slapper.body, 400, 57, 131, 131, { type: 'round', radius: 66 })
      .restore()
      .addImage(Slapped.body, 169, 100, 169, 169, { type: 'round', radius: 85 })
      .restore()
      .toBuffer();
  }
  try {
    const slapped = message.mentions.users.first().avatarURL;
    const slapper = message.author.avatarURL;
    const result = await getSlapped(slapper, slapped);
    await message.channel.send({ files: [{ attachment: result, name: 'slapped.png' }] });
  } catch (error) {
    throw error;
  }
}
}
