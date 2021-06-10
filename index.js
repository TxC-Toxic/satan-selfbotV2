//RECODE BY MHANKBARBAR
//SELF BOT BY ZITSRAA
//YANG PASTI DISINI BANYAK YANG GUA COPAS
//TAMBAHIN NICK GUA LAH "ZITSRAA"
//JANGAN CUMA PAKE DOANG
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//*********** CUSTOMABLE ***********//
prefix = ''
f = '_'
blocked = []
fake = '- SATANCITAᵉˡⁱ⛥ -'
fakeimage = fs.readFileSync(`./media/zitsraa.jpeg`)
numbernye = '0'
join = '\`\`\`HOLI, Bienvenido al grupo UwU\n Soy la bot del Grupo,espero ser de tu agrado, lee las reglas pofi >~<💞\n - [ SATANCITAᵉˡⁱ⛥ ] -'
leave = '\`\`\`Adios sempai T-T Baka~ \`\`\`'
promote = '*Admin facherito eh OwO*'
demote = '*baka~*'
public = false

//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:SATANCITAᵉˡⁱ⛥シ︎\n'
            + 'ORG:Owner Satancito;\n'
            + 'TEL;type=CELL;type=VOICE;waid=12602746309:+1 (260) 274-6309\n'
            + 'END:VCARD'
            
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:SATANCITAᵉˡⁱ⛥シ︎\n'
            + 'ORG:Owner Satancito;\n'
            + 'TEL;type=CELL;type=VOICE;waid=50373488366:+503 7348 8366\n'
            + 'END:VCARD'
//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'AbilGanss'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = 'apivinz'
const LolKey = 'save123'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
function tanggal(){
myMonths = ["enero","febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","octubre","Noviembre","Deciembre"];
			myDays = ['domingo','lunes','martes','miércoles','jueves','Viernes','sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Zitsraa = new WAConnection()
	Zitsraa.logger.level = 'warn'
	console.log(banner.string)
	Zitsraa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el QR sempai~'))
	})

	fs.existsSync('./zitsraa.json') && Zitsraa.loadAuthInfo('./zitsraa.json')
	Zitsraa.on('connecting', () => {
		start('2', 'Soy un poco lenta, espera T-T...')
	})
	Zitsraa.on('open', () => {
		success('2', 'Conectada!!!👌..')
	})
	await Zitsraa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./zitsraa.json', JSON.stringify(Zitsraa.base64EncodedAuthInfo(), null, '\t'))

	Zitsraa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
