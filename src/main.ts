import 'reflect-metadata'
import { Intents, Interaction, Message } from 'discord.js'
import { Client } from 'discordx'
import { importx } from '@discordx/importer'
import 'dotenv/config'

export const client = new Client({
    simpleCommand: {
        prefix: '!'
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)]
})

client.once('ready', async () => {
    await client.guilds.fetch()

    await client.initApplicationCommands({
        guild: { log: true },
        global: { log: true }
    })
    await client.initApplicationPermissions(true)

    console.log('Bot started')
})

client.on('interactionCreate', (interaction: Interaction) => {
    client.executeInteraction(interaction)
})

client.on('messageCreate', (message: Message) => {
    client.executeCommand(message)
})

async function run() {
    await importx(__dirname + '/{events,commands,api}/**/*.{ts,js}')

    if (!process.env.TOKEN) {
        throw Error('Could not find BOT_TOKEN in your environment')
    }
    await client.login(process.env.TOKEN)
}

run()
