const Discord = require("discord.js")

module.exports = {
    name: "hackban",
    aliases: ["idban"],
    category: "moderator",
    usage: "hackban <userid>",
    description: "Banir usuário por id. Útil se o usuário tiver um nome não mencionável",
    run: async (client, message, args) => {
        let reason = args.slice(1).join(' ');
  let user = args[0];
  if (args[0] === message.author.id) return message.reply('eu posso\' deixar você fazer isso, automutilação é bad:facepalm:');
  if (user === client.user.id) return message.reply("Seu pleblord, como você pode usar um bot para banir itself?:joy:");
  if (!user) return message.reply('Você precisa inserir uma ID de usuário');

  if (reason.length < 1) {reason = 'Nenhum motivo fornecido.'};
  //let obj = JSON.parse(`{"days":7, "reason": ${reason}}`)
  message.guild.members.ban(user, {days:7, reason: reason}).catch(e =>{
    if (e) return message.channel.send("Esse usuário já foi banido ou não tenho permissão ou minha função não é alta o suficiente!");
  });

  const embed = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Ação:', 'HackBan')
    .addField('Usuário:', `${user}`)
    .addField('Moderador:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Rezão', reason)
  let logchannel = message.guild.channels.cache.find(x => x.name === 'logs').send({embed});
  if  (!logchannel){
  message.channel.send({embed})
  }else{
    message.channel.send({embed})
  }
  if(user.bot) {return;}
}
 }
