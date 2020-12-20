module.exports = {
  name: 'create',
  description: 'Crie um curso que os usuários frequentem e o bot rastreará os prazos dele',
  args: true,
  usage: '<nome do curso + número do curso>',
  run: async (client, msg, arg) => {
      msg.channel.send("Crie um curso para eu acompanhar!");
  }
}
