const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Taraba,Nigeria."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348107052326";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JOSEPH-CM",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "JOSEPH-CM",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_44_02_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUgzNnpqbDE4SndER0VoSWhSa20wYjV6R3k2RHE0K0F3bVNDbDJkQ1oxbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIktuWDFtYzBtZ2lDNHJ4ZGQxckRrak1pdWtRR1RHNlUxY3RVeXNKbEdvaFk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkpWeGF5ZUFLTVhMdFh1ZEROcHlvYnJRSTRkKytyUWVoRWc2Vzk3RnJWaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdndFpXa0NRdGZjY2JkbTJybE1FQzBDTnFRQUNyaHEyNlV0Z1FhaU9Sazg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0E1b1U2dTgyejVMSnVMMHpzb1NYMmtDWnVGeTFNVlVBSHlRUGMrNEVVQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlpRZGlDQUhpSlRPZ04vQVkzNkZqNDBQK0RLL0dPS2RuSTdldVRIWncvUm89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJQVd4UWtHQktmeWMzNC96eDBHSUJXN1loQTJ2dXh3Zm5xYVdhU3Vub1VFPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSERmR0RWaFlIZ2dORUFEWWlScXdtMUFrZDNzUEk5bGNZc0tuTnFvczhVZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBdlRMOUJpUHNJV2s4VG1xZVUxWm1oS05vait0VmZycy94VDFGSG5yQ0kyN1NMLzRRbnZ1cDhaWXJkVEp0aENTc002b01MZFlJYVU5a3VzaG5GaTNBUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjI4LFwiYWR2U2VjcmV0S2V5XCI6XCJJQzRoNHUwVlhGSTQwOW5WZUU0am1FVlJlbkVwMEpBU1d0RUs1RDBSUU9ZPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODEwNzA1MjMyNkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI1RTEwQTI4RUY0NEQwRDc2OTE3MjFDRENENzgyN0IxNVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA4OTAxMDg3fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDgxMDcwNTIzMjZAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRDRCQkQxMTZDRDdDRUU3QkI4NkM2NUVERUFEREFERDlcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODkwMTA4N31dLFwibmV4dFByZUtleUlkXCI6NjEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjYxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIjduTHc0V2VRUWkyeFZBWjE0dUZKT3dcIixcInBob25lSWRcIjpcImJjZmUzNDA5LTExZTUtNDU5Zi1hZTE5LWQzMTJmNDE3NzNkNFwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRDYrN0ppMXM0M2kwWkN3aG5SbGl2V3EyNWNjPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInBWMFdjc1ZtUWlQVjRTNjZNT3VtU3luc1V0cz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJIOVI3WjZSV1wiLFwibWVcIjp7XCJpZFwiOlwiMjM0ODEwNzA1MjMyNjo1QHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJK4buMzIFTRVBIXCIsXCJsaWRcIjpcIjE3NDE5OTk5Nzk5NzE3Mjo1QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTENMaWU4REVOYUY3NjRHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjlZV3VoSXFJU2lGWmRCeGpTQzZPRHlDQ1EwdXlEVEpRcFVJMUV0L2E0Q2c9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI3MXI1RFlQdGl3NENIVnBMN0YvL3pKS2d6bUxXeStHek9nU1lPRVhlTEhwQm1LTUIyTWpRbXUxQ09qVWVOQ2R5M0tJZlVML3pCNFRHMm1yZzREY3RCUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIk9CenRNdlE5d0JZcVRERmVxdDY0K212S0VaTEVPcVNkVXZ0cnQwSWZzRGdiNFpEMGhDTXpreUlJVFNGZjhienIyMk42d2RseGJJQkZlQkU1WDMvT0JBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ4MTA3MDUyMzI2OjVAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZldGcm9TS2lFb2hXWFFjWTBndWpnOGdna05Mc2cweVVLVkNOUkxmMnVBb1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg5MDEwODIsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRnRHXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnRHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1l5c1VudmFGSkdiemdhaHZwMFlYNGdQZG82VVk5TjF1YXluUnhVV2J4UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDM4MjM5MTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg5MDEwODc2NzhcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
