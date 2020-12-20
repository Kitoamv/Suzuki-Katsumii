const yoMamma = require('yo-mamma').default;

module.exports = {
        name: "yomamma",
        aliases: ["yom"],
        description: "Hello Mamma",
        category: "fun",
    run: async (client, message, args) => {
      let insult = yoMamma();

      message.channel.send(insult);
  }
}
