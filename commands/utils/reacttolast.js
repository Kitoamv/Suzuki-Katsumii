module.exports = {
    name: "reacttolast",
    alias: ["rlast"],
    category: "utils",
    description: "Reage à última mensagem com o emojiname fornecido",
    usage: "reacttolast [emojiname]",
    run: async (client, msg, args) => {
      if (!msg.channel.permissionsFor(msg.guild.me).has("SEND_MESSAGES")) return;
      const foundEmoji = await client.emojis.find(emoji => emoji.name === args[0]);
      if (!foundEmoji) {
        await msg.reply("Não foi possível encontrar o emoji");
        return;
      }

      const messages = await msg.channel.fetchMessages({ limit: 2 });
      const lastmessage = await messages.array()[1];
      await lastmessage.react(foundEmoji);

      await (msg.deletable && msg.delete());
    }
}
