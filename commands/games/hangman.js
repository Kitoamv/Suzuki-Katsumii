const request = require('node-superfetch');
const { stripIndents } = require('common-tags');
const urban = require('urban');

module.exports = {
    name: 'hangman',
    category: "games",
    description: 'começa um jogo da forca aleatório',
    run: async (client, message, args) => {
        const playing = new Set()
        if (playing.has(message.channel.id)) return message.reply('Apenas um jogo pode estar ocorrendo por canal.');
		playing.add(message.channel.id);
		try {
            urban.random().first(async json => {
                const word = json.word.toLowerCase().replace(/ /g, '-');
                let points = 0;
                let displayText = null;
                let guessed = false;
                const confirmation = [];
                const incorrect = [];
                const display = new Array(word.length).fill('_');
                while (word.length !== confirmation.length && points < 6) {
                    await message.channel.send(stripIndents`
                        ${displayText === null ? 'Aqui vamos nós!' : displayText ? 'Bom Trabalho!' : 'Não!'}
                        \`${display.join(' ')}\`. Qual letra você escolhe?
                        Tentativas Incorretas: ${incorrect.join(', ') || ''}
                        \`\`\`
                        ___________
                        |     |
                        |     ${points > 0 ? 'O' : ''}
                        |    ${points > 2 ? '—' : ' '}${points > 1 ? '|' : ''}${points > 3 ? '—' : ''}
                        |    ${points > 4 ? '/' : ''} ${points > 5 ? '\\' : ''}
                        |
                        ===========
                        \`\`\`
                    `);
                    const filter = res => {
                        const choice = res.content.toLowerCase();
                        return res.author.id === message.author.id && !confirmation.includes(choice) && !incorrect.includes(choice);
                    };
                    const guess = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 50000
                    });
                    if (!guess.size) {
                        await message.reply('Desculpe, o tempo acabou!');
                        break;
                    }
                    const choice = guess.first().content.toLowerCase();
                    if (choice === 'end') break;
                    if (choice.length > 1 && (choice === word)) {
                        guessed = true;
                        break;
                    } else if (word.includes(choice)) {
                        displayText = true;
                        for (let i = 0; i < word.length; i++) {
                            if (word[i] !== choice) continue; // eslint-disable-line max-depth
                            confirmation.push(word[i]);
                            display[i] = word[i];
                        }
                    } else {
                        displayText = false;
                        if (choice.length === 1) incorrect.push(choice);
                        points++;
                    }
                }
                playing.delete(message.channel.id);
                if (word.length === confirmation.length || guessed) return message.reply(`Você venceu! a palavra era ${word}!`);
                return message.reply(`Que pena... a palavra era ${word}...`);
            });
        } catch (err) {
            playing.delete(message.channel.id);
            return message.reply(`Oh não, ocorreu um erro: \`${err.message}\`. Tente mais tarde!`);
        }
    },
};
