const Discord = require('discord.js')

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  category: "fun",
  cooldown: 10,
  description: "Ative o modo lento do chat",
  run: async (client, message, args) => {
    if (!message.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
      return message.channel.send("você não tem o \`MANAGE_CHANNELS\` ou o \`ADMINISTRATOR\` permissão para usar este comando😔");
    }

      const guildDB = await client.dbguilds.findOne({
          guildID: message.guild.id
      });

      const logChannel = message.guild.channels.cache.get(guildDB.logChannelID);

    let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        time = args.slice(1).join(" ");

    if (!channel) time = args.join(" "), channel = message.channel;
    // If the user doesn't includes the channel.

    if (message.flags[0] === "off") {
      channel.setRateLimitPerUser(0);
      return message.channel.send(`<#${channel.id}> slowmode foi desativado.`);
    }

    if (!time) return message.channel.send("inclua o formato da hora. todos os formatos de hora válidos são \`s, m, hrs\`!");

    let convert = ms(time); // This will results the milliseconds.
    let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)

    if (!toSecond || toSecond == undefined) return message.channel.send("insira o formato de hora válido! todos os formatos de hora válidos são \`s, m, hrs\`!");

    if (toSecond > 21600) return message.channel.send("o cronômetro deve ser menor ou igual a 6 horas!");
    else if (toSecond < 1) return message.channel.send("o cronômetro deve ser maior ou igual a 1 segundo!");
    const rolelog = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription(`Modo lento definido com sucesso para <#${channel.id}> para **${ms(ms(time), {long: true})}**.`)
    .addField('Moderator', message.author)

    await channel.setRateLimitPerUser(toSecond).then(() => {
      message.channel.send({embed: {color: "f3f3f3", description: `☑️ este canal: <#${channel.id}> terá o modo lento ligado para **${ms(ms(time), {long: true})}**.`}});
    }).then(() => {
      if (!logChannel) {
          return
      } else {
          return logChannel.send(rolelog);
      }
    }).catch(err => {
      return message.reply("ai, encontrei um erro :( você pode verificar minhas permanências?");
    });
  }
}
