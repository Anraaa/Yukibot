///----------( Created By KurrXd )----------\\\

/**
BASE:DENIS
TQ TO:
@Angga
@DcodeDenpa
@Aldy Fauzy
@PAJAR
@kurr
@ADI
@KurrXd
@Finx
* Note:
* Kalau Mau Recode/Reupload Kasih Credit
**/

///--------------------------------------------------------------\\\

const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot.js')
const scrapper = require('./lib/scrapper')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()
const ownerNumber = "6281220670449@s.whatsapp.net"
const { emoji2 } = require('./emoji2')
const { emoji1 } = require('./emoji1')
const dtod = "6281220670449@s.whatsapp.net"
const otod = "6281220670449@s.whatsapp.net"
// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const atm = require("./lib/atm");
const game = require("./lib/game");
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const yts = require( 'yt-search')
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "/> Tato KurrXd";
autorespon = false
playmusic = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
pulsa = settings.Pulsa
dana = settings.Dana
gopay = settings.Gopay
multi = true
nopref = false


// APIKEY
HunterApi = settings.HunterApi
YuzApi = 'Yuzzu'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const gcount = settings.gcount

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = kurr = async (kurr, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        kurr.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        kurr.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = kurr.user
		m = simple.smsg(kurr, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		kurr.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./logonya.jpeg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = kurr.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? kurr.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? kurr.user.jid : kurr.contacts[mek.sender]
        const pushname = mek.key.fromMe ? kurr.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await kurr.chats.all()
		const groupMetadata = isGroup ? await kurr.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		      membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = kurr.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© KurrXdゑ_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             kurr.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = kurr.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `KurrXdゑ`, "footerText": "*_© KurrXdゑ_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            kurr.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await kurr.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply1 = fs.readFileSync('./logonya.jpeg')
		const ofrply2 = fs.readFileSync('./logonya2.jpeg')
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./logonya.jpeg')
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

//kick
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
//pin
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await kurr.relayWAMessage(
        kurr.prepareMessageFromContent(
          target,
          kurr.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
kurr.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `🗿DAFTAR🗿 `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kurr.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await kurr.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kurr.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
kurr.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© KurrXdゑ_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === kurr.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© KurrXdゑ_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		// GAME 
             game.cekWaktuFam(kurr, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                kurr.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					kurr.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        kurr.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer KurrXdゑ\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await kurr.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        kurr.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			kurr.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6349482305092740/6281220670449`}}})
		}
		function monospace(string) {
return '```' + string + '```'
}
		const simir = (teks) => {
			kurr.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			kurr.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticKick = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/kick.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			kurr.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? kurr.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
kurr.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
kurr.sendMessage(from, hasil, type, options).catch(e => {
kurr.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        kurr.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await kurr.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				kurr.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
            if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
 if(budy.includes('cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('KurrXd')){
cpref = `Hayo Ngomongin KurrXd Ganteng Yaaa Aowkowkwoo`
reply(cpref)
}
if(budy.includes('KurrTod')){
cpref = `Hayo Ngomongin KurrXd Ganteng Yaaa Aowkowkwoo`
reply(cpref)
}
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return kurr.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					kurr.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					kurr.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					kurr.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        kurr.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				kurr.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    kurr.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        
        if (budy.includes("https://chat.whatsapp.com","http://chat.whatsapp.com")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				kurr.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    kurr.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
			}
			}
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			kurr.sendMessage(from, ano, sticker, { quoted: mek})
				}
if (!settings.autoread) {
kurr.chatRead(from)
}
if (!settings.autocomposing) {
kurr.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
kurr.updatePresence(from, Presence.recording)
}
if (budy.startsWith('kurr')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "*_© KurrXd_*", [{buttonId: 'igm', buttonText: {displayText: 'Instagram'}, type: 1},{buttonId: 'ytm', buttonText: {displayText: 'YouTube'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'igm'){
reply('http://instagram.com/kurrsadboy')
}
if(isButton == 'ytm'){
reply('http://youtube.com/c/KurrXd')
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
		//runtime berjalan
           runi = process.uptime() 
           kurr.setStatus(`Bot Active During ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1;
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
        	case 'hadiah':
        	case 'gift':
      if (!isOwner && !mek.key.fromMe) return
listMsg = {
 buttonText: `serah lu dah kalo ngeyel`,
 footerText: '',
 description: `JANGAN DIBUKA`,
 sections: [
                     {
                      "title": `Bagaimana hadiahnya?`,
 rows: [{
"title": `${emoji1(prefix)}`,
"description": 'Virus Anonymous',
"rowId": "/menu"
}]
                     }],
 listType: 1,
 ListMessageListType: 2
}
if (!args[0]) {
kurr.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
} else {
  kurr.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
}
            break
        	case 'allmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        if(menusimpel == false){               
                
                nomor = 1
                stod = `${sender}`
       stst = await kurr.getStatus(`${sender.split('@')[0]}@c.us`)
       runtime = process.uptime()
				stst = stst.status == 401 ? '' : stst.status
       menu = `*_❒All Menu❒_*
*─❒ NEW FITURE*
_え ${prefix}piltek_
_え ${prefix}gift_
_え ${prefix}popo_
_え ${prefix}meme_ 
_え ${prefix}darkjoke_
_え ${prefix}memeindo_
*─❒ FUN MENU NEW*
_え ${prefix}bego_
_え ${prefix}tolol_
_え ${prefix}pinter_
_え ${prefix}pintar_
_え ${prefix}asu_
_え ${prefix}bodoh_
_え ${prefix}gay_
_え ${prefix}lesby_
_え ${prefix}bajingan_
_え ${prefix}jancok_
_え ${prefix}anjing_
_え ${prefix}ngentod_
_え ${prefix}ngentot_
_え ${prefix}monyet_
_え ${prefix}mastah_
_え ${prefix}newbie_
_え ${prefix}bangsat_
_え ${prefix}bangke_
_え ${prefix}sange_
_え ${prefix}sangean_
_え ${prefix}dakjal_
_え ${prefix}horny_
_え ${prefix}wibu_
_え ${prefix}puki_
_え ${prefix}pantexpantek_
│
*─❒ OWNER*
_え ${prefix}autorespon [ _on/off_ ]_
_え ${prefix}bc [ _teks/reply gif/image/video with caption_ ]_
_え ${prefix}tobc [ _reply sticker/audio with caption_ ]_
_え ${prefix}return [ _javascript_ ]_
_え ${prefix}clearall_
_え ${prefix}delchat_
_え ${prefix}mute_
_え ${prefix}unmute_
_え ${prefix}public_
_え ${prefix}self_
_え ${prefix}spam [ _teks|jumlah_ ]_
_え ${prefix}demoteall_
_え ${prefix}promoteall_
_え ${prefix}addcmd [ _teks reply stc_ ]_
_え ${prefix}delcmd [ _reply stc_ ]_
_え ${prefix}listcmd_
_え ${prefix}spamsw [ _teks|jumlah_ ]_
_え ${prefix}upswteks [ _teks_ ]_
_え ${prefix}upswlokasi [ _teks_ ]_
_え ${prefix}upswaudio [ _reply audio_ ]_
_え ${prefix}upswvoice [ _reply audio_ ]_
_え ${prefix}upswsticker [ _reply sticker_ ]_
_え ${prefix}upswimage [ _reply image with caption_ ]_
_え ${prefix}upswgif [ _reply gif with caption_ ]_
_え ${prefix}upswvideo [ _reply video with caption_ ]_
_え ${prefix}shutdown_
_え ${prefix}offline [ _alasan_ ]_
_え ${prefix}online_
_え ${prefix}exif [ _nama|author_ ]_
_え ${prefix}setprofile [ _reply image_ ]_
_え ${prefix}setname [ _teks_ ]
_え ${prefix}setprefix [ _multi/nopref/prefix_ ]_
_え ${prefix}setbio [ _teks_ ]_
_え ${prefix}leave_
_え ${prefix}restart_
_え ${prefix}addrespon [ _tanya|jawab_ ]_
_え ${prefix}delrespon [ _nama_ ]_
_え ${prefix}listrespon_
_え ${prefix}readall_
_え ${prefix}unreadall_
_え ${prefix}archive_
_え ${prefix}unarchiveall_
_え ${prefix}pin_
_え ${prefix}unpin_
_え ${prefix}setmenu [ _ori/simpel_ ]_
_え ${prefix}setallmenu [ _ori/simpel_ ]_
_え ${prefix}leavetime [ _detik/menit/jam_ ]_
_え ${prefix}bukatime [ _detik/menit/jam_ ]_
_え ${prefix}tutuptime [ _detik/menit/jam_ ]_
_え ${prefix}nano [ _nama file_ ]_
│
*─❒GAME MENU*
_え ${prefix}tebakgambar_
_え ${prefix}caklontong_
│
*─❒ WIBU*
_え ${prefix}loli_
_え ${prefix}husbu_
_え ${prefix}milf_
_え ${prefix}cosplay_
_え ${prefix}wallml_
│
*─❒ DOWNLOAD*
_え ${prefix}infogempa_
_え ${prefix}pinterest_
_え ${prefix}herolist_
_え ${prefix}herodetail [ _hero_ ]_
_え ${prefix}google [ _search_ ]_
_え ${prefix}gimage [ _search_ ]_
_え ${prefix}wiki [ _search_ ]_
_え ${prefix}mediafire [ _link_ ]_
_え ${prefix}ytsearch [ _judul_ ]_
_え ${prefix}ytmp4 [ _link yt_ ]_
_え ${prefix}ytmp3 [ _link yt_ ]_
_え ${prefix}play [ _judul lagu_ ]_
_え ${prefix}video [ _judul video_ ]_
4え ${prefix}tinyurl [ _link_ ]_
_え ${prefix}fetch [ _link_ ]_
_え ${prefix}igdl [ _link_ ]_
_え ${prefix}tiktokdl [ _link_ ]_
_え ${prefix}pinterest [ _search_ ]_
_え ${prefix}lirik [ _judul_ ]_
_え ${prefix}tourl [ _reply image/video_ ]_
_え ${prefix}resepmasakan [ _judul_ ]_
_え ${prefix}artimimpi [ _teks_ ]_
_え ${prefix}bilangangka [ _angka_ ]_
_え ${prefix}kalkulator [ _angka_ ]_
_え ${prefix}fancytext [ _teks_ ]_
_え ${prefix}githubstalk [ _username_ ]_
_え ${prefix}translate [ _teks kodebhs_ ]_
_え ${prefix}ss [ _link_ ]_
_え ${prefix}playstore [ _search_ ]_
_え ${prefix}tiktokaudio [ _link_ ]_
_え ${prefix}brainly [ _search_ ]_
_え ${prefix}igstory [ _search_ ]_
_え ${prefix}igstalk [ _link_ ]_
_え ${prefix}twitter [ _link_ ]_
_え ${prefix}twmp3 [ _link_ ]_
_え ${prefix}linkwa [ _search_ ]_
_え ${prefix}chara [ _search_ ]_
_え ${prefix}otaku [ _search_ ]_
_え ${prefix}komiku [ _search_ ]_
│
*─❒ MAKER*
_え ${prefix}blackpink_
_え ${prefix}neon_
_え ${prefix}greenneon_
_え ${prefix}advanceglow_
_え ${prefix}futureneon_
_え ${prefix}sandwriting_
_え ${prefix}sandsummer_
_え ${prefix}sandengraved_
_え ${prefix}metaldark_
_え ${prefix}neonlight_
_え ${prefix}holographic_
_え ${prefix}text1917_
_え ${prefix}minion_
_え ${prefix}deluxesilver_
_え ${prefix}newyearcard_
_え ${prefix}bloodfrosted_
_え ${prefix}halloween_
_え ${prefix}jokerlogo_
_え ${prefix}fireworksparkle_
_え ${prefix}natureleaves_
_え ${prefix}bokeh_
_え ${prefix}toxic_
_え ${prefix}strawberry_
_え ${prefix}box3d_
_え ${prefix}roadwarning_
_え ${prefix}breakwall_
_え ${prefix}icecold_
_え ${prefix}luxury_
_え ${prefix}cloud_
_え ${prefix}summersand_
_え ${prefix}horrorblood_
_え ${prefix}thunder_
_え ${prefix}pornhub_
_え ${prefix}glitch_
_え ${prefix}avenger_
_え ${prefix}space_
_え ${prefix}ninjalogo_
_え ${prefix}marvelstudio_
_え ${prefix}lionlogo_
_え ${prefix}wolflogo_
_え ${prefix}steel3d_
_え ${prefix}wallgravity_
_え ${prefix}shadow_
_え ${prefix}cup_
_え ${prefix}cup1_
_え ${prefix}romance_
_え ${prefix}smoke_
_え ${prefix}burnpaper_
_え ${prefix}lovemessage_
_え ${prefix}undergrass_
_え ${prefix}love_
_え ${prefix}coffe_
_え ${prefix}woodheart_
_え ${prefix}woodenboard_
_え ${prefix}summer3d_
_え ${prefix}wolfmetal_
_え ${prefix}nature3d_
_え ${prefix}underwater_
_え ${prefix}golderrose_
_え ${prefix}summernature_
_え ${prefix}letterleaves_
_え ${prefix}glowingneon_
_え ${prefix}fallleaves_
_え ${prefix}flamming_
_え ${prefix}harrypotter_
_え ${prefix}carvedwood_
_え ${prefix}arcade8bit_
_え ${prefix}battlefield4_
_え ${prefix}pubg_
_え ${prefix}wetglass_
_え ${prefix}multicolor3d_
_え ${prefix}watercolor_
_え ${prefix}luxurygold_
_え ${prefix}galaxywallpaper_
_え ${prefix}lighttext_
_え ${prefix}beautifulflower_
_え ${prefix}puppycute_
_え ${prefix}royaltext_
_え ${prefix}heartshaped_
_え ${prefix}birthdaycake_
_え ${prefix}galaxystyle_
_え ${prefix}hologram3d_
_え ${prefix}greenneon_
_え ${prefix}glossychrome_
_え ${prefix}greenbush_
_え ${prefix}metallogo_
_え ${prefix}noeltext_
_え ${prefix}glittergold_
_え ${prefix}textcake_
_え ${prefix}starsnight_
_え ${prefix}wooden3d_
_え ${prefix}textbyname_
_え ${prefix}writegalacy_
_え ${prefix}galaxybat_
_え ${prefix}snow3d_
_え ${prefix}birthdayday_
_え ${prefix}goldplaybutton_
_え ${prefix}silverplaybutton_
_え ${prefix}freefire_
_え ${prefix}foliokanan [ _text_ ]_
_え ${prefix}foliokiri [ _text_ ]_
_え ${prefix}nuliskanan [ _text_ ]_
_え ${prefix}nuliskiri [ _text_ ]_
_え ${prefix}maker3d [ _text_ ]_
_え ${prefix}maker2d [ _text_ ]_
_え ${prefix}epepserti [ _text_ ]_
│
*──❒ GROUP*
_え ${prefix}getpict [ _@tag_ ]_
_え ${prefix}getname [ _reply target_ ]_
_え ${prefix}getbio [ _reply target_ ]_
_え ${prefix}promote [ _@tag_ ]_
_え ${prefix}demote [ _@tag_ ]_
_え ${prefix}antilink [ _on/off_ ]_
_え ${prefix}antivirtex [ _on/off_ ]_
_え ${prefix}antiwame [ _on/off_ ]_
_え ${prefix} welcome [ _on/off_ ]_____
_え ${prefix}creategrup [ _nama|@ta___g_ ]
_え ${prefix}tictactoe [ _@tag_ ]_
_え ${prefix}delttt_
_え ${prefix}kick_
_え ${prefix}add_
_え ${prefix}getpp_
_え ${prefix}antiwame_
_え ${prefix}getdeskgc_
_え ${prefix}sider [ _reply pesan bot_ ]_
_え ${prefix}hacked [ _teks_ ]_
_え ${prefix}setnamegc [ _teks_ ]_
_え ${prefix}setdeskgc [ _teks_ ]_
_え ${prefix}fitnah [ _@tag|teks1|teks2_ ]_
_え ${prefix}kontak [ _@tag|nama_ ]_
_え ${prefix}kontag [ _@tag|nama_ ]_
_え ${prefix}opengc_
_え ${prefix}closegc_
_え ${prefix}resetlinkgc_
_え ${prefix}linkgrup_
_え ${prefix}hidetag [ _teks_ ]_
_え ${prefix}sticktag [ _nama sticker_ ]_
_え ${prefix}totag [ _reply media_ ]_
│
*─❒ TOOLS*_
_え ${prefix}sticker_
_え ${prefix}stickerwm [ _nama|author_ ]_
_え ${prefix}dadu_
_え ${prefix}semoji [ _emoji_ ]_
_え ${prefix}attp [ _teks_ ]_
_え ${prefix}ttp [ _teks_ ]_
_え ${prefix}ttp2 [ _teks_ ]_
_え ${prefix}ttp3 [ _teks_ ]_
_え ${prefix}ttp4 [ _teks_ ]_
_え ${prefix}toimg_
_え ${prefix}tomp3 [ _reply video_ ]_
_え ${prefix}tomp4 [ _reply sticker gif_ ]_
_え ${prefix}robot [ _reply audio_ ]_
_え ${prefix}balik [ _reply audio_ ]_
_え ${prefix}bass [ _reply audio_ ]_
_え ${prefix}gemuk [ _reply audio_ ]_
_え ${prefix}detikvn [ _reply audio caption angka_ ]_
_え ${prefix}detikvideo [ _reply video caption angka_ ]_
│
│
*─❒ STORAGE*
_え ${prefix}listimage_
_え ${prefix}liststicker_
_え ${prefix}listvn_
_え ${prefix}addsticker [ _nama_ ]_
_え ${prefix}delsticker [ _nama_ ]_
_え ${prefix}addvn [ _nama_ ]_
_え ${prefix}delvn [ _nama_ ]_
_え ${prefix}addimage [ _nama_ ]_
_え ${prefix}delimage [ _nama_ ]_
│
*─❒ MENU HARAM*
_え ${prefix}bokep_
_え ${prefix}neko_
_え ${prefix}kanna_
_え ${prefix}sagiri_
_え ${prefix}megumin_
_え ${prefix}wallnime_
_え ${prefix}ass_
_え ${prefix}ahegao_
_え ${prefix}hentai_
_え ${prefix}yuri_
_え ${prefix}panties_
_え ${prefix}neko_
_え ${prefix}chiisaihentai_
_え ${prefix}trap_
_え ${prefix}blowjob_
_え ${prefix}yaoi_
_え ${prefix}ecchi_
_え ${prefix}ahegao_
_え ${prefix}hololewd_
_え ${prefix}sideoppai_
_え ${prefix}animefeets_
_え ${prefix}animebooty_
_え ${prefix}animethighss_
_え ${prefix}hentaiparadise_
_え ${prefix}animearmpits_
_え ${prefix}hentaifemdom_
_え ${prefix}lewdanimegirls_
_え ${prefix}biganimetiddies_
_え ${prefix}animebellybutton_
_え ${prefix}hentai4everyone_
_え ${prefix}bj_
_え ${prefix}ero_
_え ${prefix}cum_
_え ${prefix}feet_
_え ${prefix}yuri_
_え ${prefix}trap_
_え ${prefix}lewd_
_え ${prefix}feed_
_え ${prefix}eron_
_え ${prefix}solo_
_え ${prefix}gasm_
_え ${prefix}poke_
_え ${prefix}anal_
_え ${prefix}holo_
_え ${prefix}tits_
_え ${prefix}kuni_
_え ${prefix}kiss_
_え ${prefix}erok_
_え ${prefix}smug_
_え ${prefix}baka_
_え ${prefix}solog_
_え ${prefix}feetg_
_え ${prefix}lewdk_
_え ${prefix}waifu_
_え ${prefix}pussy_
_え ${prefix}femdom_
_え ${prefix}cuddle_
_え ${prefix}eroyuri_
_え ${prefix}cum_jpg_
_え ${prefix}blowjob_
_え ${prefix}erofeet_
_え ${prefix}holoero_
_え ${prefix}classic_
_え ${prefix}erokemo_
_え ${prefix}fox_girl_
_え ${prefix}futanari_
_え ${prefix}lewdkemo_
_え ${prefix}wallpaper_
_え ${prefix}pussy_jpg_
_え ${prefix}kemonomimi_
_え ${prefix}nsfw_avatar_
│
*─❒ EVAL*
_え *x*_
_え *>*_
_え *=>*_
_え *$*_
│
*─❒ OTHER / FUN*
_え ${prefix}rate_
_え ${prefix}kapankah_
_え ${prefix}apakah_
_え ${prefix}bisakah_
_え ${prefix}caripesan [ _teks|jumlah_ ]_
_え ${prefix}slots_
_え ${prefix}suit [ _gunting/batu/kertas_ ]_
_え ${prefix}tag [ _nomor_ ]_
_え ${prefix}tagme_
_え ${prefix}tts [ _kodebhs teks_ ]_
_え ${prefix}readmore [ _teks1|teks2_ ]_
_え ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]_
_え ${prefix}chat [ _nomor|teks_ ]_
_え ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]_
_え ${prefix}listgrup_
_え ${prefix}baileys [ _reply message_ ]_
_え ${prefix}q [ _reply message_ ]_
_え ${prefix}getcaption [ _reply message_ ]_
_え ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]_
_え ${prefix}sharelock [ _teks1|teks2_ ]_

BOT TELAH AKTIF SELAMA : ${waktu(runtime)}
└─────────────────❒`
sendButLocation(from, `${menu}`, "*_© KurrXdゑ_*", {jpegThumbnail:ofrply2,name:""}, [{buttonId:`store`,buttonText:{displayText:'KURRXD STORE'},type:1},{buttonId:`sc`,buttonText:{displayText:'ＳＥＷＡ　ＢＯＴ'},type:1},{buttonId:`catalog`,buttonText:{displayText:'CATALOG MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` KurrXdゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await kurr.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'bokep':
try{
if(!isGroup)return reply('Di group aja ngentod!! Biar dosanya kesebar..')
reply(mess.wait)
boks = Date.now();
bok = await scrapper.pornvid()
bokt = `BOKEP

┬╗ Judul    : ${bok.hasil.title}
┬╗ Upload   : ${bok.hasil.upload}
┬╗ Views    : ${bok.hasil.views}
┬╗ Like     : ${bok.hasil.like}
┬╗ Dislike  : ${bok.hasil.dislike}
┬╗ Favorite : ${bok.hasil.favorite}
┬╗ Tag      : ${bok.hasil.tags}
┬╗ Source   : ${bok.hasil.source}`

sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.thumb, bokt)
sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.video, monospace(`Process ${((Date.now()-boks)/1000).toFixed(1)} Seconds`))
} catch (e){
console.log(e)
reply(e)
}
break


case 'meme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`Subrek yt : KurrXd`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
                    break
case 'darkjoke':
case 'memeindo':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/${command}?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`Subrek yt : KurrXd`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
                    break

case 'menu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                
                nomor = 1
                stod = `${sender}`
       stst = await kurr.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menu = `╭─❒ 「 KurrXd BOTZ Info 」

*㍿OWNER: ${NamaOwner}*

*㍿NOMER OWNER: ${NomorOwner}*

*㍿Lib: Baileys*

*㍿speed bot: ${latensyi.toFixed(4)} Second*

*㍿prefix : Multi Prefix* 

                                              
*ゞRULESゞ*
_Dilarang keras_
-SPAM BOT
-CALL BOT
-VC BOT
LANGGAR BANNED

GITHUB OWNER:https://github.com/KurrXd
YOUTUBE OWNER:https://youtube.com/c/KurrXd`
sendButLocation(from, `${menu}`, "*_© KurrXdゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`allmenu`,buttonText:{displayText:'ALL MENU'},type:1},{buttonId:`store`,buttonText:{displayText:'KURRXD STORE'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Hai Kak ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` KurrXdゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await kurr.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)  
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'catalog': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})

                nama = ' KurrXdゑ '
       ownerJid = "6281220670449@s.whatsapp.net"
                nomor = 1
                stod = `${sender}`
       stst = await kurr.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
       menunya = `*_❒All Menu❒_*
*─❒ NEW FITURE*
_え ${prefix}piltek_
え ${prefix}gift
え ${prefix}popo
え ${prefix}meme 
え ${prefix}darkjoke 
え ${prefix}memeindo 
え ${prefix}meme 
え ${prefix}darkjoke 
え ${prefix}memeindo 
*─❒ FUN MENU NEW*
え ${prefix}bego
え ${prefix}tolol
え ${prefix}pinter
え ${prefix}pintar
え ${prefix}asu
え ${prefix}bodoh
え ${prefix}gay
え ${prefix}lesby
え ${prefix}bajingan
え ${prefix}jancok
え ${prefix}anjing
え ${prefix}ngentod
え ${prefix}ngentot
え ${prefix}monyet
え ${prefix}mastah
え ${prefix}newbie
え ${prefix}bangsat
え ${prefix}bangke
え ${prefix}sange
え ${prefix}sangean
え ${prefix}dakjal
え ${prefix}horny
え ${prefix}wibu
え ${prefix}puki
え ${prefix}pantexpantek
│
*─❒ OWNER*
え ${prefix}autorespon [ _on/off_ ]
え ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
え ${prefix}tobc [ _reply sticker/audio with caption_ ]
え ${prefix}return [ _javascript_ ]
え ${prefix}clearall
え ${prefix}delchat
え ${prefix}mute
え ${prefix}unmute
え ${prefix}public
え ${prefix}self
え ${prefix}spam [ _teks|jumlah_ ]
え ${prefix}demoteall
え ${prefix}promoteall
え ${prefix}addcmd [ _teks reply stc_ ]
え ${prefix}delcmd [ _reply stc_ ]
え ${prefix}listcmd
え ${prefix}spamsw [ _teks|jumlah_ ]
え ${prefix}upswteks [ _teks_ ]
え ${prefix}upswlokasi [ _teks_ ]
え ${prefix}upswaudio [ _reply audio_ ]
え ${prefix}upswvoice [ _reply audio_ ]
え ${prefix}upswsticker [ _reply sticker_ ]
え ${prefix}upswimage [ _reply image with caption_ ]
え ${prefix}upswgif [ _reply gif with caption_ ]
え ${prefix}upswvideo [ _reply video with caption_ ]
え ${prefix}shutdown
え ${prefix}offline [ _alasan_ ]
え ${prefix}online
え ${prefix}exif [ _nama|author_ ]
え ${prefix}setprofile [ _reply image_ ]
え ${prefix}setname [ _teks_ ]
え ${prefix}setprefix [ _multi/nopref/prefix_ ]
え ${prefix}setbio [ _teks_ ]
え ${prefix}leave
え ${prefix}restart
え ${prefix}addrespon [ _tanya|jawab_ ]
え ${prefix}delrespon [ _nama_ ]
え ${prefix}listrespon
え ${prefix}readall
え ${prefix}unreadall
え ${prefix}archive
え ${prefix}unarchiveall
え ${prefix}pin
え ${prefix}unpin
え ${prefix}setmenu [ _ori/simpel_ ]
え ${prefix}setallmenu [ _ori/simpel_ ]
え ${prefix}leavetime [ _detik/menit/jam_ ]
え ${prefix}bukatime [ _detik/menit/jam_ ]
え ${prefix}tutuptime [ _detik/menit/jam_ ]
え ${prefix}nano [ _nama file_ ]
│
*─❒GAME MENU*
え ${prefix}tebakgambar
え ${prefix}caklontong
│
*─❒ WIBU*
え ${prefix}loli
え ${prefix}husbu
え ${prefix}milf
え ${prefix}cosplay
え ${prefix}wallml
│
*─❒ DOWNLOAD*
え ${prefix}infogempa
え ${prefix}pinterest
え ${prefix}herolist
え ${prefix}herodetail [ _hero_ ]
え ${prefix}google [ _search_ ]
え ${prefix}gimage [ _search_ ]
え ${prefix}wiki [ _search_ ]
え ${prefix}mediafire [ _link_ ]
え ${prefix}ytsearch [ _judul_ ]
え ${prefix}ytmp4 [ _link yt_ ]
え ${prefix}ytmp3 [ _link yt_ ]
え ${prefix}play [ _judul lagu_ ]
え ${prefix}video [ _judul video_ ]
え ${prefix}tinyurl [ _link_ ]
え ${prefix}fetch [ _link_ ]
え ${prefix}igdl [ _link_ ]
え ${prefix}tiktokdl [ _link_ ]
え ${prefix}pinterest [ _search_ ]
え ${prefix}lirik [ _judul_ ]
え ${prefix}tourl [ _reply image/video_ ]
え ${prefix}resepmasakan [ _judul_ ]
え ${prefix}artimimpi [ _teks_ ]
え ${prefix}bilangangka [ _angka_ ]
え ${prefix}kalkulator [ _angka_ ]
え ${prefix}fancytext [ _teks_ ]
え ${prefix}githubstalk [ _username_ ]
え ${prefix}translate [ _teks kodebhs_ ]
え ${prefix}ss [ _link_ ]
え ${prefix}playstore [ _search_ ]
え ${prefix}tiktokaudio [ _link_ ]
え ${prefix}brainly [ _search_ ]
え ${prefix}igstory [ _search_ ]
え ${prefix}igstalk [ _link_ ]
え ${prefix}twitter [ _link_ ]
え ${prefix}twmp3 [ _link_ ]
え ${prefix}linkwa [ _search_ ]
え ${prefix}chara [ _search_ ]
え ${prefix}otaku [ _search_ ]
え ${prefix}komiku [ _search_ ]
│
*─❒ MAKER*
え ${prefix}blackpink
え ${prefix}neon
え ${prefix}greenneon
え ${prefix}advanceglow
え ${prefix}futureneon
え ${prefix}sandwriting
え ${prefix}sandsummer
え ${prefix}sandengraved
え ${prefix}metaldark
え ${prefix}neonlight
え ${prefix}holographic
え ${prefix}text1917
え ${prefix}minion
え ${prefix}deluxesilver
え ${prefix}newyearcard
え ${prefix}bloodfrosted
え ${prefix}halloween
え ${prefix}jokerlogo
え ${prefix}fireworksparkle
え ${prefix}natureleaves
え ${prefix}bokeh
え ${prefix}toxic
え ${prefix}strawberry
え ${prefix}box3d
え ${prefix}roadwarning
え ${prefix}breakwall
え ${prefix}icecold
え ${prefix}luxury
え ${prefix}cloud
え ${prefix}summersand
え ${prefix}horrorblood
え ${prefix}thunder
え ${prefix}pornhub
え ${prefix}glitch
え ${prefix}avenger
え ${prefix}space
え ${prefix}ninjalogo
え ${prefix}marvelstudio
え ${prefix}lionlogo
え ${prefix}wolflogo
え ${prefix}steel3d
え ${prefix}wallgravity
え ${prefix}shadow
え ${prefix}cup
え ${prefix}cup1
え ${prefix}romance
え ${prefix}smoke
え ${prefix}burnpaper
え ${prefix}lovemessage
え ${prefix}undergrass
え ${prefix}love
え ${prefix}coffe
え ${prefix}woodheart
え ${prefix}woodenboard
え ${prefix}summer3d
え ${prefix}wolfmetal
え ${prefix}nature3d
え ${prefix}underwater
え ${prefix}golderrose
え ${prefix}summernature
え ${prefix}letterleaves
え ${prefix}glowingneon
え ${prefix}fallleaves
え ${prefix}flamming
え ${prefix}harrypotter
え ${prefix}carvedwood
え ${prefix}arcade8bit
え ${prefix}battlefield4
え ${prefix}pubg
え ${prefix}wetglass
え ${prefix}multicolor3d
え ${prefix}watercolor
え ${prefix}luxurygold
え ${prefix}galaxywallpaper
え ${prefix}lighttext
え ${prefix}beautifulflower
え ${prefix}puppycute
え ${prefix}royaltext
え ${prefix}heartshaped
え ${prefix}birthdaycake
え ${prefix}galaxystyle
え ${prefix}hologram3d
え ${prefix}greenneon
え ${prefix}glossychrome
え ${prefix}greenbush
え ${prefix}metallogo
え ${prefix}noeltext
え ${prefix}glittergold
え ${prefix}textcake
え ${prefix}starsnight
え ${prefix}wooden3d
え ${prefix}textbyname
え ${prefix}writegalacy
え ${prefix}galaxybat
え ${prefix}snow3d
え ${prefix}birthdayday
え ${prefix}goldplaybutton
え ${prefix}silverplaybutton
え ${prefix}freefire
え ${prefix}foliokanan [ _text_ ]
え ${prefix}foliokiri [ _text_ ]
え ${prefix}nuliskanan [ _text_ ]
え ${prefix}nuliskiri [ _text_ ]
え ${prefix}maker3d [ _text_ ]
え ${prefix}maker2d [ _text_ ]
え ${prefix}epepserti [ _text_ ]
│
*──❒ GROUP*
え ${prefix}getpict [ _@tag_ ]
え ${prefix}getname [ _reply target_ ]
え ${prefix}getbio [ _reply target_ ]
え ${prefix}promote [ _@tag_ ]
え ${prefix}demote [ _@tag_ ]
え ${prefix}antilink [ _on/off_ ]
え ${prefix}antivirtex [ _on/off_ ]
え ${prefix}antiwame [ _on/off_ ]
え ${prefix} welcome [ _on/off_ ]
え ${prefix}creategrup [ _nama|@tag_ ]
え ${prefix}tictactoe [ _@tag_ ]
え ${prefix}delttt
え ${prefix}kick
え ${prefix}add
え ${prefix}getpp
え ${prefix}antiwame
え ${prefix}getdeskgc
え ${prefix}sider [ _reply pesan bot_ ]
え ${prefix}hacked [ _teks_ ]
え ${prefix}setnamegc [ _teks_ ]
え ${prefix}setdeskgc [ _teks_ ]
え ${prefix}fitnah [ _@tag|teks1|teks2_ ]
え ${prefix}kontak [ _@tag|nama_ ]
え ${prefix}kontag [ _@tag|nama_ ]
え ${prefix}opengc
え ${prefix}closegc
え ${prefix}resetlinkgc
え ${prefix}linkgrup
え ${prefix}hidetag [ _teks_ ]
え ${prefix}sticktag [ _nama sticker_ ]
え ${prefix}totag [ _reply media_ ]
│
*─❒ TOOLS*
え ${prefix}sticker
え ${prefix}stickerwm [ _nama|author_ ]
え ${prefix}dadu
え ${prefix}semoji [ _emoji_ ]
え ${prefix}attp [ _teks_ ]
え ${prefix}ttp [ _teks_ ]
え ${prefix}ttp2 [ _teks_ ]
え ${prefix}ttp3 [ _teks_ ]
え ${prefix}ttp4 [ _teks_ ]
え ${prefix}toimg
え ${prefix}tomp3 [ _reply video_ ]
え ${prefix}tomp4 [ _reply sticker gif_ ]
え ${prefix}robot [ _reply audio_ ]
え ${prefix}balik [ _reply audio_ ]
え ${prefix}bass [ _reply audio_ ]
え ${prefix}gemuk [ _reply audio_ ]
え ${prefix}detikvn [ _reply audio caption angka_ ]
え ${prefix}detikvideo [ _reply video caption angka_ ]
│
│
*─❒ STORAGE*
え ${prefix}listimage
え ${prefix}liststicker
え ${prefix}listvn
え ${prefix}addsticker [ _nama_ ]
え ${prefix}delsticker [ _nama_ ]
え ${prefix}addvn [ _nama_ ]
え ${prefix}delvn [ _nama_ ]
え ${prefix}addimage [ _nama_ ]
え ${prefix}delimage [ _nama_ ]
│
*─❒ MENU HARAM*
え ${prefix}bokep
え ${prefix}neko
え ${prefix}kanna
え ${prefix}sagiri
え ${prefix}megumin
え ${prefix}wallnime
え ${prefix}ass
え ${prefix}ahegao
え ${prefix}hentai
え ${prefix}yuri
え ${prefix}panties
え ${prefix}neko
え ${prefix}chiisaihentai
え ${prefix}trap
え ${prefix}blowjob
え ${prefix}yaoi
え ${prefix}ecchi
え ${prefix}ahegao
え ${prefix}hololewd
え ${prefix}sideoppai
え ${prefix}animefeets
え ${prefix}animebooty
え ${prefix}animethighss
え ${prefix}hentaiparadise
え ${prefix}animearmpits
え ${prefix}hentaifemdom
え ${prefix}lewdanimegirls
え ${prefix}biganimetiddies
え ${prefix}animebellybutton
え ${prefix}hentai4everyone
え ${prefix}bj
え ${prefix}ero
え ${prefix}cum
え ${prefix}feet
え ${prefix}yuri
え ${prefix}trap
え ${prefix}lewd
え ${prefix}feed
え ${prefix}eron
え ${prefix}solo
え ${prefix}gasm
え ${prefix}poke
え ${prefix}anal
え ${prefix}holo
え ${prefix}tits
え ${prefix}kuni
え ${prefix}kiss
え ${prefix}erok
え ${prefix}smug
え ${prefix}baka
え ${prefix}solog
え ${prefix}feetg
え ${prefix}lewdk
え ${prefix}waifu
え ${prefix}pussy
え ${prefix}femdom
え ${prefix}cuddle
え ${prefix}eroyuri
え ${prefix}cum_jpg
え ${prefix}blowjob
え ${prefix}erofeet
え ${prefix}holoero
え ${prefix}classic
え ${prefix}erokemo
え ${prefix}fox_girl
え ${prefix}futanari
え ${prefix}lewdkemo
え ${prefix}wallpaper
え ${prefix}pussy_jpg
え ${prefix}kemonomimi
え ${prefix}nsfw_avatar
│
*─❒ EVAL*
え *x*
え *>*
え *=>*
え *$*
│
*─❒ OTHER / FUN*
え ${prefix}meme
え ${prefix}darkjoke
え ${prefix}rate
え ${prefix}kapankah
え ${prefix}apakah
え ${prefix}bisakah
え ${prefix}caripesan [ _teks|jumlah_ ]
え ${prefix}slots
え ${prefix}suit [ _gunting/batu/kertas_ ]
え ${prefix}tag [ _nomor_ ]
え ${prefix}tagme
え ${prefix}tts [ _kodebhs teks_ ]
え ${prefix}readmore [ _teks1|teks2_ ]
え ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
え ${prefix}chat [ _nomor|teks_ ]
え ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
え ${prefix}listgrup
え ${prefix}baileys [ _reply message_ ]
え ${prefix}q [ _reply message_ ]
え ${prefix}getcaption [ _reply message_ ]
え ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
え ${prefix}sharelock [ _teks1|teks2_ ]


└─────────────────❒`
if(menuall == false){
   //Masih langka
anu = kurr.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
								"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc",
						"mimetype": "image/jpeg",
						"fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=",
						"fileLength": "20040",
						"height": 390,
						"width": 390,
						"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=",
						"fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=",
						"jpegThumbnail": fs.readFileSync("./logonya.jpeg")
                                },
                            "productId": "9999999",
							"title": `${nama}`, 
							"description": `${menunya}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: ftrol, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  kurr.relayWAMessage(anu)
                  } else if(menuall = true){
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await kurr.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const btnBngsat = {
imageMessage: mhan.message.imageMessage,
contentText: `${menunya}`,
footerText: `KurrXdゑ`,
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, btnBngsat, MessageType.buttonsMessage, { quoted: ftrol, caption: menunya, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  }
break
        case 'store':
gifnya = await getBuffer('https://telegra.ph/file/457d3be9baecef635c357.mp4')
		anu =`*KurrXd Melayani Jasa Pembuatan Vps/Rdp*
*Jasa Run Bot/ Hosting Bot*
*Dengan Harga Terjangkau*
*_List Harga Rdp_*
RAM 2GB CPU 1 = 20K

RAM 4GB CPU 2 = 40K

RAM 8GB CPU 4 = 80k
GARANSI 2 MINGGU SETELAH PEMBAYARAN

INFO/SARAN: JANGAN BELI RAM 2GB
JIKA UNTUK KEBUTUHAN BOT KARNA BISA
MENYEBAB KAN OVERLOAD

OVERLOAD= NO GARANSI
*_List Harga Vps_*
Ram 2 Cpu 1 Expire 1 Tahun = 54k

*GARANSI 3BULAN SETELAH PEMBAYARAN*

KHUSUS VPS JANGAN PAKSA BUAT JASA RUN BOT
INGET RAM2 BUKAN BUAT BANYAK BOT 1 AJA
KALO TERJADI SESUATU YANG TIDAK MEMUNGKINKAN
KAMI TIDAK BERTANGGUNG JAWAB

MINAT HUB https://wa.me/6281220670449
`
await kurr.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu})
break				

case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
 * Nama :* ${pushname}
 * Nomor :* @${sender.split('@')[0]}
 * Seri:* ${serialUser}
 * Pengguna:* ${_registered.length}
└❏

*「 KurrXdゑ 」*`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await kurr.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_© kurr_*', 
buttons: gbutsan,
headerType: 4
}
kurr.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
// BIAR GAK LUPA 
//LUPA
case 'nuliskiri':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
break
case 'nuliskanan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
break
case 'foliokanan':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
break
case 'foliokiri':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
kurr.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
break
    
       case 'maker3d': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} KurrXdゑ`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker3d?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
					break				
		
					//menu haram
					case 'ass': 
					case 'ahegao': 
					case 'yuri': 
					case 'panties': 					
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/${command}?apikey=xnxx`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     kurr.sendMessage(from, ini_img, image, {quoted:mek})
     break
     case 'neko': 
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/nsfwNeko?apikey=xnxx`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     kurr.sendMessage(from, ini_img, image, {quoted:mek})
     break

					
					case 'maker2d': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} KurrXdゑ`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
					break
					case 'epepserti': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} KurrXdゑ`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker/special/epep?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					kurr.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./logonya.jpeg')})
					break							

//🐀💰 MALING
                   case 'trigger':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 owgi = await kurr.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					kurr.sendMessage(from, buffer, image, {quoted: mek})
                   }
              break       
		case 'gay':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					owgi = await  kurr.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					kurr.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					//Fun not faedah
               case 'brainly':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					kurr.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
case 'igstalk':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try{
if (!c) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${c}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
kurr.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
}
break;      
break    
                case 'bisakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					kurr.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
		    case 'tiktokaudio':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	kurr.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
	case 'igstory': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    kurr.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    kurr.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'playstore':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('lu nyari apa?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('cari group apa?')
            hx.linkwa(`${c}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'otaku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            kurr.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${c}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'twmp4': case 'twitter':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./logonya.jpeg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
kurr.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
    case 'chara':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${c}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await kurr.sendMessage(from,li,image,{quoted: mek})
            break
//Navi
					          case 'unpin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                kurr.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                kurr.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                kurr.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await kurr.chats.all()
                chats.map( async ({ jid }) => {
                await kurr.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await kurr.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await kurr.chats.all()
                chats.map( async ({ jid }) => {
                await kurr.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await kurr.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await kurr.chats.all()
                for (let _ of anu) {
                kurr.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
kurr.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
kurr.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
kurr.groupLeave(from);
}, timer)
case 'nano':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!c) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${c}`)
reply(String(anu))
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
    reply(`MAU JADIBOT? BELI JASA RUN BOT AJ KETIK .owner LALU CHAT BISA SET BOT SMAUMU LO`)
    break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = kurr.contacts[i] != undefined ? kurr.contacts[i].vname || kurr.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer KurrXdゑ`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
kurr.sendMessage(from, {
"displayName": `Developer KurrXdゑ`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'piltek':
gifnya = await getBuffer('https://telegra.ph/file/a92a5a213055a6a48f023.mp4')
anu =`${emoji2(prefix)}`
await kurr.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu})
break
case 'sc':
case 'sewa':
case 'sewabot':
gifnya = await getBuffer('https://telegra.ph/file/3666325f0c76a535ed93c.mp4')
		anu =`*-PRICELIST SEWABOT-*
*10K:6BULAN*
*20K:MANEN*
*FITUR BOT:*
ANTILINK √
ANTIWAME √
ANTIVIRTEX √
WELCOME √
LEAVE √
KICK √

*SC? https://github.com/KurrXd/kurz*
(ERROR 60%)

MAU NO ERROR? CHAT OWNER AE
*=-KurrXd BOTZ-=*
`
await kurr.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu})
break
case 'popo':
case 'pargoy':
case 'paregoy':
        
gifnya = await getBuffer('https://telegra.ph/file/f97b5df915dfb2b80ee0c.mp4')
membr.push(goo.jid)
		anu =`*POPO CINTA 💗💃  @${goo.jid.split('@')[0]}* `		
await kurr.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu, contextInfo: {mentionedJid: membr}})
break			
case 'donasi':
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*DONATE NYA KAKA*
╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi apa cuma liat doang?*
*│*⬡ *PULSA     : ${pulsa}*
*│*⬡ *DANA    : ${dana}*
*│*⬡ *GOPAY    : SCAN DI ATAS AJA*
*└───────────────────*
Scan QR di atas bila belum premium`
kurr.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
case 'pay':
case 'payment':
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*╭─❒ 「 KurrXd PAYMENT 」 ──────*
*│*
*│*⬡ *PEMBAYARAN BISA VIA*
*│*⬡ *DANA   : 081220670449*
*│*⬡ *GOPAY/OVO/SHOPEEPAY    : SCAN DI ATAS AJA*
*└───────────────────*
Scan QR di atas bila belum premium`
kurr.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
       case 'debug':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			 res = await kurr.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `KurrXdゑ`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
kurr.relayWAMessage(res)
break
case 'debug2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   res = await kurr.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `KurrXdゑ`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script KurrXdゑ`,
          "url": "https://github.com/KurrXd"
        },
        "index": 0
      }
    ]
  }
}
}, {})
kurr.relayWAMessage(res)
break
case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    

    	case 'tiktokdl': 
       case 'ttdl':
     case 'tiktok':
        case 'ttnowm': 
      case 'tiktoknowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
