const request = require("request");

module.exports = {
  name: "bitcoin",
  aliases: ["bcoin"],
  category: "info",
  description: "Mostra o valor do bitcoin em dolares",
  run: async (client, message, args) => {
	request("https://api.coindesk.com/v1/bpi/currentprice.json", (error, response, body) => {
		if (error) {
			message.channel.send(`Error: ${error}`);
		}
		else {
			let bitcoinJSON = JSON.parse(body);
			message.channel.send("O **Bitcoin** está exatamente : $" + bitcoinJSON.bpi.USD.rate + " **No Valor do dolar**");
		}
	});
}
}
