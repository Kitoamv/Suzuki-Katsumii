const Discord = require("discord.js");
const convert = require("parse-ms");

module.exports = {
name: "spotify",
  category: "utils",
  description: "está se perguntando o que aquele membro está ouvindo no spotify? Rode isto :D\nisso funciona em você também",
  usage: "spotify [@user]",
  example: ["spotify @bell#9999", "spotify"],
  run: async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let status;
    if (user.presence.activities.length === 1) status = user.presence.activities[0];
    else if (user.presence.activities.length > 1) status = user.presence.activities[1];

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
        return message.reply("aquele usuário não está ouvindo o Spotify :(");
    }

    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
            url = `https:/open.spotify.com/track/${status.syncID}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText,
            timeStart = status.timestamps.start,
            timeEnd = status.timestamps.end,
            timeConvert = convert(timeEnd - timeStart);

        let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
        let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
        let time = `${minutes}:${seconds}`;

        const embed = new Discord.MessageEmbed()
        .setAuthor("Spotify", "https://i.pinimg.com/originals/1d/f4/6e/1df46e5b59ceaf54b63302e95644fd80.png")
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setColor(0x1ED768)
        .setThumbnail(image)
        .addField("Nome:", name, true)
        .addField("Album:", album, true)
        .addField("Artista:", artist, true)
        .addField("Duração:", time, false)
        .addField("Ouça agora no Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
        return message.channel.send(embed)
    }
}
}
