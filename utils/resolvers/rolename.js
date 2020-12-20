const Discord = require("discord.js")
Discord.DiscordMenu = require("./../DiscordMenu")
const roleRegex = /^(?:<@&)?(\d{17,19})>?$/


async function roleNameResolver(message, roleName) {
    var regExpEsc = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

    if (!message.guild)
      throw new Error(
        `Inválido: argumentos de nome de papel não podem ser usados ​​fora de uma guilda.`
      );
    const resRole = resolveRole(roleName, message.guild);
    if (resRole) return resRole;

    const results = [];
    const reg = new RegExp(regExpEsc(roleName), "i");
    for (const role of message.guild.roles.cache.values()) {
      if (reg.test(role.name)) results.push(role);
    }

    let querySearch;
    if (results.length > 0) {
      const regWord = new RegExp(`\\b${regExpEsc(roleName)}\\b`, "i");
      const filtered = results.filter((role) => regWord.test(role.name));
      querySearch = filtered.length > 0 ? filtered : results;
    } else {
      querySearch = results;
    }

    switch (querySearch.length) {
      case 0:
        throw new Error(
          `Não consegui encontrar nenhuma função correspondente ${possible.name}.`
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

          // Agora, divida as funções em grupos de 10 para paginação.
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
                .setTitle(`Múltiplas funções encontradas!`)
                .setDescription(
                  `Várias funções combinaram com o nome **${possible.name}**. Use o menu para descobrir a qual função você se refere e digite seu nome em uma mensagem.`
                )
                .setColor(`#8800FF`)
                .setFooter(`User ID: ${message.author.id}`)
                .setTimestamp();
              group.map((child) => {
                groupEmbed.addField(child.name, `ID: ${child.id}`);
              });
              return groupEmbed;
            }),
            childrenMain.map((child) => {
              return {
                message: child.name,
                fn: (senderMessage) => {
                  senderMessage.delete();
                  return resolve(child);
                },
              };
            })
          );
        });
    }

function resolveRole(query, guild) {
  if (query instanceof Discord.Role)
    return guild.roles.has(query.id) ? query : null;
  if (
    typeof query === "string" &&
    roleRegex.test(query)
  )
    return guild.roles.resolve(
      roleRegex.exec(query)[1]
    );
  return null;
}
}

exports.roleNameResolver = roleNameResolver