*Join Group : ${mdata.subject}*
 
 ${join}`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Zitsraa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*User : @${num.split('@')[0]}*
${leave}	`
				let buff = await getBuffer(ppimg)
				Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Numero :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Grupo :\`\`\` ${mdata.subject}

${promote}`
			Zitsraa.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Zitsraa.groupMetadata(anu.jid)
			try {
					ppimg = await Zitsraa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Numero :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`Usuario :\`\`\` @${num.split('@')[0]}

\`\`\`Grupo :\`\`\` ${mdata.subject}

${demote}`
			Zitsraa.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

Zitsraa.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Zitsraa.sendMessage(callerId, "Sistema de bloqueo automático, no llames por favor", MessageType.text)
        await sleep(4000)
        await Zitsraa.blockUser(callerId, "add") // Block user
})
	Zitsraa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Zitsraa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: ' Soy lenta, espera T-T ',
				success: '✔️ Listooo ✔️',
				error: {
					stick: '❌ Falló, se produjo un error al convertir la imagen en una pegatina ❌',
					Iv: '❌ Enlace inválido ❌'
				},
				only: {
					group: '❌ Este comando solo se puede usar en grupos! ❌',
					ownerG: '❌ Este comando solo puede ser utilizado por el propietario del grupo! ❌',
					ownerB: '❌ Este comando solo puede ser utilizado por el propietario del bot! ❌',
					admin: '❌ Este comando solo puede ser utilizado por administradores de grupo! ❌',
					Badmin: '❌ Este comando solo se puede usar cuando el bot se convierte en administrador! ❌'
				}
			}
      const totalchat = await Zitsraa.chats.all()
			const botNumber = Zitsraa.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Zitsraa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Zitsraa.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				Zitsraa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Zitsraa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			Zitsraa.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "50373488366@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/zitsraa.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/zitsraa.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/zitsraa.jpeg`)
					},
					"title": fake,
					"description": "SATANCITAᵉˡⁱ⛥",
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Satancito",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       Zitsraa.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       Zitsraa.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }


			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Zitsraa.contacts[from] != undefined ? Zitsraa.contacts[from].vname || Zitsraa.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			  
			     case 'help':
                case 'menu':
                
      menu =`┌──「 SATANCITAᵉˡⁱ⛥ 」───
      

➤⌔ ${f}${prefix}satangrupo${f}
➤⌔ ${f}${prefix}sticker Reply img${f}
➤⌔ ${f}${prefix}rsticker Reply img${f}
➤⌔ ${f}${prefix}stickergif Reply video${f}
➤⌔ ${f}${prefix}stickerwa Query${f}
➤⌔ ${f}${prefix}stickerwm Nama|Author${f}
➤⌔ ${f}${prefix}nobg Reply img${f}
➤⌔ ${f}${prefix}attp Text${f}
➤⌔ ${f}${prefix}ttp Text${f}
➤⌔ ${f}${prefix}take Nama|Author${f}
➤⌔ ${f}${prefix}exif Nama|Author${f}
➤⌔ ${f}${prefix}togif Reply stickergif${f}
➤⌔ ${f}${prefix}tovideo Reply sticker${f}
➤⌔ ${f}${prefix}toimg Reply sticker${f}
➤⌔ ${f}${prefix}slot${f}
➤⌔ ${f}${prefix}slot2${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}self${f}
➤⌔ ${f}${prefix}public${f}
➤⌔ ${f}${prefix}mute${f}
➤⌔ ${f}${prefix}unmute${f}
➤⌔ ${f}${prefix}encendido${f}
➤⌔ ${f}${prefix}ping${f}
➤⌔ ${f}${prefix}term${f}
➤⌔ ${f}${prefix}blocklist${f}
➤⌔ ${f}${prefix}run${f}
➤⌔ ${f}${prefix}chatlist${f}
➤⌔ ${f}${prefix}owner${f}
➤⌔ ${f}${prefix}join Linkgroup${f}
➤⌔ ${f}${prefix}getpic @tag${f}
➤⌔ ${f}${prefix}getbio @tag${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}pin${f}
➤⌔ ${f}${prefix}unpin${f}
➤⌔ ${f}${prefix}archive${f}
➤⌔ ${f}${prefix}unarchiveall${f}
➤⌔ ${f}${prefix}readall${f}
➤⌔ ${f}${prefix}delthischat${f}
➤⌔ ${f}${prefix}shutdown${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}hidetag Text${f}
➤⌔ ${f}${prefix}stctag Tag Stc${f}
➤⌔ ${f}${prefix}imgtag Tag Img${f}
➤⌔ ${f}${prefix}kontag Text${f}
➤⌔ ${f}${prefix}kontak 6281xxx Nama${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}setthumb${f}
➤⌔ ${f}${prefix}setreply${f}
➤⌔ ${f}${prefix}setbodymenu${f}
➤⌔ ${f}${prefix}setwelcome${f}
➤⌔ ${f}${prefix}setleave${f}
➤⌔ ${f}${prefix}setpromote${f}
➤⌔ ${f}${prefix}setdemote${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}upswtext${f}
➤⌔ ${f}${prefix}upswimg${f}
➤⌔ ${f}${prefix}upswvideo${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}welcome 1/0${f}
➤⌔ ${f}${prefix}linkgroup${f}
➤⌔ ${f}${prefix}group cerrar/abrir${f}
➤⌔ ${f}${prefix}add 6281xxx${f}
➤⌔ ${f}${prefix}kick @tag${f}
➤⌔ ${f}${prefix}promote @tag${f}
➤⌔ ${f}${prefix}demote @tagadmin${f}
➤⌔ ${f}${prefix}demoteall${f}
➤⌔ ${f}${prefix}edotensei @tag${f}
➤⌔ ${f}${prefix}listadmin${f}
➤⌔ ${f}${prefix}online${f}
➤⌔ ${f}${prefix}infoall${f}
➤⌔ ${f}${prefix}notif${f}
➤⌔ ${f}${prefix}leave${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}addstik Optional${f}
➤⌔ ${f}${prefix}adimg Optional${f}
➤⌔ ${f}${prefix}addvid Optional${f}
➤⌔ ${f}${prefix}addvn Optional${f}
➤⌔ ${f}${prefix}getstik Query${f}
➤⌔ ${f}${prefix}getimg Query${f}
➤⌔ ${f}${prefix}getvid Query${f}
➤⌔ ${f}${prefix}getvn Query${f}
➤⌔ ${f}${prefix}liststick${f}
➤⌔ ${f}${prefix}listimg${f}
➤⌔ ${f}${prefix}listvid${f}
➤⌔ ${f}${prefix}listvn${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
➤⌔ ${f}${prefix}play Query${f}
➤⌔ ${f}${prefix}ig Url${f}
➤⌔ ${f}${prefix}tiktok Url${f}
➤⌔ ${f}${prefix}ytmp3 Url${f}
➤⌔ ${f}${prefix}ytmp4 Url${f}
⌸    ﹀﹀﹀﹀﹀﹀﹀﹀﹀﹀     ⌸
└──「 _*SATANCITAᵉˡⁱ⛥*_  」───`
Zitsraa.sendMessage(from , menu, text,{quoted : freply})
                  break
  //********** SELF&PUBLIC **********//
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Usted es propietario?*')
			    public = false
			    Zitsraa.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :freply})
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Usted es propietario?*')
			    public = true
			    Zitsraa.sendMessage(from, `\`\`\`Status : PUBLIC\`\`\``, text,{quoted :freply})
			    break
			    
			    case 'mute':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                Zitsraa.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*Muteados putos ÙwÚ*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                Zitsraa.modifyChat(from, ChatModification.unmute)
                reply('*Ù.Ú sus mensajes me caen denuevo*')
                console.log('succes unmute chat = ' + from)
                break
                case 'slot2':
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=AkiraBotWa`)
                        txt = `*🎰Slot adquirido🎰* \n\n${result.map}\n`
                        txt += `\n🔖Resultado : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
			    case 'unpin':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                Zitsraa.modifyChat(from, ChatModification.unpin)
                reply('*abajo UnU*')
                console.log('unpin chat = ' + from)
                break
                case 'bakarnama': 				
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti DappaGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				Zitsraa.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Ngab' })
				break
            case 'pin':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                Zitsraa.modifyChat(from, ChatModification.pin)
                reply('*Fijados UvU*')
                console.log('pinned chat = ' + from)
                break
            case 'unreadall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Marcados sin leer ${chats.length} chats !\`\`\``
		    await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                var chats = await Zitsraa.chats.all()
                chats.map( async ({ jid }) => {
                await Zitsraa.chatRead(jid)
                })
		var teks = `\`\`\`Han sido leidos ${chats.length} chats !\`\`\``
	        await Zitsraa.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                reply('*éxito desarchivar todo el chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Zitsraa.chats.all()
                for (let _ of anu) {
                Zitsraa.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            Zitsraa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
            case 'archive':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                reply('*okey wait..*')
                console.log('chat de archivo de éxito = ' + from)
                await sleep(3000)
                Zitsraa.modifyChat(from, ChatModification.archive)
                break
            case 'delthischat':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
                reply('*éxito eliminar este chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                Zitsraa.modifyChat(from, ChatModification.delete)
                break
                
                case 'shutdown':
                if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
	        await Zitsraa.sendMessage(from, `Bye...\n_SATANCITAᵉˡⁱ⛥ apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                Zitsraa.close()
		break
		
		case 'demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Zitsraa.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//
			
			case 'satangrupo':
			case 'groupsatan':
                  reply ('https://chat.whatsapp.com/J72bXsh3gRxKufBl8iikDO')
                break

  case 'setleave':
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					Zitsraa.sendMessage(from,`\`\`\`Leave cambiado exitosamente a : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setpromote':
				  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					Zitsraa.sendMessage(from,`\`\`\`La promoción se ha cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setdemote':
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Degradar cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case 'setbodymenu':
				  if (args.length < 1) return reply('*_EJEMPLO :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Ejemplos de uso : .setbodymenu *')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					Zitsraa.sendMessage(from ,`\`\`\`Body menu cambiado exitosamente a : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case 'setwelcome':
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					Zitsraa.sendMessage(from ,`\`\`\`Bienvenida se ha cambiado con éxito a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case 'setreply':
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    Zitsraa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					Zitsraa.sendMessage(from, `reply cambiado exitosamente a : ${fake}`,text,{quoted : freply})
				break 
				
				case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/Zitsraa.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `\`\`\`Cambiar miniaturas con éxito\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Zitsraa.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Zitsraa.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Zitsraa.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case 'join':
                           if (!q) return reply('Ingrese el enlace del grupo')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
                           var response = await Zitsraa.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
          //Satangroup
         
        //********** SYSTEM **********//
        case 'return':
                                case 'run':
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return Zitsraa.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                Zitsraa.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             
				
				case 'blocklist':
				  case 'listblock':
					teks = 'Personas mala conmigo T-T :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Zitsraa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case 'exif':
	        if (!mek.key.fromMe) return reply('*No eres mi dueño >n<?*')
	        if (args.length < 1) return reply(`Usar ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Usar ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('Listo UvU')
	        break
	        
	        case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await Zitsraa.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case 'take':
					if (!isQuotedSticker) return reply(`Responder a un sticker con *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					Zitsraa.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Responde un sticker')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Zitsraa.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Envía una imagen con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
					
					case 'fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/zitsraa.jpeg').replace(/\"/gi, ''))

					Zitsraa.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case 'nobg':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: freply})
}
break
					
					case 'textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
Zitsraa.sendMessage(from, buff, image, {quoted: freply})
}
break
					
case 'attp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}attp satan Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				Zitsraa.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		case 'ttp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}ttp satan Ganteng*`)
				ttp = await getBuffer(`http://lolhuman.herokuapp.com/api/ttp?apikey=${LolKey}&text=${body.slice(5)}`)
				Zitsraa.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					case 'tiktoknowm':
                if (args.length < 1) return reply('Y el link?')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
                ige = body.slice(12)
                anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolhuman}&url=${args[0]}`, { method: 'get' })
                reply('*Procese primero sea paciente*')
                if (anu.error) return reply(anu.error)
                buffer = await getBuffer(anu.result.link)
                Zitsraa.sendMessage(from, buffer, video, {quoted: freply, caption: 'Nih cuk, Sewa Bot Asu'})
                break
            case 'tiktod':
            case 'tiktok':
                if (args.length < 1) return reply('y el link?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
                anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=${XteamKey}`, )
                reply('[WAIT] espera e T-T')
                buffer = await getBuffer(anu.result.video)
                Zitsraa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: freply })
                break
                case 'nulis2':
            case 'tulis2':
                if (args.length < 1) return reply('¿Dónde está el texto, hermano?? ejemplo : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(8)
                reply('ESPERA BRO YO ESCRIBO DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
                Zitsraa.sendMessage(from, buff, image, { quoted: freply, caption: 'Mejor escribirlo tu mismo :*' })
                break
            case 'nulis1':
            case 'tulis1':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 ITS baik hati')
                laysha = body.slice(8)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
                Zitsraa.sendMessage(from, buff, image, { quoted: freply, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
                case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LolKey}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, tebakbender, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolKey}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LolKey}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, family, text, {quoted: lol}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LolKey}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Zitsraa.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Zitsraa.sendMessage(from, caklontong, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'asupan':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolKey}`)
                    buffer = await getBuffer(get_result.result)
                    Zitsraa.sendMessage(from, buffer, video, { quoted: freply, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${LolKey}`, {method: 'get'})
				Zitsraa.sendMessage(from, buffer, image, {quoted: lol})
                break
                    case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} satan`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolKey}&img=${x}`)
                        Zitsraa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case 'rs':
                      case 'rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case 'swm':
                    case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Zitsraa|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Zitsraa.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`responde a un sticker con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
                    
		case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
						keyrmbg = 'C5ZeygbiedTZixDJJrm663Az'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								Zitsraa.sendMessage(from, buff, sticker, {quoted: freply})
							})
						    })					
					} else {
						reply(`Responde a una imagen con ${prefix}sticker`)
					}
					break
					
					case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Zitsraa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 
				
					
					case 'ping':
					  const chatsIds = await Zitsraa.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${Zitsraa.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                Zitsraa.sendMessage(from, p0, text, { quoted: freply})
                    break
                    
					case 'encendido':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : SATANCITAᵉˡⁱ⛥*_
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             Zitsraa.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           
			           case 'term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Zitsraa.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
Zitsraa.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  
					  case 'kontak':
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('numero invalido UnU'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            Zitsraa.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            
			     case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Zitsraa.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Zitsraa.user.jid.split('@')[0]}:${Zitsraa.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Zitsraa.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/zitsraa.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await Zitsraa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Zitsraa.sendMessage(from, options, text,{quoted : freply})
					break
					
					  
					
			           case 'stctag':
                                        if (!isQuotedSticker) return reply('y el sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Zitsraa.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Zitsraa.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Zitsraa.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Zitsraa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Zitsraa.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Zitsraa.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag a una imagen enviada`)
                    }
                    break
                    
                    case 'owner':
                 Zitsraa.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                 Zitsraa.sendMessage(from, 'Mi creadora UwU, nada de spam o bloqueo UnU:)',text, { quoted: freply} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Zitsraa.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Zitsraa.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case 'grup':
					case 'gc':
					case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						Zitsraa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case 'chatlist':
				case 'cekchat':
					Zitsraa.updatePresence(from, Presence.composing)
					Zitsraa.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
					case 'demote':
			      case 'dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, no eres administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Zitsraa.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'promote':
				case 'pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, te conviertes en administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Zitsraa.groupMakeAdmin(from, mentioned)
					}
					break
					
					case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activado sempai~ UwU ')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivada U~U ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                    break
                    
					case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país sempai')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Zitsraa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					break
					
			    case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Zitsraa.chats.get(ido).presences), Zitsraa.user.jid]
                Zitsraa.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case 'infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ SATANCITAᵉˡⁱ⛥-\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 SATANCITAᵉˡⁱ⛥ 」* ', members_id, true)
					break
					
					case 'edotensei':
					  case 'edotense':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Se expulso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					} else {
						mentions(`Se expulso a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Zitsraa.groupRemove(from, mentioned)
					}
					break
					
					case 'notif':
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Zitsraa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await Zitsraa.sendMessage(from, options, text)
break

      case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await Zitsraa.groupLeave(from, `Bye pequeños de *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case 'addstik':
				if (!isQuotedSticker) return reply('Responde un sticker')
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Zitsraa.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Paquete no registrado')
				}
				break
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'addimg':
				if (!isQuotedImage) return reply('Responde una imagen')
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Zitsraa.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case 'addvid':
				if (!isQuotedVideo) return reply('Responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Zitsraa.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'addvn':
				if (!isQuotedAudio) return reply('Responde un audio')
				svst = body.slice(7)
				if (!svst) return reply('Nombre del vn')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Zitsraa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Zitsraa.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Zitsraa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Zitsraa.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				
				
				
				case 'play':   
				  if (args.length < 1) return reply('*que buscare OnO?*')
                Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${play}&APIKEY=${XteamKey}`)
				if (anu.error) return reply(anu.error)
				infomp3   =`*「 Play To Mp3 」*
				
nombre : ${anu.judul}
Size : ${anu.size}
Source : ${anu.source}
				
*_Ya lo envio, esperame porfi T~T.._* `
				buffer = await getBuffer(anu.thumbnail)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
        lagu = await getBuffer(anu.url)
				Zitsraa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break
				
				case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Video Ditemukan!!!*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*_Tunggu Sebentar.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Zitsraa.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				Zitsraa.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break 
				
        case 'ig':
          if (args.length < 1) return reply('*Url?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=apivinz`, {method: 'get'})
					tods = ` Instagram DOWNLOADER

Username : ${anu.owner}
Caption : ${anu.caption}
`
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result[0].url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: freply, caption : tods})
					break 
					
