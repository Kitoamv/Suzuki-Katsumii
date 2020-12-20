const Discord = require("discord.js");

module.exports = {
    name: "broadcast",
    aliases: ["bc"],
    category: "admin",
    description: "Mensagem para algum tipo de transmissão!!",
    usage: "<title> <description>",
    permission: "ADMINISTRATOR",
    run: async (client, msg, arg) => {
        msg.delete();

        let author = msg.author

        var filter = m => m.author.id === msg.author.id;
        var title;
        var description;

        const nobotpermEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Eu não tenho permissão para fazer isso! Por favor, verifique minhas permissões.`)
        const nopermEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Você não tem permissão para usar isso!`)
        const nochannelEmbed = new Discord.RichEmbed()
            .setColor(`RED`)
            .setTitle(`⛔ Canal de transmissão não encontrado!`)

        if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply(nopermEmbed).then(msg => msg.delete(5000));

        const titleembed = new Discord.RichEmbed()
            .setColor('GREEN')
            .setTitle("🔴Broadcast")
            .setDescription("Digite o título:")
            .setFooter('max 256 characters')
        const descriptionembed = new Discord.RichEmbed()
            .setColor('GREEN')
            .setTitle("🔴Broadcast")
            .setDescription("Agora digite a descrição:")
            .setFooter('max 2048 characters')
        const timeembed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle("🔴 Broadcast")
            .setDescription("FORA DO TEMPO!")

        msg.channel.send(titleembed)

            .then(msg => {//collect title
            msg.channel.awaitMessages(filter, {max: 1,time: 60000,errors: ['time']})
                .then(collected => {
                title = collected.first().content
                collected.first().delete();
                msg.edit(descriptionembed)

                    .then(msg => {//collect description
                    msg.channel.awaitMessages(filter, {max: 1,time: 60000,errors: ['time']})
                        .then(collected => {
                        description = collected.first().content;
                        collected.first().delete();
                        msg.delete();

                            try {//send broadcast
                                let bcEmbed = new Discord.RichEmbed()
                                    .setTitle(title)
                                    .setDescription(description)
                                    .setColor("#00ff00")
                                    .setAuthor(author.username, author.displayAvatarURL)
                                let bcchannel = msg.guild.channels.find(bcchannel => bcchannel.name === "🔴broadcast");
                                if(!bcchannel) return msg.channel.send(nochannelEmbed).then(msg => msg.delete(5000));
                                bcchannel.send("@everyone");
                                bcchannel.send(bcEmbed);
                                }

                                catch(err) {//bot no perm error
                                msg.channel.send(nobotpermEmbed).then(msg => msg.delete(5000));
                                console.log(err);
                                }

                        }).catch(err => {//title time error
                            msg.edit(timeembed);
                            msg.delete(5000);
                            console.log(err);
                            });
                    }).catch(err => console.log(err));

                }).catch(err => {//description time error
                    msg.edit(timeembed);
                    msg.delete(5000);
                    console.log(err);
                    });
            }).catch(err => console.log(err));
    }
}
