const Discord = require("discord.js");

module.exports = {
    name: "serveremojis",
    aliases: ["emojis", "emoji"],
    category: "info",
    description: "Retorna uma lista com emojis do servidor",
    run: async (client, msg, arg) => {
      if (!msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;
      const embed = new Discord.RichEmbed().setTitle(" Emojis");
      const emojilist = msg.guild.emojis;
      let i;
      let tempemojis;
      const chunk = 50;
      let description = "";
      for (i = 0; i < emojilist.array().length; i += chunk) {
        tempemojis = emojilist.array().slice(i, i + chunk);
        description = "";
        let j;
        let temptempemojis;
        let desdescription = "";
        const chunkchunk = 10;
        for (j = 0; j < tempemojis.length; j += chunkchunk) {
          temptempemojis = tempemojis.slice(j, j + chunkchunk);
          temptempemojis.map(e => (desdescription += e));
          desdescription = temptempemojis.reduce((a, b) => a + b, "");
          description += `${desdescription}\n`;
        }
        embed.setDescription(description);
        msg.channel.send(description).catch(err => Logs.error(client, err, msg));
      }
    }
}
