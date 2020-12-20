const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")

module.exports = {
        name: "advice",
        description: "Aqui vai um bom conselho amigo.",
        usage: "<prefix>advice",
        category: "fun",
    run: async (client, message, args) => {
    try {
        		const { body } = await snekfetch.get('http://api.adviceslip.com/advice');
        		message.channel.send(JSON.parse(body.toString()).slip.advice);
        	} catch (err) {
        		message.channel.send(`Um erro ocorreu: \`${err.message}\`. Tente mais tarde!`);
        	}
        }
}
