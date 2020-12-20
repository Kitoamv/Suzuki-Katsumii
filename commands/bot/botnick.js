module.exports = {
    name: "botnick",
    aliases: ["setnickname","bnick"],
    category: "bot",
    description: "Altere o Nome do Bot!",
    run: async (client, message, args) => {
        message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("VOCÊ NÃO TEM PERMISSÃO PARA ISSO.");
        let nick = args.join(" ");
        message.guild.members.get(client.user.id).setNickname(nick)
        return message.reply("O Meu Nome foi alterado com sucesso!");
    }
}

