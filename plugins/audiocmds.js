const skl = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const Config = require('../config');
 if (Config.WORKTYPE == 'private') {
    skl.addCommand({pattern: 'audio', fromMe: true, desc: 'Gives audio commands' , dontAddCommandList: true }, async (message, match) => {

        
        const cmd = "```Ayin```\n```Ayinu```\n```Bgm```\n```Bot```\n```Bye```\n```Good night```\n```Hello```\n```Hi```\n```Mukarram```\n```Neymar```\n```Pm```\n```RedAlpha```\n```Sed```\n```alive```\n```assist```\n```ban```\n```bgm```\n```bot```\n```converting```\n```fake```\n```fork```\n```fuck```\n```music```\n```myre```\n```njan```\n```number```\n```oombi```\n```owner```\n```poda```\n```remove```\n```reply```\n```sed```\n```subscribe```\n```xxxtentation```";
        const {data} = await axios(`https://gist.github.com/MhmdMukarram/d68fdd4980fd0d08cb9f9741b6d0e082`)
        const { souravkl11 } = data
        await message.client.sendMessage(message.jid, cmd, MessageType.text, { quoted: message.data });
   });
    }
 
if (Config.WORKTYPE == 'public') {
    skl.addCommand({pattern: 'audio', fromMe: false, desc: 'Gives audio commands' , dontAddCommandList: true }, async (message, match) => {

        const cmd = "```Ayin```\n```Ayinu```\n```Bgm```\n```Bot```\n```Bye```\n```Good night```\n```Hello```\n```Hi```\n```Mukarram```\n```Neymar```\n```Pm```\n```RedAlpha```\n```Sed```\n```alive```\n```assist```\n```ban```\n```bgm```\n```bot```\n```converting```\n```fake```\n```fork```\n```fuck```\n```music```\n```myre```\n```njan```\n```number```\n```oombi```\n```owner```\n```poda```\n```remove```\n```reply```\n```sed```\n```subscribe```\n```xxxtentation```";
        const {data} = await axios('https://gist.github.com/MhmdMukarram/d68fdd4980fd0d08cb9f9741b6d0e082')
        const { souravkl11 } = data
        await message.client.sendMessage(message.jid, cmd, MessageType.text, { quoted: message.data });
   });
    }
