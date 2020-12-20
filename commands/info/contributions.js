const Discord = require("discord.js");

module.exports = {
  name: "contributions",
  aliases: ["credits"],
  category: "info",
  description: "Mostra uma lista de pessoas que ajudaram no desenvolvimento de bots do Kirito.",
  run: async (client, message, args) => {
    await message.delete()
  // Créditos configuráveis
    // Note: O limite de campo significa que você só pode ter até 25 objetos aqui. Certifique-se de que a contagem total de caracteres não exceda 6.000.
    var credits = [{
        names: [`Mitu#7558`],
        contributions: `Ajudou a desenvolver moderações de Katsumi`,
        },
      ];

      // Embed Construído
      let creditsEmbed = new Discord.RichEmbed()
        .setAuthor(
          `${message.author.tag}`,
        )
        .setTitle(`Creditos - Desenvolvedores e apoiadores de bots`)
        .setDescription(
          `Agradeça calorosamente às pessoas que tornaram este bot possível:`
        )
        .setColor(`#8800FF`)
        .setTimestamp()
        .setFooter(
          `Bot Creator: Kirito 勇気#6281 | User ID: ${message.author.id}`,
          );
      credits.map((credit) =>
        creditsEmbed.addField(
          `${credit.names.map((name) => `**${name}**`).join(", ")}`,
          credit.contributions
        )
      );
      message.channel.send(creditsEmbed);
}
}
