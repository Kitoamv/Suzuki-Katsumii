const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "prefix",
    aliases: ["setprefix"],
    category: "moderation",
    description: "Altere o prefixo do bot!",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
      if(!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <novo-prefix>");

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

      prefixes[message.guild.id] = {
        prefixes: args[0]
      };

      fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
      });

      let sEmbed = new Discord.RichEmbed()
      .setColor("#FF9900")
      .setTitle("Novo Prefix Configurado!")
      .setDescription(`O Novo Prefixo é: ${args[0]}`);

      message.channel.send(sEmbed);
    }
}
