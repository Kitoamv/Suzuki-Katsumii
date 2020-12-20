const Discord = require('discord.js');

module.exports = {
        name: "setwatching",
        aliases: ["swatch","setwatch"],
        description: "Coloque-me para assistir uma nova coisa",
        category: "owner",
    run: async (client, message, args) => {
  checkBotOwner(message)
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setDescription('Digite o nome do status de exibição!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, type: 3 } });
  const embed = new Discord.RichEmbed()
    .setColor("0xff0000")
    .setDescription('Você alterou com êxito o status do streaming')
  message.channel.send({ embed })
  }
}
}
