const ms = require('ms');

module.exports = {
    name: "lockdown",
    category: "moderation",
    description: "Isso bloqueará um canal pela duração definida, em horas, minutos ou segundos.",
    usage: "lockdown <duration>",
    run: async (client, message, args) => {
         if(message.guild === null)return;

               let role = message.member.hasPermission('MANAGE_MESSAGES')
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Desculpe, você não tem permissão para usar isso! Você precisa ser um Administrador para isso.");


  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Você deve definir uma duração para o bloqueio em horas, minutos ou segundos');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Bloqueio suspenso.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Canal bloqueado por ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Bloqueio suspenso.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
}
}
