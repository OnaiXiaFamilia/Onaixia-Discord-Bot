import { Discord, SimpleCommand, SimpleCommandMessage } from 'discordx'
import axios from 'axios'

@Discord()
export class FunCommands {
    @SimpleCommand('hug', { aliases: ['h'] })
    async hug(command: SimpleCommandMessage) {
        const mentions = command.message.mentions.members?.map((m) => m)
        const caption = mentions
            ? `${command.message.member} hugs ${mentions[0]}`
            : `${command.message.member} hugs Themselves`
        // use axios to fetch an image from the api
        const response = await axios.get<{ url: string }>('https://nekos.life/api/v2/img/hug')

        // send the image to the channel
        command.message.channel.send({
            files: [response.data.url],
            content: caption
        })
    }
}
