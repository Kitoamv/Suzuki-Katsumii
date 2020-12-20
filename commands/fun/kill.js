const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");

module.exports = {
        name: "kill",
        aliases: ["matar"],
        description: "Use este comando para matar alguém!",
        category: "fun",
    run: async (client, message, args) => {
        let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let gifs = [
            "https://media2.giphy.com/media/YI9XujmphRZQI/source.gif?raw=true",
            "https://media.tenor.com/images/bbe419e89683598d4c8ac436cd51f323/tenor.gif?raw=true",
            "https://media.giphy.com/media/yRMK47EIu9D3i/giphy.gif?raw=true",
            "https://media1.tenor.com/images/5cfd8928d972c22fbfbfc3f45ce81ef2/tenor.gif?itemid=13247789?raw=true",
            "https://pa1.narvii.com/5884/3bbd6cb154b78fef603c35fb278eb5485a797dab_hq.gif?raw=true",
            "https://media.giphy.com/media/JJkEcnWTkfqvK/giphy.gif?raw=true",
            "http://67.media.tumblr.com/8998b3e91c6044787810138d0ae97ad9/tumblr_nbyaczjaWq1t6rjfvo1_500.gif?raw=true",
            "https://media1.tenor.com/images/db1136b19969ca0809daffc3d93fc848/tenor.gif?itemid=9983954?raw=true",
            "https://thumbs.gfycat.com/ClassicSpectacularDoe-small.gif?raw=true"
        ];

        let gifs2 = [
            "https://data.whicdn.com/images/310859253/original.gif?raw=true",
            "https://media2.giphy.com/media/WsWJZcJoxmLUk/source.gif?raw=true",
            "http://33.media.tumblr.com/tumblr_lxfqnyYrAX1qio1obo1_500.gif?raw=true",
            "https://steamuserimages-a.akamaihd.net/ugc/916921405365241397/178D0EAA85A91BD538E9C3FD36FEDF37628410D8/?raw=true",
            "https://d.wattpad.com/story_parts/379345073/images/14a79e1459a0bb45184634800226.gif?raw=true",
            "https://thumbs.gfycat.com/EquatorialGleefulArabianhorse-size_restricted.gif?raw=true",
            "https://em.wattpad.com/0263992c6ac8fcb19b6892112ea4260427e37169/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7750756275504b73644a70364f513d3d2d3536343434333930372e313532383634393563636564646132333436323331363633373634322e676966?raw=true"
        ];
        let gif = gifs[Math.floor(Math.random()*gifs.length)];

        let gif2 = gifs2[Math.floor(Math.random()*gifs2.length)];

        if(!killed){
            let killembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} cometeu suicídio`)
            .setImage(gif2)
            .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)
            message.channel.send(killembed);
        } else {
            let killembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} matou ${killed}`)
            .setImage(gif)
            .setFooter("Ativado por tenor.com", client.user.displayAvatarURL)

            await(1000);
            message.channel.send(killembed);
        }
    }
}
