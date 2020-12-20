const Discord = require('discord.js');
const { checkBotOwner } = require("./../../utils/permissions")

module.exports = {
    name: "bot-settings",
    aliases: ["bconfig"],
    category: "owner",
    description: "Permite que meu mestre altere algumas configurações.",
    usage: "bot-settings [option]",
    run: async (client, message, args) => {
    checkBotOwner(message)
    const helpembed = new Discord.RichEmbed()
        .setColor(0x6B363E)
        .addField('Qual configuração você gostaria de alterar?', '\n[1] - Defina um jogo\n[2] Defina algo para assistir\n[3] - Status do bot\n# Digite o número para usar a opção.\n# Digite exit para sair deste menu.')
    message.channel.send(helpembed)
        .then(() => {
            message.channel.awaitMessages(m => m.author.id === message.author.id, {
                    max: 1,
                    time: 30000,
                    errors: ['time'],
                })
                .then((resp) => {
                    if (!resp) return;
                    resp = resp.array()[0];
                    if (resp.content === '1') {
                        message.channel.send('O que você gostaria que o jogo fosse definido como mestre demais?.')
                            .then(() => {
                                message.channel.awaitMessages(m => m.author.id === message.author.id, {
                                        max: 1,
                                        time: 30000,
                                        errors: ['time'],
                                    })
                                    .then((resp) => {
                                        if (!resp) return;
                                        resp = resp.array()[0];
                                        if (!resp.content) resp.content = null;
                                        client.user.setActivity(resp.content);
                                        message.reply(`O novo jogo também foi definido ${resp.content}!`);
                                    })
                            })
                    } else if (resp.content === '2') {
                        message.channel.send('Como você gostaria que meu status fosse definido como mestre demais?.')
                            .then(() => {
                                message.channel.awaitMessages(m => m.author.id === message.author.id, {
                                        max: 1,
                                        time: 30000,
                                        errors: ['time'],
                                    })
                                    .then((resp) => {
                                        if (!resp) return;
                                        resp = resp.array()[0];
                                        if (resp.content === 'dnd' || resp.content === 'offline' || resp.content === 'online' || resp.content === 'idle') {
                                            client.user.setStatus(resp.content);
                                            return message.reply(`O novo status também foi definido ${resp.content}!`);
                                        } else {
                                            return message.channel.send("Só pode escolher dnd, offline, online e ocioso como opções, tente novamente.");
                                        }
                                    })
                            })
                    } else if (resp.content === '3') {
                      message.channel.send('Como você gostaria que meu status fosse definido como mestre demais?.')
                      .then(() => {
                        message.channel.awaitMessages(m => m.author.id === message.author.id, {
                                max: 1,
                                time: 30000,
                                errors: ['time'],
                            })
                            .then((resp) => {
                                if (!resp) return;
                                resp = resp.array()[0];
                                if (!resp.content) resp.content = null;
                                client.user.setPresence({ game: { name: `${resp.content}`, type: 3 } });
                                message.reply(`Você alterou com êxito o status do streaming para ${resp.content}!`);
                              
                            })
                    })
                    } else if (resp.content === 'exit') {
                        message.channel.send('O comando foi cancelado.')
                    } else {
                        message.channel.send(`${resp.content} não era uma opção válida.`)
                    }
                })
        })
}
}