// nfsw
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`Subrek yt : KurrXd`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
              break
                    case 'darkjokes':
                    case 'meme':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`Subrek yt : KurrXd`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
                    break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=KurrTod090909`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`Subrek yt : KurrXd`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
        
                    break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await kurr.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=KurrTod090909&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : KurrXd`, quoted : ftrol})
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=KurrTod090909&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : KurrXd`, quoted : ftrol})
                    })
                    break
case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
    
              break
       
       case 'hentai':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=KurrTod090909`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await kurr.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ KurrXd', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              kurr.relayWAMessage(prep)
    
              break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=KurrTod090909&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : KurrXd`, quoted : ftrol})
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kurr Xd`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=KurrTod090909&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : KurrXd`, quoted : ftrol})
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} kurr xd`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=KurrTod090909&text=${ini_txt}`).then((gambar) => {
                        kurr.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : KurrXd`, quoted : ftrol}) 
                    })
                    break


       
       case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=KurrTod090909`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.answer
ini_buffer = await getBuffer(ini_image)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
buff = await getBuffer(ini_image)

kurr.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :tebak sendirilah kontol\nWaktu : 30s' }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `tebakgambar`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
gameAdd(sender, glimit)
break
       case 'caklontong':
       if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=KurrTod090909`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              kurr.sendMessage(from, '*+* ```Caklontong```\n\n *soal* :'+pertanyaan+'\n *kisi²* :'+kisi_kisi, text, { quoted: ftrol}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
//
                    case 'tourl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await kurr.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'viewonce':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await kurr.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
kurr.relayWAMessage(res)
break
case 'pinterest':
if (!q) return reply("")
pint = await pinterest (q)
kurr.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: "Subscribe KurrXd"})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    if (!m.quoted) return reply('reply pesan!')
    let qse = kurr.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  const txs = kurr.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${kurr.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await kurr.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
kurr.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
         
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`- SUDAH AKTIF BOS \n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
kurr.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await kurr.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await kurr.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				kurr.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await kurr.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
		case 'gimage':
case 'googleimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
sticWait(from)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terkurri Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break

				case 'herolist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
sticWait(from)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🐤 Channel : ${i.author.name}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: kurr, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
case 'mediafire':
reply(`MASIH BUG OM TUNGGU FIX YA`)
				case 'kalkulator':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				case 'ts':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
		case 'artimimpi':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
				case 'fancytext':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'lirik':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Judulnya?')
sticWait(from)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
				case 'bilangangka':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'resepmasakan':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
					sticWait(from)
					buff = await getBuffer(anu.results.thumb)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					sticWait(from)
					buff = await getBuffer(anu.result.avatar_url)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					sticWait(from)
					buff = await getBuffer(anu.result.Map)
					kurr.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
				case 'dadu':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			kurr.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await kurr.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await kurr.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await kurr.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await kurr.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
infom = await kurr.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  kurr.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await kurr.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await kurr.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  kurr.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await kurr.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  kurr.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					kurr.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				
				case 'readmore':
			    	case 'more':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                kurr.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					anu = await kurr.chats.all()
					kurr.setMaxListeners(10)
					for (let _ of anu) {
						kurr.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
reply(`_Restarting KurrXdゑ_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await kurr.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						kurr.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await kurr.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						kurr.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				case "antivirtex":
        	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntivirtex) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antivirtex')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang antivirtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntivirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antivirtex')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antivirtex off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antivirtex on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				case 'antiwame':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antiwame')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						kurr.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©kurr_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				case 'tinyurl':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
