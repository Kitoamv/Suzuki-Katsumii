const Discord = module.require("discord.js");

module.exports = {
  name: "members",
  category: "info",
  description: "Quantos membros estão no servidor atual.",
  run: async (bot, message, args, msg) => {
module.exports.run = async (client, message, args) => {
  let onlineMembers = message.guild.members.filter(m => m.presence.status === 'online');
  let offlineMembers = message.guild.members.filter(m => m.presence.status === 'offline');
  let idleMembers = message.guild.members.filter(m => m.presence.status === 'idle');
  let dndMembers = message.guild.members.filter(m => m.presence.status === 'dnd');
  var online = 0;
  var offline = 0;
  var idle = 0;
  var donotdisturb = 0;

  onlineMembers.forEach(member => {
    online += 1;
  });

  offlineMembers.forEach(member => {
    offline += 1;
  });

  onlineMembers.forEach(member => {
    online += 1;
  });

  idleMembers.forEach(member => {
    idle += 1;
  });

  dndMembers.forEach(member => {
    donotdisturb += 1;
  });

  var embed = new Discord.RichEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor("3498db")
    .addField("Membros Gerais", message.guild.memberCount || message.guild.members.size)
    .addField("Membros Online", online)
    .addField("Membros Offline/Invisível", offline)
    .addField("Membros Ausentes", idle)
    .addField("Membros que não querem ser pertubados", donotdisturb)

  message.channel.send(embed=embed);
}
}
}
