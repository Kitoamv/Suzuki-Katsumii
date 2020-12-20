module.exports = {
  name: "mute",
  category: "moderation",
  description: "Mute someone",
  usage: "<mention> [reason]",
  run: async (client, msg, arg) => {
      msg.delete();
      if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply("Desculpe, você não tem permissão para usar este comando!");
      let rMember = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(arg[0]);
      if (!rMember) return msg.reply("Mencione um membro válido deste servidor para silenciar.");
      let gRole = msg.guild.roles.find(grole => grole.name === "Muted");
      if (!gRole) return msg.reply("Não foi possível encontrar a função desativada");
      if (rMember.roles.has(gRole.id)) return msg.reply("Esse usuário já está silenciado.");
      let reason = arg.slice(1).join(' ');
      if(!reason) reason = "Nenhuma razão fornecida";
      let puchannel = msg.guild.channels.find(puchannel => puchannel.name === "🔨-punições-🔨");
      if(!puchannel) return msg.channel.send("Não foi possível encontrar o canal de punições🔨...");
      await (rMember.addRole(gRole.id));
      puchannel.send(`<@${rMember.id}> foi silenciado por ${msg.author.username} por conta de: ${reason}`);
  }
}
