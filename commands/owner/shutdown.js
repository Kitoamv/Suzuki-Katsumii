module.exports = {
    name: "shutdown",
    aliases: ["desligar"],
    category: "owner",
    description: "Este comando desliga o bot.",
    usage: "<prefix>shutdown",
    run: async (client, message, args) => {
      message.delete();
      if (message.author.id !== '287024484630659073') return message.reply("Você claramente não é adequado(a) para usar este comando!")
      const msg = await message.channel.send('Estou me Auto-Desligando :)');

  		try{
  			process.exit();
  		}
  		catch(e) {
  			client.error(e, true, msg);
  		}
  	},
  };
