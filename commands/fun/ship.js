const Discord = require("discord.js");

module.exports = {
    name: "ship",
    category: "fun",
    description: "Ship 2 members",
    usage: "<name1> <name2>",
    run: async (client, msg, arg) => {
        let user1 = arg[0];
        let user2 = arg.slice(1).join(' ');
        if (!user1 || !user2) return msg.channel.send("Digite 2 membros para enviar")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship <= 49) {
                    const badmatch = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(user1 + " e " + user2 + " não combinam muito bem")
                    .setDescription(":broken_heart: " + ship + "% :broken_heart:");
                    msg.channel.send(badmatch);
           } else if (ship >= 90) {
                const perfectmatch = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(user1 + " e " + user2 + " são feitos um para o outro")
                    .setDescription(":heartpulse: " + ship + "% :heartpulse:");
                    msg.channel.send(perfectmatch);
           } else {
               const match = new Discord.RichEmbed()
                    .setColor(0x00A2E8)
                    .setTitle(user1 + " e " + user2 + " combinam muito bem")
                    .setDescription(":heart: " + ship + "% :heart:");
                    msg.channel.send(match);
            }
    }
}
