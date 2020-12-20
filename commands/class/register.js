module.exports = {
    name: 'register',
    description: 'Inscreva-se em um curso existente e seja lembrado dos prazos e horários das aulas',
    run: async (client, msg, arg) => {
        msg.channel.send("Inscreva-se em uma classe existente para receber lembretes!");
    }
}
