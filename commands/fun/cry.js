const { RichEmbed } = require("discord.js");
const { colors } = require("../../JSON/config.json");
module.exports = {
        name: "cry",
        aliases: ["chorar","lágrimas"],
        description: "Você realmente esta querendo chorar? Vá em frente...",
        category: "fun",
    run: async (client, message, args) => {
      let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

      let gifs = [

"https://media.tenor.com/images/0ccd52ecc3ff22ec498a3bd216792018/tenor.gif?raw=true",
"https://media.tenor.com/images/5fbea42f205b367e119e5d5125704a2d/tenor.gif?raw=true",
"https://media.tenor.com/images/cb1e1460334fdf4af0d439db80aa3ec6/tenor.gif?raw=true",
"https://media.tenor.com/images/14faea11230861e5f61bb4d90ac9e61d/tenor.gif?raw=true",
"https://media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif?raw=true",
"https://media.tenor.com/images/af7f60b79dcaa1c78d92c8c2f2a0e63c/tenor.gif?raw=true",
"https://media1.tenor.com/images/e69ebde3631408c200777ebe10f84367/tenor.gif?raw=true",
"https://media.tenor.com/images/c9fdb6e3ab914d5b195b11ebd99524d0/tenor.gif?raw=true",
"https://media.tenor.com/images/7cba9943d6449423bd9da78929bf6337/tenor.gif?raw=true",
"https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif?raw=true",
"https://media.tenor.com/images/94d6d0cee0ba91393ccbc443ef9276f2/tenor.gif?raw=true",
"https://media.tenor.com/images/315b2b6e191de690b611cbcb95924607/tenor.gif?raw=true",
"https://media.tenor.com/images/d571f86a5adcb4545444e9d1dc4638f9/tenor.gif?raw=true",
"https://media.tenor.com/images/ecc5218e70e32f08707dba330362784d/tenor.gif?raw=true",
"https://media.tenor.com/images/9bb8c9b555323d9c310cf62f5ec6d761/tenor.gif?raw=true",
"https://media.tenor.com/images/d1f58036dc913226eddffc4af563894e/tenor.gif?raw=true",
"https://media.tenor.com/images/9ee03c5f29aa8ee30dfbf95dea30d1d0/tenor.gif?raw=true",
"https://media.tenor.com/images/54197ddab25df9ae2c305dfe12b0bea9/tenor.gif?raw=true",
"https://media.tenor.com/images/5b0f5b170b95c1169a5285d54dda0b3f/tenor.gif?raw=true",
"https://media.tenor.com/images/c6abb45ff7e432c93b81695d791cceff/tenor.gif?raw=true",
"https://media.tenor.com/images/873f6f77948bbfd24c7b3b670638c799/tenor.gif?raw=true",
"https://media.tenor.com/images/c9190cbc861beb8aa1dee4d22067a758/tenor.gif?raw=true",
"https://media.tenor.com/images/3dd852682da448a4acffee4bd8260d22/tenor.gif?raw=true",
"https://media.tenor.com/images/bb9f1270b8f7a7be28c4b01a800755b2/tenor.gif?raw=true",
"https://media.tenor.com/images/eac8a7b4a0e7c468a31274b80c3958a1/tenor.gif?raw=true",
"https://media.tenor.com/images/39daafb7088f5476cf49fd52571dfe6e/tenor.gif?raw=true",
"https://media.tenor.com/images/807443120261b70e717eb5444f517764/tenor.gif?raw=true",
"https://media.tenor.com/images/c369e84ec8510164bdd4c086ec79389d/tenor.gif?raw=true",
"https://media.tenor.com/images/6be2160241404d75ddc88742c90d95e2/tenor.gif?raw=true",
"https://media.tenor.com/images/2072d7de476d1dfe2659a4a4c3ead13c/tenor.gif?raw=true",
"https://media.tenor.com/images/11bfcd1c0f4fc4fc8cb886e5f749e50c/tenor.gif?raw=true",
"https://media.tenor.com/images/232941fea8b59fcae3b81f209bf69d5f/tenor.gif?raw=true",
"https://media.tenor.com/images/0ab4516e416eb42668e56789b3cae132/tenor.gif?raw=true",
"https://media.tenor.com/images/e77ece4a4740b32feb96a7caa434913e/tenor.gif?raw=true",
"https://media.tenor.com/images/e69c199a43ac2b72d6b8a1e2b90d4ec1/tenor.gif?raw=true",
"https://media.tenor.com/images/797b3838cfcdd0c4d4601eba87b7761c/tenor.gif?raw=true",
"https://media.tenor.com/images/350e3bcf7a189f80079d90b115d0a4b1/tenor.gif?raw=true",
"https://media.tenor.com/images/76fb8919364ee089a0b9686fe92f53fd/tenor.gif?raw=true",
"https://media.tenor.com/images/b261321eff758fb664ea6ff110fec20a/tenor.gif?raw=true",
"https://media.tenor.com/images/9b83bf4d36f75966d3c1af47a446d469/tenor.gif?raw=true",
"https://media.tenor.com/images/dbc7819266d6d4c1a859caf43caf71b8/tenor.gif?raw=true",
"https://media.tenor.com/images/2f7b207d8d939f3d1b8b973e8df339eb/tenor.gif?raw=true",
"https://media.tenor.com/images/0c3df129be30daf136f34255a03b1f62/tenor.gif?raw=true",
"https://media.tenor.com/images/94d6d0cee0ba91393ccbc443ef9276f2/tenor.gif?raw=true"

      ];

      let gif = gifs[Math.floor(Math.random()*gifs.length)];

      if(!killed){
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está realmente chorando...`)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)
          message.channel.send(killembed);
      } else {
          let killembed = new RichEmbed()
          .setColor("RAMDOM")
          .setDescription(`${message.author} está chorando porque ${killed} falou algo bem triste`)
          .setImage(gif)
          .setFooter("GIF compartilhado através do tenor.com", client.user.displayAvatarURL)

          await(1000);
          message.channel.send(killembed);
      }
  }
}
