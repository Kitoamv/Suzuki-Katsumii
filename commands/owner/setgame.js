module.exports = {
        name: "setgame",
        aliases: ["sgame"],
        description: "Coloque-me para jogar alguma coisa.",
        usage: 'setgame <playing status>',
        category: "owner",
    run: async (client, message, args) => {
  if(!args[0]) return;
  checkBotOwner(message)
  if(args[0] === 'game') return message.reply('Por favor me diga o que gostaria que eu jogasse!');
  args = args.join(" ");
  message.reply(`Agora eu estou jogando \`${args}\`.`);
  client.user.setGame(`${args}`);
}
}
