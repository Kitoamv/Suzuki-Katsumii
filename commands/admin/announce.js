module.exports = {
    name: "announce",
    aliases: ["ann"],
    category: "admin",
    description: "Silencia todos os outros usuários, permitindo um anúncio de 15 segundos e silencia todos.",
    usage: "[comando | alias]",
    run: async (client, message, args) => {
        const actualVoiceChannel = message.member.voiceChannel
        if(!actualVoiceChannel){
             return message.channel.send(`Você não está em um canal de voz!`)
        }
        else {
            if(!message.member.hasPermission('MUTE_MEMBERS'))
            {
                return message.channel.send(`Você não tem permissão para silenciar outros membros!`)
            }
            else {
                if (!message.member.hasPermission('CONNECT')) {
                    return message.channel.send('Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões adequadas!')
                }
                if (!message.member.hasPermission('MUTE_MEMBERS')) {
                    return message.channel.send(`Não tenho permissões para silenciar outros membros!`)
                }
                actualVoiceChannel.join().then(connection => {
                    for (let member of actualVoiceChannel.members) {
                        member[1].setMute(true)
                    }
                    message.member.setMute(false)
                    message.channel.send(`Você solicitou fazer um anúncio, você pode falar agora.`)
                    client.setTimeout(function(){
                        for (let member of actualVoiceChannel.members) {
                            member[1].setMute(true)
                        }
                        actualVoiceChannel.leave()
                        return message.channel.send(`O anúncio terminou, todos podem falar agora.`)
                    }, 15000)

                }).catch(err => console.log(err.message))
            }
        }
    }
}
