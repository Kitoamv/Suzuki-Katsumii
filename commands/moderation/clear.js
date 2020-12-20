module.exports = {
    name: "clear",
    aliases: ["erase","cc"],
    category: "moderation",
    description: "Exclua um certo número de mensagens!",
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Precisa da permissão Gerenciar mensagens para fazer isso!");
        if(!args[0]) return message.reply("Preciso saber quantas mensagens você deseja que eu limpe!");
        if(args[0] >= 101) return message.reply("Só consigo limpar até 100 mensagens por vez! Obrigado API Discord, Muito legal!");

        let number = args[0];
        message.channel.bulkDelete(args[0]);
        message.reply(`Cleared ${args[0]} messages! \nMensagens com mais de 14 dias não podem ser apagadas`).then(msg => msg.delete(8000));
    }
}
