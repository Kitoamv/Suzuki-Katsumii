const { RichEmbed } = require("discord.js");

module.exports = {
  name: "dm",
  aliases:  ["pm"],
  description: "Direct message anyone in the server!",
  category: "utils",
  run: async (client, message, args) => {
  let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `Você não mencionou um usuário ou forneceu uma identificação inválida`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("Você não especificou sua mensagem");
      let eembed = new RichEmbed()
      .addField('Action:', 'DM')
      .setDescription(`Usuário Dmed ${user.user.username}`)
      .setTimestamp()
      .setColor("GREEN")
    user.user
      .send(args.slice(1).join(" "))
      .catch(() => message.channel.send("Esse usuário não pôde ser está aceitando mensagens privada"))
      .then(() => message.channel.send({eembed}));
  }
}
