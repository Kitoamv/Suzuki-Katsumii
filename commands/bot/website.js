module.exports = {
  name: "website",
  aliases: ["site"],
  category: "bot",
  description: "Receba o website oficial do bot",
  run: async (client, message, args) => {
        message.channel.send(`https://suzukikatsumi.wixsite.com/suzuki`)
	},
};
