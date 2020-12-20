module.exports = {
    name: "ping",
    category: "info",
    description: "Retorna com uma mensagem mostrando a Latencia e o Ping!",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Ping....`);

        msg.edit(`🏓 Pong!
        Sua Latencia é de ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms
        O Ping pode ser correspondido a ${Math.round(client.ping)}ms`);
    }
}
