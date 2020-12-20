const Discord = require("discord.js");

module.exports = {
name: "binary",
  description: "converter texto em binário ou de outra forma.",
  category: "utils",
  usage: "binary <encode | decode> <text>",
  example: "binary encode i love you",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Parâmetro desconhecido. Escolha o método primeiro, decodifique ou codifique.");

    let choice = ["encode", "decode"];
    if (!choice.includes(args[0].toLowerCase())) return message.channel.send("Parâmetro desconhecido. Escolha o método primeiro, decodifique ou codifique.");

    let text = args.slice(1).join(" ");


    if (!text) return message.channel.send("por favor insira algum texto :D");

    // Do this because more than that, the binary code wouldn't be fit anymore.
    if (text.length > 1024) return message.channel.send("uau, isso é demais. o caractere máximo é 1.024.");

    function encode(char) {
        return char.split("").map(str => {
            const converted = str.charCodeAt(0).toString(2);
            return converted.padStart(8, "0");
        }).join(" ")
    };

    function decode(char) {
        return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
    };

    if (args[0].toLowerCase() === "encode") {
        return message.channel.send(encode(text));
    } else if (args[0].toLowerCase() === "decode") {
        return message.channel.send(decode(text));
    }
}
}
