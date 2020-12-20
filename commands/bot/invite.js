const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	category: 'bot',
	description: 'Retorna um link para convidar o bot para o seu servidor',
	supportsDM: true,
	run: async (client, message, args) => {
		let embed = new RichEmbed()
			.setTitle("Clique no Link para adicionar a Suzuki em seu servidor!")
			.setColor("#000000")
			.setDescription(`[Convite da ${message.client.user.username} para o seu servidor!](https://discordapp.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=8)`);

		message.channel.send(embed);
	}
};
