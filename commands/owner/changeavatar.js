const config = require('../../JSON/config.json');
const cd = new Set();


module.exports = {
    name: "changeavatar",
    category: "owner",
    description: "Muda o avatar do bot.",
    usage: "changeavatar <number>",
    run: async (client, message, args) => {
    checkBotOwner(message)
    let ufind = message.author.id;
    if (cd.has(ufind)) return message.channel.send("Por favor, aguarde um pouco antes de usar este comando novamente!");
    let x = args[0];
    if (isNaN(x)) return message.channel.send("Entrada inválida");
    let avatar = config.avatar_list;
    if (!avatar[x]) return message.channel.send("Não há avatar!");
    client.user.setAvatar(avatar[x]).then(() => {
        message.channel.send(`Avatar alterado`, {file: avatar[x]});
        cd.add(ufind);
        setTimeout(() => {
            cd.delete(ufind)
        }, 5000)
    }).catch(() => message.channel.send("Você está mudando o avatar rápido demais!"));
}
}
