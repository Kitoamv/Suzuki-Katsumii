const Discord = require("discord.js");

module.exports = {
  name: "help",
  category: "info",
  description: "Lhe Ajudará a descobrir todos os comandos presentes no bot.",
  run: async (bot, message, args, msg) => {

  let helpCembed = new Discord.RichEmbed()
  .setTitle("Por favor escolha uma categoria")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/avatars/627905919170379803/905169ead17f9c36fb3c1ec5a62b37af.png")
  .addField("Info", "Informações gerais sobre coisas", true)
  .addField("Fun", "Coisas extras para brincar", true)
  .addField("Bot", "Comandos únicos do bot", true)
  .addField("Games", "Mini-Games da Suzuki-Katsumi", true)
  .addField("Admin", "Comandos Que pode ser usado pela Administração.", true)
  .addField("Misc", "Comandos Misc", true)
  .addField("Music", "Veja a Lista de comandos Músicais", true)
  .addField("Mod", "Comandos de Moderação", true)
  .addField("Utils", "Veja os comandos que podem ser utéis.", true)
  .addField("Radio", "Escute Músicas inteiramente ao vivo", true)
  .setFooter("Utilize: <prefix>help {Nome da Categoria}");

  if(!args[0]) return message.channel.send(helpCembed);
  let question = args.slice(1).join(" ");

  let infoembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de informações")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893110629269534/Screenshot_3.png")
  .addField("<prefix>animesearch", "Procure por um anime vindo diretamente do MyAnimeList.")
  .addField("<prefix>bitcoin", "Veja o Valor atual do BitCoin.")
  .addField("<prefix>help", "Veja as informações sobre todos os comandos.")
  .addField("<prefix>instagram", "Descubra algumas estatísticas legais do instagram")
  .addField("<prefix>nhentai", "Um comando que gera um link nhentai aleatório e o envia no chat.")
  .addField("<prefix>serverlist", "Eu estou online em exatamente ??? Servidores.")
  .addField("<prefix>ping", "Retorna com uma mensagem mostrando a Latencia e o Ping!")
  .addField("<prefix>serveremojis", "Retorna uma lista com emojis do servidor.")
  .addField("<prefix>serverinfo", "Retorna as inforamções sobre o servidor.")
  .addField("<prefix>userinfo", "Retorna as inforamções sobre determinado usuário.")
  .addField("<prefix>members", "Retorna a Lista de Membros que tem em um servidor.")
  .addField("<prefix>whois", "Retorna as inforamções sobre determinado usuário.")
  .addField("<prefix>icon","Irá retornar com uma imagem da logo do servidor.")
  .addField("Fim dos Comandos de INFO","Veja mais comandos ao utilizar o help novamente.");

  let funembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos divertidos")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893205303099432/Screenshot_12.png")
  .addField("<prefix>8ball", "Faça suas perguntas para a Suzuki")
  .addField("<prefix>3000", "Isso faz 3000 anos.")
  .addField("<prefix>achievement", "Conquista do menescraft!")
  .addField("<prefix>advice", "Aqui vai um bom conselho amigo.")
  .addField("<prefix>animeme", "Suzuki Katsumi envia um meme aleatório de anime no reddit!")
  .addField("<prefix>animtableflip", "JOGA ESSA MESA! TO PUTO DA VIDA")
  .addField("<prefix>approved", "Aprove uma pessoa")
  .addField("<prefix>baka", "Ele(a) é idiota.")
  .addField("<prefix>beautiful", "Que pessoa linda :3")
  .addField("<prefix>bill", "Você é a cara do dolar")
  .addField("<prefix>bite", "HAHAHA VOU TE MORDER!!")
  .addField("<prefix>brazzers", "Você é da brazzers ?")
  .addField("<prefix>buttslap", "Tapa na bunda ?")
  .addField("<prefix>challenger", "Estou lhe desafiando!.")
  .addField("<prefix>checkout", "Você precisar checar este usuário.")
  .addField("<prefix>compliment", "Você quer ser elogiado ?")
  .addField("<prefix>continued", "Continua...")
  .addField("<prefix>crush", "Hmmmmmm um crush ein...")
  .addField("<prefix>cry", "Você realmente esta querendo chorar? Vá em frente...")
  .addField("<prefix>cuddle", "Faça carinho na pessoa que você mencionar!")
  .addField("<prefix>delete", "Delete este usuário.")
  .addField("<prefix>disabledshrug", "Não quer um abraço ?")
  .addField("<prefix>divorce", "Você esta agora mesmo divorciado(a)")
  .addField("<prefix>error", "404 Not Found")
  .addField("Esta Página Terminou", "Utilize <prefix>fun2 para ir até a próxima página.");

  let funembed2 = new Discord.RichEmbed()
  .setDescription("Lista de comandos divertidos 2")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893205303099432/Screenshot_12.png")
  .addField("<prefix>flipcoin", "Cara ou Coroa ?")
  .addField("<prefix>foxgirl", "Garota Raposa ?")
  .addField("<prefix>goodnight", "Boa Noite Companheiros.")
  .addField("<prefix>hug", "Envia um Abraço virtual :3")
  .addField("<prefix>inozuke", "INOZUKE! INOZUKE! INOZUKE!!!")
  .addField("<prefix>jail", "Você tem o direito de permanecer calado.")
  .addField("<prefix>kemonomimi", "Veja imagens de personagens com orelhas :3")
  .addField("<prefix>kill", "Use este comando para matar alguém!")
  .addField("<prefix>kirito", "Um meme somente para quem conhece o Kirito")
  .addField("<prefix>kiss", "Dê um belo beijo virtual na pessoa que você mencionar!")
  .addField("<prefix>lizard", "Foto de um Lizard")
  .addField("<prefix>love", "Calcula a afinidade amorosa que você tem por outra pessoa.")
  .addField("<prefix>lover", "Eu amo o...")
  .addField("<prefix>meme", "Receba um Meme aleatório.")
  .addField("<prefix>neko", "Veja imagens de lindas nekos :3")
  .addField("<prefix>nekogif", "Veja gifs de lindas nekos :3")
  .addField("<prefix>nezuko", "Fotos ou Gifs da nezuko-chan")
  .addField("<prefix>pat", "Faça um bom e velho cafune xD!")
  .addField("<prefix>poke", "Cutuque alguém! ( ͡° ͜ʖ ͡°)")
  .addField("<prefix>punch", "DANDO UM SOCO NA CARA NESSE BABACA!")
  .addField("<prefix>rainbow", "Você tem as coros do arco-iris")
  .addField("<prefix>rejected", "Você vai rejeitar uma pessoa.")
  .addField("<prefix>rip", "Respeite uma pessoa que pode ter sido morta.")
  .addField("Esta Página Terminou", "Utilize <prefix>fun3 para ir até a próxima página.");

  let funembed3 = new Discord.RichEmbed()
  .setDescription("Lista de comandos divertidos 2")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893205303099432/Screenshot_12.png")
  .addField("<prefix>ship", "Ship 2 membros")
  .addField("<prefix>shit", "Ele está cagando...")
  .addField("<prefix>slap", "Bata em alguém por ser um idiota!")
  .addField("<prefix>sleep", "Que sono...")
  .addField("<prefix>slotmachine", "Desperdice algum dinheiro em slots")
  .addField("<prefix>smug", "Você está tão cheio de sí ein")
  .addField("<prefix>stonks", "STONKS!")
  .addField("<prefix>suicide", "Mate-se com este comando. Agora vem com reavivamento grátis!")
  .addField("<prefix>tattoo", "Coloque a pessoa marcada numa tatuagem.")
  .addField("<prefix>textflip", "Inverta o seu texto :3")
  .addField("<prefix>thuglife", "Ele realmente é thuglife.")
  .addField("<prefix>triggered", "PISTOLOU")
  .addField("<prefix>trump", "Agora isso é ilegal...")
  .addField("<prefix>wasted", "Ele realmente é se fodeu.")
  .addField("<prefix>wouldyourather", "Você preferiria... ?")
  .addField("<prefix>yomamma", "Olá Mamma")
  .addField("<prefix>sexyrate", "Taxa de Porcentagem de você ser sexy.")
  .addField("<prefix>fbi", "CHAME O FBI PARA ESTE SUJEITO LOLICON!")
  .addField("<prefix>aicat", "Veja um gato.")
  .addField("<prefix>ascii", "Converte informações de texto ASCII")
  .addField("<prefix>cattext", "envia material de texto waifu anime bonito owo nya")
  .addField("<prefix>dice", "Jogue os dados... você tem dado em casa ?")
  .addField("<prefix>fact", "Envia um fato interessante")
  .addField("<prefix>waifu", "Essa é a sua nova WAIFU")
  .addField("Fim dos Comandos de FUN", "Veja mais comandos ao utilizar o help novamente.");

  let adminembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de Adminisração")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5646/9cedcf5cdc2f56f991caafca327d9796ffa499d1_hq.jpg")
  .addField("<prefix>addchannel", "Crie um novo canal, seja de texto ou de voz.")
  .addField("<prefix>announce", "Silencia todos os outros usuários, permitindo um anúncio de 15 segundos e silencia todos.")
  .addField("<prefix>broadcast", "Mensagem para algum tipo de transmissão!!")
  .addField("<prefix>giveaway", "Comece um Sorteio.")
  .addField("<prefix>poll", "Inicie uma votação")
  .addField("<prefix>setup", "Instala em seu servidor todos os canais necessários.")
  .addField("Fim dos Comandos de ADMIN", "Veja mais comandos ao utilizar o help novamente.");

  let botembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos do Bot")
  .setColor("#af0e97")
  .setThumbnail("https://i1.sndcdn.com/artworks-000147792067-cs5per-t500x500.jpg")
  .addField("<prefix>botinfo", "Retorna Informações sobre o bot")
  .addField("<prefix>botnick", "Altere o Nome do Bot!")
  .addField("<prefix>donate", "Faça uma doação para que o bot continue a funcionar")
  .addField("<prefix>feedback", "Use este comando para enviar uma sugestão de comando para o administrador do bot. (Kirito Amv's#6281)")
  .addField("<prefix>invite", "Retorna um link para convidar o bot para o seu servidor")
  .addField("<prefix>stats", "Mostra o estado atual do bot.")
  .addField("<prefix>support", "Receba o convite para entrar no server oficial do bot")
  .addField("<prefix>website", "Receba o website oficial do bot")
  .addField("Fim dos Comandos de BOT", "Veja mais comandos ao utilizar o help novamente.");

  let gamesembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de Jogos")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>corners", "atribui aleatoriamente cantos da arena")
  .addField("<prefix>rps", "Jogo de pedra, papel ou tesoura. Reaja a um dos emojis para jogar o jogo.")
  .addField("<prefix>speckysays", "O Mestre falou!.")
  .addField("<prefix>towncountryriver", "Você precisa digitar uma palavra com a letra inicial que o bot fornecer.")
  .addField("Fim dos Comandos de GAMES", "Veja mais comandos ao utilizar o help novamente.");

  let miscembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de Jogos")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>afk", "Você vai realmente ficar ausente? Utilize este comando.")
  .addField("<prefix>avatar", "Mostre a foto de perfil de algum usuário")
  .addField("<prefix>minecraft", "Veja o estado atual de um servidor de minecraft.")
  .addField("<prefix>comandos", "Obtenha a contagem total de comandos para o bot.")
  .addField("<prefix>nick", "troque ou remove o seu nickname")
  .addField("Fim dos Comandos de MISC", "Veja mais comandos ao utilizar o help novamente.");

  let radioembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos da Rádio")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>jpop", "Escute músicas jpop inteiramente ao vivo da rádio.")
  .addField("<prefix>kpop", "Escute músicas kpop inteiramente ao vivo da rádio.")
  .addField("<prefix>lofi", "Escute músicas lofi inteiramente ao vivo da rádio.")
  .addField("<prefix>radioend", "Escute músicas radioend inteiramente ao vivo da rádio.")
  .addField("<prefix>vapourwave", "Escute músicas vapourwave inteiramente ao vivo da rádio.")
  .addField("Fim dos Comandos de RADIO", "Veja mais comandos ao utilizar o help novamente.");

  let modembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de Moderação")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>ban", "Expulse de Vez um Usuário do Servidor, Ele não irá voltar.")
  .addField("<prefix>clear", "Exclua um certo número de mensagens!")
  .addField("<prefix>kick", "Chute um membro para fora do servidor!")
  .addField("<prefix>lockdown", "Isso bloqueará um canal pela duração definida, em horas, minutos ou segundos.")
  .addField("<prefix>mute", "Silencie um Usuário.")
  .addField("<prefix>mutechat", "Mute um canal de texto!")
  .addField("<prefix>prefix", "Altere o prefixo do bot!")
  .addField("<prefix>report", "Reporte algum usuário do servidor!")
  .addField("<prefix>say", "Faça o bot dizer coisas atráves deste comando!")
  .addField("<prefix>setlog", "Permite a configuração do canal de log")
  .addField("<prefix>settings", "Permite definir várias configurações de bot específicas do servidor")
  .addField("<prefix>tempmute", "Mute completamente uma pessoa por um certo periodo de tempo!")
  .addField("<prefix>unmute", "Desmute uma pessoa que foi mutada.")
  .addField("<prefix>unmutechat", "Desmute um canal de texto!")
  .addField("Fim dos Comandos de MODERAÇÃO", "Veja mais comandos ao utilizar o help novamente.");

  let musicembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos de Músicais")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>clearqueue", "Remove tudo na fila.")
  .addField("<prefix>currentsong", "Diz a você o que está tocando no momento.")
  .addField("<prefix>leave", "Sai do chat de voz atual.")
  .addField("<prefix>play", "Tocar música com o bot.")
  .addField("<prefix>queue", "Visualiza a fila atual no servidor.")
  .addField("<prefix>radio", "Reproduz música da rádio.")
  .addField("<prefix>radiostations", "Veja quais estações de rádio você pode ouvir.")
  .addField("<prefix>removesong", "Remove uma música da fila.")
  .addField("<prefix>resume", "Retomar a música pausada.")
  .addField("<prefix>shuffle", "Baralha as músicas na fila.")
  .addField("<prefix>skip", "Pule a música atual.")
  .addField("<prefix>stopradio", "Interrompe o rádio de tocar música.")
  .addField("<prefix>volume", "Permite controlar o volume das músicas.")
  .addField("Fim dos Comandos de MÚSICA", "Veja mais comandos ao utilizar o help novamente.");

  let utilembed = new Discord.RichEmbed()
  .setDescription("Lista de comandos Utéis")
  .setColor("#af0e97")
  .setThumbnail("https://pm1.narvii.com/5831/527da8c853da5bcdf29169b355ba7f30eb19120d_hq.jpg")
  .addField("<prefix>react", "Envia uma mensagem como o nome do emoji.")
  .addField("<prefix>reacttolast", "Reage à última mensagem com o emojiname fornecido.")
  .addField("<prefix>reacttomsg", "Reage a uma determinada msg seja o emote gif ou não.")
  .addField("<prefix>reactthis", "Reaja e Isto!")
  .addField("<prefix>suggest", "Um Comando para sugerir algo de novo para o bot, seja comando ou não.")
  .addField("Fim dos Comandos de UTIL", "Veja mais comandos ao utilizar o help novamente.");

  if(args[0] === 'info') {
    message.channel.send(infoembed);
  }
  if(args[0] === 'admin') {
    message.channel.send(adminembed);
  }
  if(args[0] === 'bot') {
    message.channel.send(botembed);
  }
  if(args[0] === 'fun') {
    message.channel.send(funembed);
  }
  if(args[0] === 'fun2') {
    message.channel.send(funembed2);
  }
  if(args[0] === 'fun3') {
    message.channel.send(funembed3);
  }
  if(args[0] === 'games') {
    message.channel.send(gamesembed);
  }
  if(args[0] === 'misc') {
    message.channel.send(miscembed);
  }
  if(args[0] === 'mod') {
    message.channel.send(modembed);
  }
  if(args[0] === 'music') {
    message.channel.send(musicembed);
  }
  if(args[0] === 'utils') {
    message.channel.send(utilembed);
  }
  if(args[0] === 'radio') {
    message.channel.send(radioembed);
  }
}
}
