const { RichEmbed } = require('discord.js')
const { runGame } = require('./SpeckySays/game');

module.exports = {
    name: "speckysays",
    aliases: ["suzukidiz", "suzuki"],
    category: "games",
    description: "O Mestre falou!.",
    run: async (bot, msg, args, config) => {
      if (!msg.member.hasPermission('MANAGE_MESSAGES') && msg.author.id != config.owner) {
          msg.reply(`Você claramente não é adequado(a) para usar este comando!`)
          return
      }

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
      let startembed = new RichEmbed().setTitle("REAJA A ESTA MENSAGEM COM 🎲 PARA JUNTAR-SE AO KATSUMI DIZ!")
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
              .setTitle('**Só siga meus comandos se começar com "Suzuki diz". \n Se você falhar, você está fora do jogo!**')
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
