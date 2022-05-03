const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({ intents: 513 });

client.on('ready', () => {
    console.log('The Bot is now online!');
    client.user.setActivity('slash commands!', { type: 'PLAYING' });
    client.user.setPresence({ activities: [{ name: 'with discord.js' }], status: 'idle' });
});


client.on('messagecreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})



client.login(process.env.TOKEN)
