const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);

module.exports = {
        name: "dice",
        description: "Suzuki Katsumi envia um meme aleatório de anime no reddit!",
        usage: "<prefix>animeme",
        category: "fun",
    run: async (client, message, args) => {
  await message.channel.send("Os Dados estão sendo roladas")
  const embed = new Discord.RichEmbed()
  .setColor(0x00A2E8)
  .addField("Pessoa Que Utilizou o Comando :", message.author)
  .addField("Katsumi Responde :",` Os dados apontaram que o número foi ${rand()}`)
  .setThumbnail("https://pngimg.com/uploads/dice/dice_PNG49.png")
  message.channel.send({embed})
}
}
