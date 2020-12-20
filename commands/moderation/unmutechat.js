module.exports = {
	name: 'unmutechat',
	aliases: ['umutechat','umchat','unmutechannel','umchannel'],
	category: 'moderation',
	description: 'Desmute um canal de texto!',
  permission: 'Administrator',
	run: async (client, message, args, foundGuild) => {
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Desculpe, você não tem permissão para usar este comando!")
    await message.channel.send('<a:diamond:595219713970405388> O Canal está completamente desmutado <a:diamond:595219713970405388>');

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    });
  } catch (err) {
    message.channel.send('Houve um erro!\n' + err).catch();
  }
}
}
