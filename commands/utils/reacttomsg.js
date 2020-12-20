module.exports = {
    name: "reacttomsg",
    aliases: ["rmsg","reactmsg"],
    category: "utils",
    description: "reacttomsg [messageID] [emojiname]",
    usage: "<message>",
    run: async (client, msg, args) => {
  if (!msg.member.hasPermission("ADMINISTRATOR"))
    return msg.reply("Você precisa ter permissão dos administradores");
  if (!args[0] || Number.isNaN(args[0]) || !args[1] || args[0] === "help")
    return msg.reply("Utilize: reattomsg [messageID] [emoijiname]");
  const foundEmoji = await client.emojis.find(emoji => emoji.name === args[1]);
  if (!foundEmoji) return msg.reply("Não foi possível encontrar o emoji..");

  const message = await msg.channel.fetchMessage(args[0]);
  await message.react(foundEmoji);

  return msg.deletable && msg.delete();
  }
}
