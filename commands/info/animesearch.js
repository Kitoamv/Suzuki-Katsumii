const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  aliases: ["anime"],
  category: "info",
  description: "Retorna com uma mensagem mostrando a Latencia e o Ping!",
  run: async (client, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
      .setAuthor(`o Anime procurado no MyAnimeList foi o ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('Título em Inglês', data.englishTitle, true)
      .addField('Título Japonês', data.japaneseTitle, true)
      .addField('Tipo', data.type, true)
      .addField('Episódio', data.episodes, true)
      .addField('Avaliação', data.rating, true)
      .addField('Arejado', data.aired, true)
      .addField('Pontuação', data.score, true)
      .addField('Pontuação Stats', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));
    }    
}
