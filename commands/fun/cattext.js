const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../JSON/utils.js');

module.exports = {
    name: "cattext",
    category: "fun",
  description: "envia material de texto waifu anime bonito owo nya",
  usage: "[command]",
  run: async (client, message, args) => {
  //comando

    async function work() {

        let owo = (await neko.sfw.catText());
        message.channel.send(owo.cat).catch(error => {
            console.error(error);
        });

      }

      work();
  }
  }
