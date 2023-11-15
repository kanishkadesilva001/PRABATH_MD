const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94722477361")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:5ebE1FAadB-ddG43EbB1155ebHFFeG-b@monorail.proxy.rlwy.net:41152"
global.port= process.env.PORT || 5000
global.email = 'Queentharu@hotmail.com'
global.github = 'https://github.com/kanishkadesilva001/PRABATH_MD'
global.location = 'Sri Lanka LK'
global.gurl = 'https://chat.whatsapp.com/LMmXk7bI8CjJhgiPabjnpm' // add your username
global.devs = '94762280384';
global.website = 'https://urlis.net/queen_tharu ' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || '꧁༒༺ ℚ𝕌𝔼𝔼ℕ 𝕋ℍ𝔸ℝ𝕌 ༻༒꧂',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94762280384',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*Hҽყ  Tԋҽɾҽ  I`ɱ  Queen Tharu ||°* ♥️ 🪄

🎗️ Hey Friends , 
Welcome  to  *Queen Tharu* 🪼
So , I think this bots are useful 
to you . 😊
Nice to meet you 🤝
*Thankyou* ♥️ 🪄 

*➮ Owner - 𝕂𝔸ℕ𝕀𝕊ℍ𝕂𝔸 𝔻𝔼 𝕊𝕀𝕃𝕍𝔸*
*➮ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚂𝙿𝙴𝙴𝙳 - 73Ms*
*➮ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - 63.3GB*

📒 𝙳𝚘 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚊𝚕𝚕 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ?
𝚃𝚢𝚙𝚎 & 𝚂𝚎𝚗𝚍 -  *.menu*  or  *.list*

ConnectUs ✅
*https://wa.me/+94728127082?text=*Hҽყ_Queen_Tharu_||°*_♥️_🪄

GroupLink  ❄️
*~_https://chat.whatsapp.com/LMmXk7bI8CjJhgiPabjnpm_~*

*#QueenTharu*
*#IKbot𝚣𝙵𝚊𝚖𝚒𝚕𝚢*',
  ownername:process.env.OWNER_NAME || '𝕂𝔸ℕ𝕀𝕊ℍ𝕂𝔸 𝔻𝔼 𝕊𝕀𝕃𝕍𝔸 ',
  sessionName: process.env.SESSION_ID || 'szlDiSJI#QQ1ncT2FhctQmnNVnw0G0yZSLrvQ-V-4DwCrAssPsT8',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || '༺ℚ𝕌𝔼𝔼ℕ 𝕋ℍ𝔸ℝ𝕌༻',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'tsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'kanishkadesilva988',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '67bbd085-dad4-40d4-aca1-d4d6bd435752',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '*Hҽყ  Tԋҽɾҽ  I`ɱ  Queen Tharu ||°* ♥️ 🪄

🎗️ Hey Friends , 
Welcome  to  *Queen Tharu* 🪼
So , I think this bots are useful 
to you . 😊
Nice to meet you 🤝
*Thankyou* ♥️ 🪄 

*➮ Owner - 𝕂𝔸ℕ𝕀𝕊ℍ𝕂𝔸 𝔻𝔼 𝕊𝕀𝕃𝕍𝔸*
*➮ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚂𝙿𝙴𝙴𝙳 - 73Ms*
*➮ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - 63.3GB*

📒 𝙳𝚘 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚊𝚕𝚕 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ?
𝚃𝚢𝚙𝚎 & 𝚂𝚎𝚗𝚍 -  *.menu*  or  *.list*

ConnectUs ✅
*https://wa.me/+94728127082?text=*Hҽყ_Queen_Tharu_||°*_♥️_🪄

GroupLink  ❄️
*~_https://chat.whatsapp.com/LMmXk7bI8CjJhgiPabjnpm_~*

*#QueenTharu*
*#IKbot𝚣𝙵𝚊𝚖𝚒𝚕𝚢*',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'QUEEN-THARU-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
