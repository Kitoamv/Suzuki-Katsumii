module.exports = {
        name: "f",
        aliases: ["pay-respect"],
        usage: ["pay-respect", "pay-respect `[reason]`", "pay-respect `[@user]`", "pay-respect `[@user]` `[reason]`"],
        description: "Preste respeito a alguém.",
        cooldown: 5,
        category: "fun",
    run: async (client, message, args) => {
      if(!args[0]) {
        return message.channel.send("pressione 🇫 para prestar respeito.").then(async msg => {
          await msg.react("🇫");

          const filter = async (reaction, user) => {
            const botReact = await user.bot;
            const userReact = await reaction.message.guild.members.cache.get(user.id);

            if(!botReact) message.channel.send(`**${userReact.user.username}** pagou o respeito deles.`).then(m => m.delete({ timeout: 4000 }));

            return reaction.emoji.id === "🇫";
          }

          const reactions = msg.awaitReactions(filter, { time: 30000 })
          .then(collected => message.channel.send(`**${msg.reactions.cache.get("🇫").count - 1}** pessoa prestou respeito.`));
        })
      } else {
        let reason = args.join(" ");

        return message.channel.send(`press :regional_indicator_f:  para prestar respeito a **${reason}**`).then(async msg => {
          await msg.react("🇫");

          const filter = async (reaction, user) => {
            const botReact = await user.bot;
            const userReact = await reaction.message.guild.members.cache.get(user.id);

            if(!botReact) message.channel.send(`**${userReact.user.username}** pagou o respeito deles.`).then(m => m.delete({ timeout: 4000 }));

            return reaction.emoji.id === "🇫";
          }

          const reactions = msg.awaitReactions(filter, { time: 60000 })
          .then(collected => message.channel.send(`**${msg.reactions.cache.get("🇫").count - 1}** pessoa prestou seu respeito a **${reason}**`));
        })
      }
    }
}
