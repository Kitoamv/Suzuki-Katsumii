const Discord = require("discord.js");

module.exports = {
    name: "rolelist",
    category: "roles",
    description: "Returns a list of server roles",
    run: async (client, msg, arg) => {
        const role = msg.guild.roles;
        const embed = new Discord.RichEmbed()
            .setColor ("RANDOM")
            .addField("Server Roles", role.map((e) => e).join("\n"))
        msg.channel.send({embed})

    }
}
