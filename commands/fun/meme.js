let request = require("request-promise-native");
let cheerio = require("cheerio");

module.exports = {
    name: "meme",
    aliases: ["memes", "plsmeme"],
    category: "fun",
    description: "Get a random meme",
    permissions: "member",
    run: async (client, message, arg) => {
      request("https://some-random-api.ml/meme", function(error, response, body) {
        let data = JSON.parse(body);
        console.log(data);
        message.channel.send({
          embed: {
            color: 3447003,
            fields: [
              {
                name: "Caption",
                value: data.caption
              },
              {
                name: "Category",
                value: data.category
              }
            ],
            image: {
              url: data.image
            }
          }
        });
      });
    }
  };
