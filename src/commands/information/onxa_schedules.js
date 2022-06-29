const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("schedules")
    .setDescription("Joqnix's Stream Schedule stuff dayo"),

  async execute(interaction, client) {
    const exampleEmbed = {
      color: 0x0099ff,
      title: "Some title",
      url: "https://discord.js.org",
      author: {
        name: "Some name",
        icon_url: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org",
      },
      description: "Some description here",
      thumbnail: {
        url: "https://i.imgur.com/AfFp7pu.png",
      },
      fields: [
        {
          name: "Regular field title",
          value: "Some value here",
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: false,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
      ],
      image: {
        url: "https://i.imgur.com/AfFp7pu.png",
      },
      timestamp: new Date(),
      footer: {
        text: "Some footer text here",
        icon_url: "https://i.imgur.com/AfFp7pu.png",
      },
    };
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};

// {

//     "content": "⬜​​​​​​​​​​​​​​​​​🟪🟫:regional_indicator_s::regional_indicator_t::regional_indicator_r::regional_indicator_e::regional_indicator_a::regional_indicator_m:🟥🟧:regional_indicator_s::regional_indicator_c::regional_indicator_h::regional_indicator_e::regional_indicator_d::regional_indicator_u::regional_indicator_l::regional_indicator_e:🟨🟩​⬛",
//         "embeds";
//   [
//     {
//       "color": 16711680,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`06/26 17:00 IST` / <t:1656243000:F> / <t:1656243000:R>\n🎋🌟🌠 `JoqniX`︲[【Fall Guys】✦ Being wohooo w/ZucciAgasura & Familia~](https://youtu.be/3FIxfRrRVc4)"
//         }
//       ],
//       "footer": {
//         "text": "🔴︲Youtube",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-06-26T11:30:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990349418442129428/zucci_fall_guys_collab.png"
//       }
//     },
//     {
//       "color": 9520895,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`06/27 18:00 IST` / <t:1656333000:F> / <t:1656333000:R>\n🎋🌟🌠 `JoqniX`︲[【Coding】✦ learning how to code a discord bot~ so i can do alot of stuffo~ #3](https://twitch.tv/joqnix)"
//         }
//       ],
//       "footer": {
//         "text": "🟣︲Twitch",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-06-27T12:30:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990358394294632518/joccy_work_stream_think.png"
//       }
//     },
//     {
//       "color": 16711680,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`06/28 18:30 IST` / <t:1656421200:F> / <t:1656421200:R>\n🎋🌟🌠 `JoqniX`︲[【Borderlands 3】#2 ✦ pew pewing as a vault hunter ~\n](https://youtu.be/3cMvnJS0Pws)"
//         }
//       ],
//       "footer": {
//         "text": "🔴︲Youtube",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-06-28T13:00:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990363326619987968/borderlands_3.png"
//       }
//     },
//     {
//       "color": 9520895,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`06/29 17:00 IST` / <t:1656502200:F> / <t:1656502200:R>\n🎋🌟🌠 `JoqniX`︲[【Coding】✦ learning how to code a discord bot~ so i can do alot of stuffo~ #4](https://twitch.tv/joqnix)"
//         }
//       ],
//       "footer": {
//         "text": "🟣︲Twitch",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-06-29T11:30:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990358394294632518/joccy_work_stream_think.png"
//       }
//     },
//     {
//       "color": 16711680,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`06/30 18:00 IST` / <t:1656592200:F> / <t:1656592200:R>\n🎋🌟🌠 `JoqniX`︲[【Elden Ring】#8 ✦ touching the graceful sight of .w.~](https://youtu.be/StloxlCa8b0)"
//         }
//       ],
//       "footer": {
//         "text": "🔴︲Youtube",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-06-30T12:30:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990365013275443351/elden_ring_uwuwuwu.jpeg"
//       }
//     },
//     {
//       "color": 9520895,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`07/01 17:30 IST` / <t:1656676800:F> / <t:1656676800:R>\n🎋🌟🌠 `JoqniX`︲[【Working】✦ working on triggers for stream w/chatto~](https://twitch.tv/joqnix)"
//         }
//       ],
//       "footer": {
//         "text": "🟣︲Twitch",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-07-01T12:00:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990358394294632518/joccy_work_stream_think.png"
//       }
//     },
//     {
//       "color": 16711680,
//       "fields": [
//         {
//           "name": "[U+200E]",
//           "value": "`07/02 18:00 IST` / <t:1656765000:F> / <t:1656765000:R>\n🎋🌟🌠 `JoqniX`︲[【GTA V】#7 ✦ Yare Yare~ imma be a delinquent reckless .w. gaki~\n](https://youtu.be/KGhcMjNaNSE)"
//         }
//       ],
//       "footer": {
//         "text": "🔴︲Youtube",
//         "icon_url": "https://media.discordapp.net/attachments/990349330693095425/990350379759853598/download_8.png"
//       },
//       "timestamp": "2022-07-02T12:30:00.000Z",
//       "thumbnail": {
//         "url": "https://cdn.discordapp.com/attachments/990349330693095425/990366071817125908/gta_v.png"
//       }
//     },
//     {
//       "title": "︲『✦』|『 Week of Jun 26 - Jul 02 』",
//       "color": null,
//       "footer": {
//         "text": "Stream Schedule of JoqniX",
//         "icon_url": "https://cdn.discordapp.com/attachments/990349330693095425/990350346129899560/OnaixiaAvatar.png"
//       },
//       "timestamp": "2022-06-25T23:00:00.000Z",
//       "image": {
//         "url": "https://cdn.discordapp.com/attachments/889683199947571230/990347996732485662/unknown.png"
//       }
//     }
//     ]

// }
