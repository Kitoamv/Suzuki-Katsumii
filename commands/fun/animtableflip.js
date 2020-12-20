const Discord = require("discord.js");
const bot = new Discord.Client();
const frames = [
	'(-°□°)-  ┬─┬',
	'(╯°□°)╯    ]',
	'(╯°□°)╯  ︵  ┻━┻',
	'(╯°□°)╯       [',
	'(╯°□°)╯           ┬─┬'
];

module.exports = {
        name: "animtableflip",
        description: "JOGA ESSA MESA! TO PUTO DA VIDA",
        usage: "<prefix>animtableflip",
        category: "fun",
    run: async (client, message, args) => {
    const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => {}, 4000);
        await msg.edit(frame);
    }
    return message;
}
}
