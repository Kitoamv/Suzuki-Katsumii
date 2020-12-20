module.exports = {
	name: 'mutechat',
	aliases: ['mutechannel','mchannel','mchannel'],
	category: 'moderation',
	description: 'Mute um canal de texto!',
  permission: 'Administrator',
  run: async (client, message, args, foundGuild) => {
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Desculpe, você não tem permissão para usar este comando!")
    await message.channel.send('<a:diamond:595219713970405388> O Canal foi mutado completamente! <a:diamond:595219713970405388>');

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
}
}
