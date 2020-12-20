const Discord = require('discord.js')

module.exports = {
  name: "amongus",
  aliases: [""],
  category: "info",
  description: "Retorna com uma mensagem mostrando a Latencia e o Ping!",
  run: async (client, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle('Among Us :')
    .setDescription(`Festa do Among Us, agora está acontecendo na sala vocal @🎮▌Among Us`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/778725690606485524/779399634178539531/tenor_64.gif')
    .setFooter('Atenciosamente, eu\ Suzuki Katsumi', 'https://cdn.discordapp.com/attachments/727842164230455297/778697291250270228/tenor_62.gif');

    if(!args[0]) return message.channel.send(embed);
    let question = args.slice(1).join(" ");
  }
  }
