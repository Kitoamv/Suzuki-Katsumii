const Discord = require("discord.js");
const fs = require("fs")

module.exports = {
    name: "notice",
    aliases: ["noticia"],
    category: "info",
    cooldown: 2,
    description: "Simula uma junção",
    usage: "<prefix>shutdown",
    run: async (client, msg, arg) => {
      fs.readdir("./commands/", (err, files) => {
          const filez = files.length
          if (err) return console.error(err);
          //sql.get(`SELECT * FROM scores WHERE guildId ="${msg.guild.id}"`).then(row => {
          //if (!row) return;
         const embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setURL('https://discord.gg/saw97sB')
        .setAuthor('Últimas Novidades Sobre mim ? Então vejamos...', 'https://cdn.discordapp.com/attachments/582876997668044801/689968887126556862/Sem_Titulo-1.jpg', 'https://discord.gg/saw97sB')
        .setDescription('Estamos Aqui para lhe contar sobre nossas novas novidades. Contar sobre correções de comandos e muitas outras coisas.')
        .addField('<a:7429_KawaiiBunny_Recolored:637596983816880138> Novos Comandos Adicionados A Suzuki Katsumi <a:7429_KawaiiBunny_Recolored:637596983816880138>', 'Essas são as atualizações mais recentes.')
        .addBlankField()
        .addField('Comando - pay-respect:','Marque uma pessoa a qual você deseja respeitar.')//
        .addField('Comando - clyde:', 'Faça o Bot Clyde falar alguma coisa.')
        .addField('Comando - dm:', 'O Bot enviará diretamente uma mensagem privada para a pessoa marcada.')
        .addField('Comando - hangman:', 'começa um jogo da forca aleatório.')
        .addField('Comando - copypasta:', 'Algumas copypastas estarão aqui.')
        .addField('Comando - imdb:', 'Obtenha as informações sobre séries e filmes.')
        .addField('Comando - binary:', 'converter texto em binário ou de outra forma.')
        .addField('Comando - spotify:', 'está se perguntando o que aquele membro está ouvindo no spotify? Rode isto :D.')
        .addBlankField()
        .addField('<a:7429_KawaiiBunny_Recolored:637596983816880138> Correções de Comandos Presentes <a:7429_KawaiiBunny_Recolored:637596983816880138>', 'Essas são as atualizações mais recentes.')
        .addBlankField()
        .addField('Correção - slowmode:', 'agora você pode definir o tempo de lentidão de um certo chat.')
        .addField('Correção - suggest:', 'as mensagens aparentemente não estavam chegando, agora poderei ter sugestões de vocês.')
        .setTimestamp()
        .addBlankField()
        .setFooter('Suzuki Katsumi foi criada por KiritoAmvs', 'https://cdn.discordapp.com/attachments/582876997668044801/689968887126556862/Sem_Titulo-1.jpg');
         msg.channel.send({embed})
              // })
         })
  }
}
