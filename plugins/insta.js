const skl = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const setting = require('../config');
const get = require('../buffer');
const insta = require('../insta_scrap');
const Config = require('../config');
const need = "_Need instagram link!_*";
const need_acc = "_Need an instagram username!_*";
let sourav = setting.WORKTYPE == 'public' ? false : true
skl.addCommand({ pattern: 'insta ?(.*)', fromMe: sourav,dontAddCommandList: true }, (async (msg, query) => {
    if (query[1] === '') return await msg.client.sendMessage(msg.jid, need, MessageType.text, {quoted: msg.data});
    if (!query[1].includes('instagram.com')) return await msg.client.sendMessage(msg.jid, need, MessageType.text, {quoted: msg.data});
    var res = await insta.getPost(query[1])
    var buffer = await get.skbuffer(res.links[0].url)
    if (res.links[0].url.includes('mp4')) return await msg.client.sendMessage(msg.jid, buffer, MessageType.video, { mimetype: Mimetype.mp4, caption: '_Caption:_ ' + `${res.caption}` + '\n\n _Username:_ *' + `${res.username}` + '*\n _Name:_ *' + `${res.name}` + '*\n _Likes:_ *' + `${res.likes}` + '*\n _Comments:_ *' + `${res.comment_count}` + '*', quoted: msg.data});
    if (res.links[0].url.includes('jpg')) return await msg.client.sendMessage(msg.jid, buffer, MessageType.image, { mimetype: Mimetype.jpg, caption: '_Caption:_ ' + `${res.caption}` + '\n\n _Username:_ *' + `${res.username}` + '*\n _Name:_ *' + `${res.name}` + '*\n _Likes:_ *' + `${res.likes}` + '*\n _Comments:_ *' + `${res.comment_count}` + '*', quoted: msg.data});
    }));
skl.addCommand({ pattern: 'ig ?(.*)', fromMe: sourav,dontAddCommandList: true }, (async (msg, query) => {
    if (query[1] === '') return await msg.client.sendMessage(msg.jid, need_acc, MessageType.text, {quoted: msg.data});
    var res = await insta.getStalk(query[1])
    var buffer = await get.skbuffer(res.user.profile_pic_url)
    await msg.client.sendMessage(msg.jid, buffer, MessageType.image, { mimetype: Mimetype.jpg, caption: '_Name:_ ' + `${res.user.full_name}` + '\n _Bio:_ *' + `${res.user.biography}`+ '*\n _Private acc:_ *' + `${res.user.is_private} ` + '\n _Followers:_ *' + `${res.user.follower_count}` + '*\n _Following:_ *' + `${res.user.following_count}` + '*\n _Posts:_ *' + `${res.user.media_count}` + '*\n _Verified:_ *' + `${res.user.is_verified} ` + '*\n _IGTV videos:_ *' + `${res.user.total_igtv_videos} ` + '*', quoted: msg.data});
    }));
