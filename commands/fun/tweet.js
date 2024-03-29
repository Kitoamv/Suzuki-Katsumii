const Discord = module.require("discord.js");
const Jimp = require("jimp");
const fs = require("fs");
const Moment = require("moment-timezone");

module.exports = {
    name: "tweet",
    aliases: [],
    cooldown: 27.5,
    category: "fun",
    description: "Cria um tweet de Donald Trump",
    run: async (client, message, args) => {
  if (args.length >= 1) {
    Jimp.read("https://igorkowalczyk.github.io/majobot/lib/img/trump.png").then(function (image) {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // load font from .fnt file
          image.quality(84)                 // set JPEG quality
          image.print(font, 43, 107, args.join(" "), 601);        // print a message on an image

          let outputfile = "./output/" + Math.random().toString(36).substr(2, 5) + "tweet." + image.getExtension(); // create a random name for the output file
          image.write(outputfile, function () {
            // upload file
            message.channel.send({file: outputfile}).then(function () {
              // delete file
              fs.unlink(outputfile);
            });
          });
      });
    }).catch(function (err) {
        // handle an exception
    });
  } else {
  	        return message.channel.send({embed: {
            color: 16734039,
            title: "Por favor, digite uma mensagem!"
        }})
  }
}
}
