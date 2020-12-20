module.exports = {
  name: "nick",
  category: "misc",
  description: "troque ou remove o seu nickname",
  usage: "<id | mention>",
  run: async (client, message, args) => {
    const nick = args.join(' ')

    if (!nick) return message.member.setNickname('')
    message.guild.members.map(member => {
      if (nick.toLowerCase() === member.user.username.toLowerCase()) {
        return message.channel.send(message, "You can't take that name")
      }
    })
    return message.member.setNickname(nick)
  }
}
