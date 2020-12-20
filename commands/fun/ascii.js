var figlet = require('figlet');
const utils = require('../../JSON/utils.js');

module.exports = {
  name: "ascii",
  category: "fun",
description: "Converte informações de texto ASCII",
usage: "[command | your text]",
run: async (client, message, args) => {
// Código do Comando //
var maxLen = 100

  if(args.join(' ').length > maxLen) return message.channel.send(`O comprimento máximo é ${maxLen}!`)

  if(!args[0]) return message.channel.send('Digite algum texto.');

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('k...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}
}
