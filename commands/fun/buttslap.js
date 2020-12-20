const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');

module.exports = {
        name: "buttslap",
        aliases: [],
        description: "Tapa na bunda ?",
        ussage: "<prefix>buttslap <mention>",
        category: "fun",
    run: async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Desculpe, eu não tenho os privilégios para fazer este comando que eu preciso ATTACH_FILES. :x:')
const { Canvas } = require('canvas-constructor');
   if (message.mentions.users.size < 1) return message.channel.send("Você não mencionou um usuário para dar um tapa");
   const getSlapped = async (slapper, slapped) => {
    const plate = await fsn.readFile('./assets/images/plate_buttslap.png');
    const pngSlapper = slapper.replace('.gif', '.png');
    const pngSlapped = slapped.replace('.gif', '.png');
    const Slapper = await snek.get(pngSlapper);
    const Slapped = await snek.get(pngSlapped);
    return new Canvas(900, 475)
      .addImage(plate, 0, 0, 850, 475)
      .addImage(Slapper.body, 252, -39, 131, 131, { type: 'round', radius: 66 })
      .restore()
      .addImage(Slapped.body, 460, 167, 131, 131, { type: 'round', radius: 66 })
      .restore()
      .toBuffer();
  }
  try {
    const slapped = message.mentions.users.first().avatarURL;
    const slapper = message.author.avatarURL;
    const result = await getSlapped(slapper, slapped);
    if (!message.channel.nsfw) return message.channel.send("Você Precisa estar em um canal NSFW para usar este comando.")
    await message.channel.send({ files: [{ attachment: result, name: 'buttslapped.png' }] });
  } catch (error) {
    throw error;
  }
}
}
