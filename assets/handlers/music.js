/*jshint -W018 */
const {
    RichEmbed
} = require("discord.js");
const yt = require('ytdl-core');
const ytdlDiscord = require('ytdl-core-discord');
const request = require('node-superfetch');
const stations = require("../jsons/radiostations.json");

let dispatcher;
let dispatcher_radio;
let queue = {};
let count = 0;
const voteSkipUsers = new Set();

module.exports = {
    play: async (message, args, funcs) => {
        if (!message.guild.me.hasPermission("CONNECT")) return funcs.send(`Eu preciso da permissão CONNECT para executar este comando...`);
        if (!message.guild.me.hasPermission("SPEAK")) return funcs.send(`Eu preciso da permissão SPEAK para executar este comando...`);
        if (dispatcher_radio != null) return message.channel.send('Por favor, pare o rádio antes de tocar outra música.');
        let query = args.join(' ');
        if (query < 1) return message.channel.send('Você deve incluir uma consulta para o que deseja reproduzir e adicionar [nome da música / url]');
        let send1 = [];
        if (!queue[message.guild.id] === undefined && !queue[message.guild.id] === {}) {
            queue[message.guild.id].songs.forEach((i) => {
                send1.push(`${i + 1}`);
            });
            if (send1.length >= 10) return funcs.send('Não pode ter mais de 10 músicas na fila ao mesmo tempo');
        }
        const msg = await message.channel.send("Procurando...");
        handleVideo(message, msg, query, funcs);
    },
    queue: (message, funcs) => {
        if (queue[message.guild.id] === undefined || queue[message.guild.id] == {}) return message.channel.send(`A fila está vazia, nenhuma música para exibir!`);
        let send1 = [];
        queue[message.guild.id].songs.forEach((song, i) => {
            send1.push(`\n${i + 1}. ${song.title}, Requerido por ${song.requestedBy}`);
        });
        message.channel.send(`**__${message.guild.name}'s Fila de músicas: __** Atualmente ${send1.length} na fila.\n\`\`\`Músicas na fila:\n${send1}\`\`\``);
    },
    clearqueue: (message, funcs) => {
        if (queue[message.guild.id] === []) return funcs.send('A fila está vazia, não há músicas para remover.');
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Não encontrei seu canal de voz...');
        queue[message.guild.id].songs = [];
        funcs.send('A fila foi limpa!');
        voiceChannel.leave();
    },
    leave: async (message, bot, funcs) => {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Não consegui sair do seu canal de voz...');
        const GuildCheck = bot.guilds.get(message.guild.id);
        if (!queue) return funcs.send('Não há nada tocando que eu possa parar por você.');
        if (GuildCheck.voiceConnection) {
            try {
                if (queue[message.guild.id] === undefined || queue[message.guild.id] === {}) {
                    voiceChannel.leave();
                } else {
                    queue[message.guild.id].songs = [];
                    const song = 'leave'
                    dispatcher.end(song)
                }
            } catch (err) {
                return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`.Tente mais tarde!`);
            }
        } else {
            return funcs.send('Verifique se o bot está em um canal de voz para sair.');
        }
    },
    skip: async (message, bot, funcs) => {
        const channel = message.member.voiceChannel;
        if (!channel || channel.type !== 'voice') return message.reply('Não consegui me conectar ao seu canal de voz para pular a música...');
        if (queue[message.guild.id] === undefined || queue[message.guild.id] === {}) return message.channel.send(`Não consegui me conectar ao seu canal de voz para ouvir música`);

        const userCount = channel.members.filter(m => !m.user.bot).size
        const requiredVotes = userCount === 2 ? 2 : (userCount % 2 === 0 ? userCount / 2 + 1 : Math.ceil(userCount / 2));
        let dj = bot.guilds.get(message.guild.id).roles.find(role => role.name == 'dj');
        if (dj && message.member.roles.has(dj.id) || channel.members.size <= 2) {
            funcs.send('A música atual foi ignorada.');
            dispatcher.end();
        } else {
            if (voteSkipUsers.has(message.author.id)) {
                  return funcs.send('você já votou para pular esta música');
            }
            if (voteSkipUsers.size + 1 >= requiredVotes) {
                message.channel.send(`**__${message.author.username}__** deu o último voto necessário, a música foi pulada.`)
                await dispatcher.end();
                return;
            } else {
                voteSkipUsers.add(message.author.id);
              return message.channel.send(`**__${message.author.username}__** votou para pular esta música, podemos obter \`${requiredVotes - voteSkipUsers.size}\` mais voto(s).`);
            }
          }
    },
    pause: (message, funcs) => {
        dispatcher.pause();
        funcs.send('A música foi pausada, use> retomar para começar a tocar novamente.');
    },
    resume: (message, funcs) => {
        dispatcher.resume();
        funcs.send('A música foi retomada, se pausada.');
    },
    volume: (message, args, funcs) => {
        const volumetoset = parseInt(args.join(""));
        if (volumetoset > 200 || volumetoset < 0) return message.channel.send('Volume fora da faixa!').then((response) => {
            response.delete(5000);
        });
        if (isNaN(volumetoset)) return funcs.send("Não é um número válido para definir o volume!");
        dispatcher.setVolume(volumetoset / 100);
        funcs.send(`O volume agora está definido como: ${volumetoset}%`);
    },
    radio: async (message, args, funcs) => {
        const channel = message.member.voiceChannel;
        if (!channel || channel.type !== 'voice') return message.reply('Não consegui me conectar ao seu canal de voz...');
        if (channel && !channel.joinable) {
            return funcs.send("Não é possível entrar no seu canal de voz.");
        }
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) {
            return funcs.send('Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões adequadas!');
        }
        if (!permissions.has('SPEAK')) {
            return funcs.send('Não consigo falar neste canal de voz, verifique se tenho as permissões adequadas!');
        }
        if (message.guild.voiceConnection) return funcs.send("O bot já está conectado a um canal de voz.");
        const station = stations[args];
        if (!station) {
            return funcs.send("Nenhuma estação encontrada");
        }
        if (queue[message.guild.id] !== undefined && queue[message.guild.id].playing == true) return funcs.send(`Pare qualquer outra música antes de tentar tocar o rádio.`);
        try {
            await channel.join();
        } catch (err) {
            console.log(`Não consegui entrar no canal de voz: ${error.stack}`);
            return funcs.send(`Não consegui entrar no canal de voz: ${error}`);
        }
        dispatcher_radio = message.guild.voiceConnection.playStream(station.url, {
            volume: 0.25
        }), {
            bitrate: 'auto',
            passes: 6,
            quality: 'highestaudio'
        };
        dispatcher_radio.on('end', () => {
            try {
                message.member.voiceChannel.leave();
                dispatcher_radio = null;
                return funcs.send('O rádio parou de tocar.');
            } catch (err) {
                console.log(err.message);
            }
        });
        dispatcher_radio.on('error', (err) => {
            try {
                message.member.voiceChannel.leave();
                dispatcher_radio = null;
                console.log(err.stack);
                return funcs.send('error: ' + err);
            } catch (e) {
                console.log(e.message);
            }
        });
        funcs.send(`Tocando agora ${station.name}, use o comando stopradio ou deixe para parar o rádio.`);
    },
    radioStations: (message) => {
        let reply = "__**Estações de radio:**__";
        for (var station in stations) {
            const s = stations[station];

            if (!s || !s.name || !s.url) {
                continue;
            }
            reply += `\n\t**${station}** - ${s.name}`;
        }
        message.channel.send(reply);
    },
    stopRadio: (message, bot, funcs) => {
        if (dispatcher_radio === null) return funcs.send(`O rádio não está reproduzindo nenhuma estação atualmente.`);
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('Não consegui sair do seu canal de voz...');
        const GuildCheck = bot.guilds.get(message.guild.id);
        if (GuildCheck.voiceConnection) {
            try {
                dispatcher_radio.end();
            } catch (err) {
                return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`);
            }
        } else {
            return funcs.send('O rádio não está reproduzindo nenhuma estação no momento.');
        }
    },
    currentSong: (message, funcs) => {
        if (queue[message.guild.id].playing == false) return message.channel.send('Não há músicas atualmente sendo reproduzidas.')
        funcs.send(`Jogando neste momento: \`${queue[message.guild.id].songs.song[0].title}\`(URL: \`${queue[message.guild.id].songs.song[0].url}\`.`);
    },
    volume: (message, args, funcs) => {
        if (queue[message.guild.id] !== undefined && queue[message.guild.id].playing == true) return funcs.send(`No momento, não estou tocando nenhuma música para poder alterar o volume.`);
        const volumetoset = parseInt(args[0]);
        if (volumetoset > 200 || volumetoset < 0) return message.channel.send('Volume fora da faixa!').then((response) => {
            response.delete(5000);
        });
        if (isNaN(volumetoset)) return message.channel.send("Não é um número válido para definir o volume!");
        if (dispatcher_radio !== null) {
            dispatcher.setVolume(volumetoset / 100);
        } else {
            dispatcher_radio.setVolume(volumetoset / 100);
        }
        funcs.send(`o Volume foi definido como: ${volumetoset}%`);
    },
    shuffle: (message, funcs) => {
        if (queue[message.guild.id] === undefined || queue[message.guild.id] == {}) return message.channel.send(`A fila está vazia, sem músicas para embaralhar!`);
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        shuffle(queue[message.guild.id].songs);
        funcs.send('As músicas na fila foram embaralhadas.');
    },
    removesong: (message, funcs) => {
        if (queue[message.guild.id] === undefined || queue[message.guild.id] == {}) return message.channel.send(`A fila está vazia, sem músicas para embaralhar!`);
        message.channel.send(`__**Qual música você gostaria de remover da fila? (digite o nome da música)**__`).then(() => {
            message.channel.awaitMessages(m => m.author.id === message.author.id, {
                max: 1,
                errors: ["time"],
                time: 30000
            }).then((resp) => {
                if (!resp) return;
                resp = resp.array()[0];
                function myFunction() {
                    const songQueue =  queue[message.guild.id].songs;
                    try {
                        songQueue.splice(songQueue.findIndex(v => v.title === resp.content), 1);
                    } catch (err) {
                        funcs.send('A música não foi encontrada na fila, tente novamente.');
                    }
                }
                myFunction();
                funcs.send('A música foi removida da fila.');
            }).catch((err) => {
                if (err.message === undefined) {
                    message.channel.send('Você não forneceu informações no prazo, tente novamente.');
                } else {
                    console.log(err);
                    return message.channel.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`);
                }
            });
        });
    }
};

async function handleVideo(message, msg, query, funcs) {
    if (query.includes('https://www.youtube.com/watch?v=') && query.includes("&list=")) {
        /*var mySubString = query.substring(
            query.lastIndexOf("&list=") + 6,
        );
        const startRadioCheck = mySubString.replace(/\&/g, '').replace(/\&start\_radio\=1/g, '')*/
        function youtube_playlist_parser(url){
            var reg = new RegExp("[&?]list=([a-z0-9_-]+)","i");
            var match = reg.exec(url);
            if (match&&match[1].length>0){
                return match[1];
            }
        }
        let playlist = youtube_playlist_parser(query);
        console.log(playlist)
        if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
        let channel = message.member.voiceChannel;
        if (!channel || channel.type !== "voice") return funcs.send(`Não encontrei seu canal de voz.`);
        if (!message.guild.voiceConnection) {
            await channel.join();
        }
        const {
            body
        } = await request
            .get('https://www.googleapis.com/youtube/v3/playlistItems')
            .query({
                part: 'snippet, contentDetails',
                maxResults: 15,
                playlistId: playlist,
                key: "Google api key"
            });
        const checkIfValid = yt.validateURL(query)
        if (checkIfValid === false) return message.channel.send('Verifique se o link fornecido é um link válido do youtube.')
        await body.items.forEach((video) => {
            let url = `https://www.youtube.com/watch?v=${video.contentDetails.videoId}`;
                queue[message.guild.id].songs.push({
                    url: url,
                    title: video.snippet.title,
                    requestedBy: message.author.username
            })
            count++;
        });
        const newembed = new RichEmbed()
            .setColor(funcs.rc())
            .setDescription(`Adicionado **${count}** músicas na fila (lista de reprodução: limite de 15 músicas)`);
        msg.edit(newembed);
        count = 0;
        if (queue[message.guild.id].playing == false) {
            play(message, msg, funcs, queue[message.guild.id])
        }
    } else if (query.includes("youtube.com/watch")) {
        let url = query;
        yt.getInfo(url, async (err, info) => {
            if (err) return funcs.send(`Ops, ocorreu um erro, desculpe por isso. Detalhes ${err}`);
            let channel = message.member.voiceChannel;
            if (!channel || channel.type !== "voice") return funcs.send(`Não encontrei seu canal de voz.`);
            if (!message.guild.voiceConnection) {
               await channel.join();
            }
            if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
            if (queue[message.guild.id].playing == true) {
                await queue[message.guild.id].songs.push({
                    url: url,
                    title: info.title,
                    requestedBy: message.author.username,
                    duration: info.length_seconds,
                });
                const newembed = new RichEmbed()
                    .setColor(funcs.rc())
                    .setDescription(`Adicionado **${info.title}** para a fila`);
                msg.edit(newembed);
            } else {
                await queue[message.guild.id].songs.push({
                    url: url,
                    title: info.title,
                    requestedBy: message.author.username,
                    duration: info.length_seconds,
                });
                return play(message, msg, funcs, queue[message.guild.id])
            }
        });
    } else {
        try {
            const {
                body
            } = await request
                .get('https://www.googleapis.com/youtube/v3/search')
                .query({
                    type: 'video',
                    q: query,
                    maxResults: 5,
                    part: 'snippet',
                    //order: 'relevance',
                    //videoDuration: 'medium',
                    kkey: "Google api key"
                });
            if (!body.items.length) return funcs.send('No results found for ' + query + ".");
            const output = `[1] - ${body.items[0].snippet.title}.\n[2] - ${body.items[1].snippet.title}.\n[3] - ${body.items[2].snippet.title}.\n[4] - ${body.items[3].snippet.title}.\n[5] - ${body.items[4].snippet.title}.\n# Digite exit ou none para cancelar o comando.`;
            const helpembed = new RichEmbed()
                .setColor(funcs.rc())
                .addField('Várias opções encontradas: qual você gostaria de jogar?', "```" + output + "```");
            msg.edit(helpembed)
                .then(() => {
                    message.channel.awaitMessages(m => m.author.id === message.author.id, {
                            max: 1,
                            time: 30000,
                            errors: ['time'],
                        })
                        .then(async (resp) => {
                            if (!resp) return;
                            resp = resp.array()[0];
                            let channel = message.member.voiceChannel;
                            if (!channel || channel.type !== "voice") return funcs.send(`Não encontrei seu canal de voz.`);
                            if (!message.guild.voiceConnection) {
                                channel.join();
                            }
                            if (resp.content === "1") {
                                let url = `https://www.youtube.com/watch?v=${body.items[0].id.videoId}`;
                                yt.getInfo(url, async (err, info) => {
                                    if (err) return funcs.send(`Ops, ocorreu um erro, desculpe por isso. Detalhes ${err}`);
                                    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                                    if (queue[message.guild.id].playing == true) {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        const newembed = new RichEmbed()
                                            .setColor(funcs.rc())
                                            .setDescription(`Adicionado **${info.title}** para a fila`);
                                        msg.edit(newembed);
                                    } else {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        play(message, msg, funcs, queue[message.guild.id])
                                    }
                                });
                            } else if (resp.content === "2") {
                                let url = `https://www.youtube.com/watch?v=${body.items[1].id.videoId}`;
                                yt.getInfo(url, async (err, info) => {
                                    if (err) return funcs.send(`Ops, ocorreu um erro, desculpe-me por isso. Detalhes ${err}`);
                                    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                                    if (queue[message.guild.id].playing == true) {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        const newembed = new RichEmbed()
                                            .setColor(funcs.rc())
                                            .setDescription(`Adicionado **${info.title}** para a fila`);
                                        msg.edit(newembed);
                                    } else {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        play(message, msg, funcs, queue[message.guild.id])
                                    }
                                });
                            } else if (resp.content === "3") {
                                let url = `https://www.youtube.com/watch?v=${body.items[2].id.videoId}`;
                                yt.getInfo(url, async (err, info) => {
                                    if (err) return funcs.send(`Ops, ocorreu um erro, desculpe-me por isso. Detalhes ${err}`);
                                    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                                    if (queue[message.guild.id].playing == true) {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        const newembed = new RichEmbed()
                                            .setColor(funcs.rc())
                                            .setDescription(`Adicionado **${info.title}** para a fila`);
                                        msg.edit(newembed);
                                    } else {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        play(message, msg, funcs, queue[message.guild.id])
                                    }
                                });
                            } else if (resp.content === "4") {
                                let url = `https://www.youtube.com/watch?v=${body.items[3].id.videoId}`;
                                yt.getInfo(url, async (err, info) => {
                                    if (err) return funcs.send(`Ops, ocorreu um erro, desculpe-me por isso. Detalhes ${err}`);
                                    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                                    if (queue[message.guild.id].playing == true) {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        const newembed = new RichEmbed()
                                            .setColor(funcs.rc())
                                            .setDescription(`Adicionado **${info.title}** para a fila`);
                                        msg.edit(newembed);
                                    } else {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        play(message, msg, funcs, queue[message.guild.id])
                                    }
                                });
                            } else if (resp.content === "5") {
                                let url = `https://www.youtube.com/watch?v=${body.items[4].id.videoId}`;
                                yt.getInfo(url, async (err, info) => {
                                    if (err) return funcs.send(`Ops, ocorreu um erro, desculpe-me por isso. Detalhes ${err}`);
                                    if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                                    if (queue[message.guild.id].playing == true) {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        const newembed = new RichEmbed()
                                            .setColor(funcs.rc())
                                            .setImage('')
                                            .setDescription(`Adicionado **${info.title}** para a fila`);
                                        msg.edit(newembed);
                                    } else {
                                        await queue[message.guild.id].songs.push({
                                            url: url,
                                            title: info.title,
                                            requestedBy: message.author.username,
                                            duration: info.length_seconds,
                                        });
                                        play(message, msg, funcs, queue[message.guild.id])
                                    }
                                });
                            } else if (resp.content === "none" || resp.content === "exit") {
                                funcs.send("Comando de reprodução cancelado.");
                            } else {
                                funcs.send("Comando de reprodução cancelado");
                            }
                        })
                        .catch((err) => {
                            console.log("Ocorreu um erro Detalhes do erro: " + err);
                            funcs.send(`Didn't pick a option so command has been cancelled.`);
                        });
                }).catch((err) => {
                    console.log("An error happened Error Details: " + err);
                    funcs.send(`Não selecionou uma opção, por isso o comando foi cancelado.`);
                });
        } catch (err) {
            return funcs.send(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`);
        }
    }
}

async function play(message, msg, funcs, song) {
    if (song.songs[0] === undefined || queue[message.guild.id] === undefined || queue[message.guild.id] === {}) return message.channel.send('A fila está vazia, desconectando até que mais esteja na fila.').then(() => {
        queue[message.guild.id].playing = false;
        if (message.guild.voiceConnection) {
            message.member.voiceChannel.leave();
        };
        return;
    });
    dispatcher = message.guild.voiceConnection.playOpusStream(await ytdlDiscord(song.songs[0].url, {
        quality: 'highestaudio',
        filter: 'audioonly',
        highWaterMark: 1 << 25,
    }), {
        bitrate: 'auto',
        passes: 6,
    });
    dispatcher.on('end', (song, reason) => {
        if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
        if (!message.guild.voiceConnection) return queue[message.guild.id].songs = [];
        if (song == 'leave') {
            queue[message.guild.id].playing = false;
            voteSkipUsers.clear();
            message.member.voiceChannel.leave();
            return message.channel.send('Leaving the voice channel use play to listen to music again.');
        } else {
            queue[message.guild.id].songs.shift();
            voteSkipUsers.clear();
            play(message, msg, funcs, queue[message.guild.id]);
        }
    });
    dispatcher.on('error', (err) => {
        voteSkipUsers.clear();
        console.log(`Music Error: ${err.stack}`);
    });

    if (queue[message.guild.id].playing == true) {
        const newembed = new RichEmbed()
            .setColor(0xD4AF37)
            .setDescription(`Tocando: ${song.songs[0].title} conforme solicitado por: ${song.songs[0].requestedBy}`);
        message.channel.send(newembed);
    } else {
        const newembed = new RichEmbed()
            .setColor(funcs.rc())
            .setDescription(`Tocando: ${song.songs[0].title} conforme solicitado por: ${song.songs[0].requestedBy}`);
        msg.edit(newembed);
    }
    queue[message.guild.id].playing = true;
}
