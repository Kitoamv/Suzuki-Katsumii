const Discord = require("discord.js");
const fs = require("fs")
const discordjs_version = "v6.9.0"
const bot_version = "v0.6"

module.exports = {
    name: "botinfo",
    aliases: ["bot","infobot"],
    category: "bot",
    description: "Returns Bot info",
    run: async (client, msg, arg) => {
        fs.readdir("./commands/", (err, files) => {
            const filez = files.length
            if (err) return console.error(err);
            //sql.get(`SELECT * FROM scores WHERE guildId ="${msg.guild.id}"`).then(row => {
            //if (!row) return;
           const embed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
         	.setURL('https://discord.gg/saw97sB')
         	.setAuthor('Olá, sou a Suzuki Katsumi!', 'https://cdn.discordapp.com/attachments/582876997668044801/689968887126556862/Sem_Titulo-1.jpg', 'https://discord.gg/saw97sB')
         	.setDescription('Olá, Eu sou a Suzuki Katsumi e sou uma nova booue está sendo desenvolvida pelo Kirito Amvs, Eu assim como meu criador temos 19 anos e sou um bot bem simples para o uso de brasileiros no nosso querido e amado Discord, ainda estou com poucas funções mas futuramente serei incrível! <a:5107_intslWOW:595219717015470120>')
          .addField('Mais Informações Sobre Mim:', 'Além dos comandos comuns que temos normalmente na categoria **fun**, está sendo desenvolvido novos comandos para serem usados como algo que pode ser considerado novo. O foco do bot no momento é trazer mais e mais comandos de **fun** para que facilite ou ao menos deixe o chat mais interessante.')
         	.setThumbnail('https://images.discordapp.net/avatars/572413282653306901/1ed738275a406ccd7c7865a4d0a5287d.png?size=512')
          .addBlankField()
          .addField('<a:diamond:595219713970405388> Bot Criado em <a:diamond:595219713970405388>:', client.user.createdAt.toLocaleString(), true)//
          .addField('💜 Total de Servidores 💜:', Math.ceil(client.guilds.size), true)
          .addField('<a:7429_KawaiiBunny_Recolored:637596983816880138> Total de Usuários <a:7429_KawaiiBunny_Recolored:637596983816880138>:', `${client.users.size}`, true)
          .addField('🤔 Total de Canais 🤔:', `${client.channels.size}`, true)
          .addField('📘 Livraria 📘', `discord.js ${discordjs_version}`, true)
          .addField('Versão do Node.js', process.version, true)
          .addField('Versão do Bot', `${bot_version}`, true)
         	.addBlankField()
          .addField('<a:uthat:595221724606234624> Me Adicione! <a:uthat:595221724606234624>', 'http://bit.ly/34i3Gml', true)
         	.addField('Instagram do Criador', 'https://www.instagram.com/kitoamv/', true)
         	.addField('Youtube do Criador', 'https://www.youtube.com/KiritoAmvs', true)
         	.addField('Facebook do Criador', 'https://www.facebook.com/kitoamvs', true)
          .addField('<a:GirlPika:595220613505875970> Comandos <a:YonaGIrl:595219718672220173>', 'http://bit.ly/33vTTd3', true)
         	.setTimestamp()
           .addBlankField()
         	.setFooter('Suzuki Katsumi foi criada por KiritoAmvs', 'https://cdn.discordapp.com/attachments/582876997668044801/689968887126556862/Sem_Titulo-1.jpg');
           msg.channel.send({embed})
                // })
           })
    }
}
