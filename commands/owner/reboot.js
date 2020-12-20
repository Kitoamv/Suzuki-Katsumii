const Discord = require("discord.js")
const fs = require("fs");

module.exports = {
        name: "reboot",
        aliases: [],
        description: "Reinicie o Bot",
        ussage: "<prefix>reboot",
        category: "fun",
    run: async (client, message, args) => {
  	if (message.author.id !== "287024484630659073") return message.channel.send("Somente proprietários podem usar este comando");
  try {
      await message.reply('O Bot está sendo reiniciado.');
      fs.readdir("./commands/", (err, files) => {
        const filez = files.length
        if (err) return console.error(err);
        message.channel.send(`Atualizado \`${filez + 11}\` comandos com sucesso!`)
        console.log("Atualizado" + filez + " comandos")
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
      process.exit(1);
    } catch (e) {
      console.log(e);
    }
}
}
