module.exports = {
  name: "afk",
  category: "misc",
  description: "Você vai realmente ficar ausente? Utilize este comando.",
  usage: "<id | mention>",
  run: async (client, message, args) => {
    let reason = args.join(' ') ? args.join(' ') : 'Atualmente, estou afk, responderei o mais breve possível.';
    let afklist = client.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            usertag: message.author.tag,
            reason: reason
        };

        client.afk.set(message.author.id, construct);
        return message.reply(`você foi definido como afk por motivo: ${reason}`).then(msg => msg.delete(5000));
    }
}
}
