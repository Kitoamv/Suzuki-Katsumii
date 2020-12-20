const { RichEmbed } = require('discord.js');
const { getChannel } = require('../../functions');

module.exports = {
	name: 'logchannel',
	category: 'moderation',
	description: 'Permite a configuração do canal de log',
	run: async (client, message, args, foundGuild) => {
		let embed = new RichEmbed()
			.setTitle('Log Channel')
			.setColor("#000000")
			.setDescription('Pinging...');

		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(embed.setColor(client.config.color.warning).setDescription('Você não tem permissão para alterar o canal de log'));

		foundGuild.logChannel = getChannel(message, args.join(' '));

		foundGuild.save().then(message.channel.send(embed.setColor(client.config.color.success).setDescription(`O canal de log mod foi definido como <#${foundGuild.logChannel}>`)));
	}
};
