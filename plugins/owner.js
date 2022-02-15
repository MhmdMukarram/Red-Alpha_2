const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/GsjY7fC/Whats-Alexa.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ʀᴇᴅ ᴀʟᴘʜᴀ ɪꜱ ᴛʜᴇ ᴄʜɪɴᴛᴜ ʙᴏᴛ ᴏᴡɴᴇʀ *

*Cʀᴇᴀᴛᴇʀ number : wa.me/94740979220?text=Hi%20Red_Alpha%20bro.%20*


 *𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰 𝚆𝙰 chat group 1 : https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*
     
 *𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰 𝚆𝙰 chat group 2 : https://chat.whatsapp.com/E9ISyKEuxKz2pCP5Qz8igM*

 *𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰 𝚆𝙰 chat group 3 : https://chat.whatsapp.com/KS9MRCiMF9pFri4aLfLyVE*

 *Gɪᴛ Lɪɴᴋ : https://github.com/MhmdMukarram/CHINTU-BOT*

 *𝙲𝙷𝙸𝙽𝚃𝚄 © ༒︎𝚁𝙴𝙳 𝙰𝙻𝙿𝙷𝙰༒︎*
`}) 

}));
