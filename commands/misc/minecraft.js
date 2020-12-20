const Discord = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: "minecraft",
    category: "misc",
    description: "Veja o estado atual de um servidor de minecraft.",
    run: async (bot, msg, args, config) => {
var link;
if(!args[0]) return msg.channel.send("Você precisa definir um IP de servidor");
if(!args[1]){
    link = `https://mcapi.us/server/status?ip=${args[0]}`;
}else{
    link = `https://mcapi.us/server/status?ip=${args[0]}&port=${args[1]}`;
}
const response = fetch(link)
.then(res => res.json())
.then(json => {
    try{
    const {status, online, motd, error, players, server} = json;
    let cEmbed = new Discord.RichEmbed()
    .setColor('#00FF00')
    .addField(`Buscar status:`, status)
    .addField(`Status Online:`, online)
    .addField(`Descrição:`, `"${motd}"`)
    .addField(`Erros:`, `${error || "Sem Erros"}`)
    .addField(`Jogadores Ativos:`, players.now)
    .addField(`Máximo de Jogadores:`, players.max)
    .addField(`Versão do Servidor:`, server.name)
    .addField(`⠀`, "A imagem a seguir não pôde ser atualizada")
    .setImage(`https://mcapi.us/server/image?ip=${args[0]}&theme=dark`)
    .setTimestamp()
    .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL);

    msg.channel.send(cEmbed);
    }catch(e){
        msg.channel.send("Ocorreu um erro (servidor não existe ou porta incorreta)")
    }
});
}
}
