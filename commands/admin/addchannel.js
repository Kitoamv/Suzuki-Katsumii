module.exports = {
    name: "addchannel",
    aliases: ["newchannel", "createchannel", "criarcanal"],
    category: "admin",
    description: "Crie um novo canal, seja de texto ou de voz.",
    usage: "<text-or-voice> <nome>",
    run: async (client, msg, arg) => {
        msg.delete();
        if (!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("Desculpe, Aparentemente você não tem permissão para utilizar este comando")
        let channeltype = arg[0];
        let channelname = arg[1];
        if(!channeltype || !channelname) return msg.reply("Forneça um tipo e nome válidos para criar um novo canal")
        if(channeltype == "text") return msg.guild.createChannel(channelname, {type: 'text'})
        if(channeltype == "voice") return msg.guild.createChannel(channelname, {type: 'voice'})
        else return msg.reply("Você forneceu um tipo inválido de canal.")
        msg.channel.send(`Um canal novo acaba de ser criado ele se chama: ${channelname}`)
    }
}
