module.exports = {
    name: "corners",
    aliases: ["corner", "c", "sides", "side"],
    category: "games",
    description: "atribui aleatoriamente cantos da arena",
    usage: "corner [Player 1] [Player 2]",
    run: async (client, msg, args) => {
  if (args.length != 2) return msg.channel.send("⚠️  |  Você precisa dar nome para dois comandantes!");
  const combatantOne = args[Math.floor(Math.random() * 2)];
  msg.channel.send({
    embed: {
      color: 0x1a71b8,
      title: "❄ Time Azul! ❄",
      description: `**${combatantOne}**`
    }
  });
  msg.channel.send({
    embed: {
      color: 0xe93b32,
      title: "🔥 Time Vermelho! 🔥",
      description: `**${args.filter(c => c != combatantOne)}**`
    }
  });
}
}
