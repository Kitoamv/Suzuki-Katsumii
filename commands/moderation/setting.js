const { RichEmbed } = require('discord.js');
const { getChannel } = require('../../functions');

module.exports = {
	name: 'settings',
	aliases: ['set','configs','settings'],
	category: 'moderation',
	description: 'Permite definir várias configurações de bot específicas do servidor',
	run: async (client, message, args) => {
		if (!message.member.hasPermission('ADMINISTRATOR'))
			return message.channel
				.send(
					new RichEmbed()
						.setTitle('Settings Manager')
						.setColor("#000000")
						.setDescription('Você não tem permissão para alterar as configurações de bot neste servidor!')
				)
				.then(m => m.delete(client.config.liveTime));

		let embed = new RichEmbed().setColor(client.config.color.info).setTitle('Settings Manager');

		//If there's no arguments
		if (args.length === 0) {
			embed.setColor(client.config.color.error).setDescription('Forneça alguns argumentos para o comando');

			return message.channel.send(embed);
		}

		//Set Server Prefix
		if (args[0] === 'prefix') {
			args.shift();

			if (args.length === 0) {
				embed.setDescription(`O prefixo do servidor é ${client.foundGuild.prefix}`);

				message.channel.send(embed);
				return;
			}

			client.foundGuild.prefix = args[0];

			return client.foundGuild.save().then(message.channel.send(embed.setColor(client.config.color.success).setDescription(`O prefixo da guilda foi definido como ${client.foundGuild.prefix}`)));
		}

		//Set Report Channel
		if (args[0] === 'reports') {
			args.shift();

			if (args.length === 0) {
				let value = 'not set';
				if (client.foundGuild.logChannels.reports.enabled === true) value = `<#${client.foundGuild.logChannels.reports.channel}>`;
				embed.setDescription(`O canal de relatórios da guilda é ${value}`);

				return message.channel.send(embed);
			}

			if (args[0] === 'disable' || args[0] === 'disabled') {
				client.foundGuild.logChannels.reports.enabled = false;
				return client.foundGuild.save().then(message.channel.send(embed.setColor(client.config.color.success).setDescription(`O canal de relatórios da guilda foi desativado`)));
			}

			client.foundGuild.logChannels.reports.channel = getChannel(message, args.join(' '));
			client.foundGuild.logChannels.reports.enabled = true;

			return client.foundGuild.save().then(message.channel.send(embed.setColor(client.config.color.success).setDescription(`O canal de relatórios da guilda foi definido como <#${client.foundGuild.logChannels.reports.channel}>`)));
		}
	}
};
