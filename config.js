const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="josephmaduka2326@gmail.com"
global.location="Taraba,Nigeria."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://www.peakpx.com/en/hd-wallpaper-desktop-fsqau.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348107052326" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348107052326";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '4',  // put '1' to "5" here to check bot styles
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" ,
  
  author : process.env.PACK_AUTHER|| "JOSEPH-CM",
  packname: process.env.PACK_NAME || "STICKER",
  botname : process.env.BOT_NAME  || "CHAT-GPT",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_21_55_02_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOENPYzBqOHRxU1BKOXBSUDhxTk0zN05oV1JSNmJFK2MxaDVBUTdNVmRGcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNSZCtjY1VCbU9xdUxRUVhQQ3ltL3Z3T1JGQUdzRUxaZ21jMlZ0WFlJeE09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTU1nU01UenZtOTFsYXdMRmlWSmJITHZVbG1ZVE5aYnhMNUoyQ3h2bXNHWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm0yVGlaSm81eW9rc0lld0NkdHQxZ2llMFh3WmFidDBNS1ZZNVZZdU1zeTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib1BpbklZWG4zVkR2VWsyQ0lpUzVLN3V4T2wxMndoeklEanpDcWVLUHhIcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkhUaXRaeHp0STU3N3BMWWFsNEJicmhNcE5uSTQxaFRvSmErZ2pVbnpvRG89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4TE9GVGE1bjUzRDNvOVRXWHVUakdITVZWUFZsa3VXSmphS1k4TWlmMmxzPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTWR3bkpubXd4QlphZ1RLZDlXOTFadEExNVBQUm91TXFUVnhkeEJPMWpqWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5cWRZb2hkQU9Jc2tkZUFwaEFJUzVSc2JRTVNIYSs3THBSRHBobjk1VHlWajhPSlkxMFB3enNjYXl2bUZkTmhGZnBSTkh5RStRZ0diQzRGVXd2bnFBZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTY1LFwiYWR2U2VjcmV0S2V5XCI6XCJJS05FeVpBWVh3eWp0dWFHUUo4Z1Avdnc5TFRGSEU3c0VXVHRoOVdLOGswPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODEwNzA1MjMyNkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIwRUI3RkIyNTYyQjQ3MDYxMDZENTYwMUE1OUI3RDlDM1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA5MjQzNzE4fSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjIzNDgxMDcwNTIzMjZAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMkI1MDI5QzdBQjM1RTJFNUMzRjI5NTIwRjEyN0NDRDBcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwOTI0MzcxOH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcInkwMkhxWmJpU2NtUFQ1Z09KaF9wa2dcIixcInBob25lSWRcIjpcIjllNWRmNjViLWZiZGQtNDM0Yy1hMGU3LTBmZDBjMTQ5ZTI2NVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNXhmUFU5SndRdzF0d2FSWUREZHZKNk4rNGEwPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFDSUt0QzE2eEljb1dsc2JnNTV6VThDN3JmST1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJYS1BBWlk5NVwiLFwibWVcIjp7XCJpZFwiOlwiMjM0ODEwNzA1MjMyNjoxMEBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiSuG7jMyBU0VQSFwiLFwibGlkXCI6XCIxNzQxOTk5OTc5OTcxNzI6MTBAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNMYUxpZThERUwvNmc2OEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiOVlXdWhJcUlTaUZaZEJ4alNDNk9EeUNDUTB1eURUSlFwVUkxRXQvYTRDZz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjdWTldVQWYyaGpKb1BWeGZiWmVlVFNZSy8zRjhXOTA3eDRIenduUGZRN1BpT0hUWDZVV2lhWXE0OXJHQ0ZjY0RHWUMyTHZMRFM0a1FEbCtDYTgwTEJRPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwibWpBT293UWsvVGd4cUpncWwyN0VHaEk2TDlFaWQ3WTdFVVJOcGZoU0Z1blVTT2lIVzlLaG9GcHFxVWhLVkZsUHptcnRBUWpTWEJQdDBqcmd2WE9LQmc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDgxMDcwNTIzMjY6MTBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZldGcm9TS2lFb2hXWFFjWTBndWpnOGdna05Mc2cweVVLVkNOUkxmMnVBb1wifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDkyNDM3MTQsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRnJ5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnJ5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVJDN1llWW80SS9sQlhZTm9DWUIwRndWTXIwRmV1eXpRbWZvSytldEVsQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDM4MjM5MTU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDkyNDM3MTYxNzhcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