kurr.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return kurr.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                kurr.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                kurr.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 
				case 'demote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					linkgc = await kurr.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					kurr.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
          json = ['action', 'inviteReset', from]
         kurr.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await kurr.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
                   reply(`Sukses membuka grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
						reply(`Sukses menutup grup ${groupName}`)
						kurr.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					kurr.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                kurr.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                kurr.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
					kurr.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					kurr.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				kurr.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await kurr.downloadAndSaveMediaMessage(enmediau)
					await kurr.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				kurr.updatePresence(from, Presence.composing)
				kurr.groupLeave(from)
						break
				case 'bc':
					kurr.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await kurr.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*_BROADCAST_*',
    buttons: buttons,
    headerType: 1
}
await kurr.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					kurr.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    kurr.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    kurr.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`KurrXdゑ`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						kurr.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(11)
                    sticWait(from)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await kurr.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    kurr.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(7)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kurr.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    kurr.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var teksyy = body.slice(11)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await kurr.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    kurr.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				return kurr.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        sticWait(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await kurr.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					kurr.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					sticWait(from)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await kurr.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						kurr.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            kurr.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await kurr.groupMetadata(anu)
				kurr.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await kurr.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = kurr.contacts[ambl] != undefined ? kurr.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : kurr.contacts[ambl].notify || kurr.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await kurr.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            kurr.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            kurr.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KurrXdゑ`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=KurrTod090909&text=${encodeURIComponent(c)}`)
					kurr.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
				case 'semoji':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					kurr.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					kurr.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join': 
              reply('PUNYA TANGAN KAN MANUAL LAH GOBLOK')
              break
				case 'totag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
			 if (!isOwner)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await kurr.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await kurr.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            kurr.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				var groups = kurr.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = kurr.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await kurr.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = kurr.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${kurr.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${kurr.user.phone.wa_version}
Os Version: ${kurr.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				kurr.updatePresence(from, Presence.composing)
					anu = await kurr.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await kurr.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kurr.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await kurr.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                kurr.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    kurr.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            case 'h':
            if (!isOwner && !isGroupAdmins)  return sticOwner(from)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				kurr.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   kurr.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                kurr.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                kurr.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                kurr.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
					case 'hack':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
              sendBug(from)
              kurr.groupUpdateSubject(from, `HACKED BY KurrXdゑ`)
                kurr.groupUpdateDescription(from, `_${me.jid}_`)
             kurr.updateProfilePicture(from, fs.readFileSync('./media/image/logonya.jpeg'))
                kurr.sendMessage(from, 'Succes!', text, {quoted: mek})
                await sleep(3000)
                kurr.groupLeave(from)
					break
		
                case 'ytmp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:" YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	sticWait(from)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `* YOUTUBE SEARCH*
* Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
* Judul:* ${items[i].title}
* Id:* ${items[i].id}
* Ditonton:* ${items[i].views}
* Durasi:* ${items[i].duration}
* Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await kurr.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
* DOWNLOAD*
 ${prefix}ytmp3 [link yt] = Audio
 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							sticWait(from)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:" YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
						  case 'playy':
						  if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            query = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            query = args.join(" ")
            get_resultL = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey=KurrTod090909&query=${query}`)
            get_resultP = get_resultL.result
            textP =`
*YOUTUBE PLAY*

Judul : ${get_resultP.title}

*UNTUK MEMUTAR LAGU KLIK LINK DIBAWAH*
*ATAU MENUNGGU*
Link : ${get_resultP.audio}
            `
            kurr.sendMessage(from, textP, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${query} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultP.image_thumbnail}`,
            "mediaUrl": "https://youtu.be/4AJ0lmLXouc",
            "thumbnail": fs.readFileSync("./media/logonya2.jpeg"),
            "sourceUrl": "http://kurrxdstore.xyz"
            },mentionedJid:[sender]}, quoted : mek})
            get_audio = await getBuffer(get_resultP.audio)
            kurr.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultP.title}.mp3`, quoted: mek})
            break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
reply('Loading.... ')
				video = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${video}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				kurr.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:kurr, caption: 'Nih Gan'})
					break
						case 'ytdl':
					case 'play':
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://kurr-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 * 📑Judul :* ${res.all[0].title}
 *📑ID Video :* ${res.all[0].videoId}
 *📑 Diupload Pada :* ${res.all[0].ago}
 *📑 Views :* ${res.all[0].views}
 *📑Durasi :* ${res.all[0].timestamp}
 *📑 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'TERIMA KASIH BOT'},type:1}]

imageMessage = (await kurr.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await kurr.prepareMessageFromContent(from,{buttonsMessage},{})

kurr.relayWAMessage(prep)
break
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							kurr.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return sticOwner(from)
					return kurr.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return kurr.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await kurr.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							kurr.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'ss':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
              sticWait(from)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await kurr.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					kurr.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					kurr.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await kurr.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				kurr.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					kurr.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                kurr.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break                
             case 'add':
             reply(`*Punya Tangan Kan kontol? Kalo Punya Ya Dipake Anjengg*`)
             break
	
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    kurr.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						
                    break
                    case 'creategroup':
			case 'creategrup':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					kurr.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return sticAdmin(from)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*_©KurrXdゑ_*',
    buttons: punten,
    headerType: 1
}
await kurr.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
kurr.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
kurr.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
kurr.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 kurr.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     kurr.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer KurrXdゑ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./logonya.jpeg'),sourceUrl:"https://wa.me/p/6349482305092740/6281220670449"}}})
	}
    }
    }
    }
    }
    }
    }
    
///-------------------------------------------------------------\\\

/**
* Thx To:
KurrXd
Dcode Denpa
Yuzzu Kamiyaka
**/

///----------( Thx Dah Pake Scriptnya )----------\\\