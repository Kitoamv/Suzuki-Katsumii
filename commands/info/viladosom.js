const Discord = require("discord.js");
const fs = require("fs")
const discordjs_version = "v6.9.0"
const bot_version = "v0.6"

module.exports = {
    name: "viladosom",
    aliases: [],
    category: "info",
    description: "Retorna uma mensagem com detalhes sobre a vila do som",
    run: async (client, msg, arg) => {
        fs.readdir("./commands/", (err, files) => {
            const filez = files.length
            if (err) return console.error(err);
            //sql.get(`SELECT * FROM scores WHERE guildId ="${msg.guild.id}"`).then(row => {
            //if (!row) return;
           const embed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
         	.setURL('https://discord.gg/pUvyznU8Su')
         	.setAuthor('Olá,🎵 Então você veio pela Vila do Som ? 🎵', 'https://media.discordapp.net/attachments/778698272599572570/778698308314202112/Vila_do_som.jpg', 'https://discord.gg/pUvyznU8Su')
         	.setDescription('<a:5107_intslWOW:595219717015470120> A Vila do som é uma produtora que trabalha com algumas edições em específico, Elas podem ser Vídeos,Imagens e Áudio <a:5107_intslWOW:595219717015470120>')
          .addField('O que a gente vende ?', 'Estamos trabalhando para preencher o mercado digital... até o momento fazemos beats, thumbnail, banner, overlay da twitch, desenho, edição de rap geek e muitas outras coisas.')
          .addBlankField()
          .addField('Total de Membros presentes da Vila do Som', 'O Total de Pessoas presentes até o momento são 14 Membros, Vale lembrar que alguns membros podem trabalhar em mais de duas categorias.',true)
          .addBlankField()
          .addField('🎶 Beats/Masters 🎶:', '3 Membros', true)//
          .addField('🎥 Edição de Vídeo 🎥:', '5 Membros', true)
          .addField('📸 Edição de Imagem 📸:', '3 Membros', true)
          .addField('✏️ Desenhistas ✏️:', '2 Membros', true)
          .addField('📈 Web Design 📈', '2 Membros', true)
          .addField('💻 Organizador 💻', '1 Membros', true)
         	.addBlankField()
         	.addField('Instagram da Vila do Som', 'https://www.instagram.com/viladosom.rec/', true)
         	.setTimestamp()
          .addBlankField()
         	.setFooter('Suzuki Katsumi foi criada por Kirito 勇気', 'https://cdn.discordapp.com/attachments/582876997668044801/689968887126556862/Sem_Titulo-1.jpg');
           msg.channel.send({embed})
                // })
           })
    }
}
