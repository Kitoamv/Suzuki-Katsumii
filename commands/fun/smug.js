const client = require("nekos.life");
const neko = new client();

module.exports = {
      name: "smug",
      aliases: ["presunçoso","convencido"],
      description: "Você está tão cheio de sí ein",
      usage: "",
      category: "fun",
  run: async (client, message, args) => {
      let smug = await neko.sfw.smug();
      message.channel.send(smug.url);

      return;
  }
}
