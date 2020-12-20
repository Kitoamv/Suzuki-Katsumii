const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "love",
    aliases: ["affinity","love"],
    category: "fun",
    description: "Calcula a afinidade amorosa que você tem por outra pessoa.",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {
        // Obter um membro com menção, ID ou nome de usuário
        let person = getMember(message, args[0]);

        // Se nenhuma pessoa for encontrada
        // O padrão será o autor
        // E não queremos nos amar neste comando
        // Então filtramos nosso ID dos membros do servidor
        // E obtenha uma pessoa aleatória dessa coleção
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        // amor é a porcentagem
        // loveIndex é um número de 0 a 10, com base nessa variável de amor
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** ama o **${message.member.displayName}** mais ou menos...:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
}
