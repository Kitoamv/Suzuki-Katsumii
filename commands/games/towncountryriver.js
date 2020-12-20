const { RichEmbed } = require('discord.js')
const { runGame } = require('./TCR/game');

module.exports = {
    name: "towncountryriver",
    aliases: ["tcr"],
    category: "games",
    description: "Você precisa digitar uma palavra com a letra inicial que o bot fornecer.",
    run: async (bot, msg, args, config) => {

      let channel = msg.mentions.channels.first()

      var time;

      if (!channel) {
          channel = msg.channel;
          time = args[0] ? parseInt(args[0], 10) * 1000 : 30000
      } else {
          time = args[1] ? parseInt(args[1], 10) * 1000 : 30000
          if(!time){
              time = args[0] ? parseInt(args[0], 10) * 1000 : 30000
          }
      }

      if (!time){
          msg.reply('O tempo deve ser um número inteiro de segundos.')
          return
      }

      if (channel != msg.channel) {
          msg.channel.send(`O Jogo será iniciado em ${channel}!`)
      }

      //collect players
      let startembed = new RichEmbed().setTitle("REAJA A ESTA MENSAGEM COM 🎲 PARA JUNTAR-SE AO TCR!")
      .setDescription(`Hosteado pelo(a) <@${msg.author.id}>`)
      .setColor(msg.member.displayColor)
      .setFooter(`O jogo começará em ${Math.floor(time / 1000)} segundos.`)
      channel.send(startembed).then(async (msg) => {
          msg.react('🎲')

          let collected = await msg.awaitReactions(() => true, {
              time: time
          })

          let players = []
          for (let reaction of collected.array()) {
              console.log(reaction)
              if(reaction.emoji.name == '🎲'){
                  let users = await reaction.fetchUsers()
                  players = players.concat(users.array())
              }
          }
          players = players.filter(player => !player.bot)

          if(players.length < 1 || players.length == null) return channel.send('**Jogo Cancelado!** Não tem jogadores para ser iniciado!');

          channel.send(`O jogo foi iniciado! jogadores: ${players.join(', ')}`)
          let explanationEmbed = new RichEmbed()
              .setTitle('**Pensa rápido! Você tem menos de 10 segundos para pensar em uma palavra que começa com a letra especificada no tempo determinado**')
              .setColor('#77ecf2')
          channel.send(explanationEmbed)

          if(time > 30000 || players.length > 5){
              await sleep(10000)
          } else {
              await sleep(5000)
          }

          runGame(channel, players, bot)
          msg.delete()
          //make game mechanics in game.js
      })
  }
}
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
}
