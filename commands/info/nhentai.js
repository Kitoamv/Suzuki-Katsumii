module.exports = {
  name: "nhentai",
  category: "info",
  description: "Um comando que gera um link nhentai aleatório e o envia no chat",
  usage: "<prefix>nhentai",
    run: async (client, message, args) => {
        let baseurl = "https://nhentai.net/g/";
        let sauce = Math.floor(Math.random() * 300000) + 1;
        message.channel.send("Gerando Link...").then(msg => {
            msg.edit(`URL Gerado! \n${baseurl}${sauce}`);
        });
        return;
    }
}
