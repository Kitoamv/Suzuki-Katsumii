module.exports = {
    name: "reactthis",
    aliases: ["rthis"],
    category: "utils",
    description: "Reaja algo!",
    run: async (client, msg, args) => {
      if (!msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;
      const foundEmoji = await client.emojis.find(emoji => emoji.name === args[0]);
      if (!foundEmoji) {
        await msg.reply("Não foi possível encontrar o emoji");
        return;
      }

      await msg.react(foundEmoji);
    }
}
