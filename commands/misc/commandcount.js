module.exports = {
  name: "comandos",
  category: "misc",
  description: "Obtenha a contagem total de comandos para o bot.",
  aliases: ["ccount"],
  run: async (bot, message, args, funcs) => {
    message.channel.send(`Eu tenho atualmente: <a:GirlPika:595220613505875970> ** ${bot.commands.size} ** comandos até o momento. <a:GirlPika:595220613505875970>`);
}
}
