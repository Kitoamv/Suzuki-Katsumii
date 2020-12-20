const Discord = require("discord.js");
const botconfig = require.main.require("./JSON/config.json");

module.exports = {
    name: "feedback",
    category: "bot",
    description: "Use este comando para enviar uma sugestão de comando para o administrador do bot. (Kirito Amv's#6281)",
    usage: "<prefix>feedback <texto>",
    run: async (client, message, args) => {
module.exports.run = async (bot, message, args) => {
  let user_message = args.join(" ");

  if (!user_message)
    return message.channel.send(
      new Discord.RichEmbed()
        .setTitle("Uso incorreto do comando")
        .setDescription(
          "Tente usar: ``" +
            `<prefix>feedback <msg>` +
            "``"
        )
        .setColor("#FF0000")
    );

  // Get Fobenga [User] Object
  let fobenga;
  let uarr = message.client.users.array();
  for (let i = 0; i < uarr.length; i++)
    if (uarr[i].id == 287024484630659073) fobenga = uarr[i];

  fobenga.send(
    new Discord.RichEmbed()
      .setColor("#0000FF")
      .setTitle("Um usuário enviou uma mensagem de feedback!")
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(user_message)
      .addField(
        "Sent by user:",
        `${message.author.username} (${message.author.tag})`
      )
      .addField("Enviado da guilda:", message.guild.name)
      .setFooter("Message sent")
      .setTimestamp(message.createdTimestamp)
  );

  return message.channel.send(
    new Discord.RichEmbed()
      .setColor("#0000FF")
      .setTitle("Uma mensagem de feedback foi enviada para Kirito Amv's#6281!")
      .setThumbnail(message.author.displayAvatarURL)
      .setDescription(user_message)
      .addField(
        "Enviado por:",
        `${message.author.username} (${message.author.tag})`
      )
      .addField("Enviado do servidor:", message.guild.name)
      .setFooter("Enviada em")
      .setTimestamp(message.createdTimestamp)
  );
}
}
}
