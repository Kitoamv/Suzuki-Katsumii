const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
	name: 'tempmute',
	aliases: ['tm'],
	category: 'moderation',
	description: 'Mute completamente uma pessoa por um certo periodo de tempo!',
  permission: "MANAGE_ROLES",
	run: async (client, message, args, level) => {
  try {
    const user = message.mentions.users.first();
    const settings = client.getSettings(message.guild.id);

    if (args[0] && ms(args[0])) {
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.addRole(message.guild.roles.find(r => r.name == settings.muteRole)).then(async () => {
            message.reply(`O Usuário foi mutado com sucesso! ${user.tag}`);

            const modLogChannel = settings.modLogChannel;
            if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
              let embed = new Discord.RichEmbed()
              .setTitle('Usuário Mutado Temporariamente')
              .setColor('#eeeeee')
              .setDescription(`Name: ${user.username}\nID: ${user.id}\nModerador: ${message.author.username}`);

              message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error);
            }

            await setTimeout(async () => {
              await member.removeRole(message.guild.roles.find(r => r.name == settings.muteRole)).then(() => {
                const modLogChannel = settings.modLogChannel;
                if (modLogChannel && message.guild.channels.find(c => c.name === settings.modLogChannel)) {
                  let embed = new Discord.RichEmbed()
                  .setTitle('Usuário desmutado')
                  .setColor('#eeeeee')
                  .setDescription(`Name: ${user.username}\nID: ${user.id}\nModerator: AutoMod`);

                  message.guild.channels.find(c => c.name === settings.modLogChannel).send(embed).catch(console.error);
                }
              }).catch(err => {
                message.author.send('I was unable to ' + user.username + 'and the time to mute them!');
              });
            }, ms(args[0]));
          }).catch(err => {
            message.reply('I was unable to mute the member');
          });
        } else message.reply('That user isn\'t in this guild!');
      } else message.reply('You didn\'t mention the user to mute!');
    } else message.reply('You didn\'t specify the amount of time to mute the member or the time is invalid!');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
}
}
