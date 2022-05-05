import { MessageEmbed } from 'discord.js'

// Here we're gonna create a function which will give you a pre-built embed message

export const getEmbed = (title: string, description: string, color: number) => {
    return new MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setURL('https://discord.js.org/')
        .setAuthor({
            name: 'Testing dayon~',
            iconURL: 'https://i.imgur.com/AfFp7pu.png',
            url: 'https://discord.js.org'
        })
        .setDescription(description)
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true }
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp(new Date())
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
}
