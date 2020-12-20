const Discord = require("discord.js");

module.exports = {
        name: "goodnight",
        description: "Boa Noite!",
        usage: "goodnight",
        category: "fun",
    run: async (client, message, args) => {
  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(`Boa noite ${message.author.username}.`);
  }
  if(result === 1) {
    return message.channel.send(`Boa noite ${message.author.username}. Espero que você tenha pesadelos ;)`);
  }
  if(result === 2) {
    return message.channel.send(`Noite ${message.author.username}.`);
  }
  if(result === 3) {
    return message.channel.send(`Noite ${message.author.username}. Espero que você tenha pesadelos ;)`);
  }
  if(result === 4) {
    return message.channel.send(`Finalmente vamos para a cama, então estamos?`);
  }
  if(result === 5) {
    return message.channel.send(`Finalmente indo para a cama, então estamos, ${message.author.username}?`);
  }
  if(result === 6) {
    return message.channel.send(`Estava na hora ${message.author.username}.`);
  }
  if(result === 7) {
    return message.channel.send(`😴 ...\n[Mensagem automática] Desculpe, Também estou dormindo agora.`);
  }
  if(result === 8) {
    return message.channel.send(`💤 ...\n[Mensagem automática] Desculpe, Também estou dormindo agora.`);
  }
}
}
