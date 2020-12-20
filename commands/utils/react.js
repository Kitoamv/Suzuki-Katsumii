module.exports = {
    name: "react",
    aliases: [""],
    category: "utils",
    description: "Retorna uma lista com emojis do servidor",
    usage: "react [emojiname]",
    run: async (client, msg, args) => {
      if (!msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;
      const foundEmoji = await client.emojis.find(emoji => emoji.name === args[0]);
      if (!foundEmoji) {
        await msg.reply("Não foi possível encontrar o emoji");
        return;
      }
      if (!msg.channel.permissionsFor(msg.guild.me).has("MANAGE_MESSAGES")) return;
      await msg.channel.send(`${foundEmoji}`);
      await (msg.deletable && msg.delete());
    }
}
