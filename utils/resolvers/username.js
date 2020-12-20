const Discord = require("discord.js")
Discord.DiscordMenu = require("./../../utils/DiscordMenu")
const { userResolver } = require("./../../utils/resolvers/user.js")
const userOrMemberRegex = /^(?:<@!?)?(\d{17,19})>?$/
var _ = require('lodash');

async function usernameResolver(message, username){
  var regExpEsc = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  if (!message.guild)
    return userResolver(username);
  const resUser = await resolveUser(username, message.guild);
  if (resUser) return resUser;

  const results = [];
  const reg = new RegExp(regExpEsc(username), "i");
  for (const member of message.guild.members.cache.values()) {
    if (reg.test(member.user.username)) {
      results.push(member.user);
    } else if (reg.test(member.nickname)) {
      results.push(member.user);
    }
  }

  let querySearch;
  if (results.length > 0) {
    const regWord = new RegExp(`\\b${regExpEsc(username)}\\b`, "i");
    const filtered = results.filter((user) => regWord.test(user.username));
    querySearch = filtered.length > 0 ? filtered : results;
  } else {
    querySearch = results;
  }

  switch (querySearch.length) {
    case 0:
      throw new Error(
        `Não consegui encontrar nenhum usuário que correspondesse aos critérios fornecidos para ${username}. Certifique-se de fornecer um nome de usuário, apelido, menção ou id válido.`
      );
    case 1:
      return querySearch[0];
    default:
      return await new Promise(async (resolve, reject) => {
        var children = [];
        var _children = [];
        var children2 = [];
        var childrenMain = [];
        querySearch.forEach((option) => {
          children.push(option);
          childrenMain.push(option);
        });

        // Now, break the roles up into groups of 10 for pagination.
        while (children.length > 0) {
          _children.push(children.shift());
          if (_children.length > 9) {
            children2.push(_.cloneDeep(_children));
            _children = [];
          }
        }
        if (_children.length > 0) {
          children2.push(_.cloneDeep(_children));
        }

        const menu = new Discord.DiscordMenu(
          message.channel,
          message.author.id,
          children2.map((group) => {
            var groupEmbed = new Discord.MessageEmbed()
              .setAuthor(
                `${message.author.tag}`,
                `${message.author.displayAvatarURL({ dynamic:true })}`
              )
              .setTitle(`Vários usuários encontrados!`)
              .setDescription(
                `Vários usuários corresponderam ao nome "**${username}**". Use o menu para localizar o usuário a que se refere e digite o nome dele em uma mensagem.`
              )
              .setColor(`#8800FF`)
              .setFooter(`User ID: ${message.author.id}`)
              .setTimestamp();
            group.map((child) => {
              groupEmbed.addField(child.username, `ID: ${child.id}`);
            });
            return groupEmbed;
          }),
          childrenMain.map((child) => {
            return {
              message: child.username,
              fn: (senderMessage) => {
                senderMessage.delete();
                return resolve(child);
              },
            };
          })
        );
      });
  }
}

function resolveUser(query, guild) {
  if (query instanceof Discord.GuildMember) return query.user;
  if (query instanceof Discord.User) return query;
  if (typeof query === "string") {
    if (userOrMemberRegex.test(query))
      return guild.client.users
        .fetch(userOrMemberRegex.exec(query)[1])
        .catch(() => null);
    if (/\w{1,32}#\d{4}/.test(query)) {
      const res = guild.members.cache.find(
        (member) => member.user.tag === query
      );
      return res ? res.user : null;
    }
  }
  return null;
}

exports.usernameResolver = usernameResolver