case 'fb':
  if (args.length < 1) return reply('*Url?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Título :* ${anu.result.judul}`
					
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					
case 'tiktok':
  if (args.length < 1) return reply('*Url?*')
					query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${query}&apikey=apivinz`, {method: 'get'})
					
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					pyu = `*TIKTOK DOWNLOADER*
					
Author : ${anu.author}
Title : ${anu.title}	`
					buffer = await getBuffer(anu.no_watermark)
					buff = await getBuffer(anu.audio)
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.no_watermark}.mp4`, quoted: freply, caption: pyu})
					Zitsraa.sendMessage(from, buff, audio, {quoted : freply})
					break
				
				case 'ytmp4':
				  if (args.length < 1) return reply('*Url?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 BY SATAN* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case 'ytmp3':
				  if (args.length < 1) return reply('*Url?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3 BY SATAN* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Zitsraa.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					Zitsraa.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Zitsraa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break

//********** UPLOAD **********
case 'upswtext':
					Zitsraa.updatePresence(from, Presence.composing)
					Zitsraa.sendMessage('status@broadcast', `${q}`, extendedText)
					Zitsraa.sendMessage(from, `Success Up story wea text ${q}`, text,{quoted : freply})
					break
					
				case 'upswimg':
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Subir correctamente la imagen de la historia con título: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case 'upswvideo':
					Zitsraa.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Zitsraa.downloadMediaMessage(swsw)
						Zitsraa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Subir correctamente el vídeo de la historia con subtítulo: ${q}`
					Zitsraa.sendMessage(from, bur, text, { quoted: mek })
					break

				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
