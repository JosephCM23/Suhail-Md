const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =""
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



global.devs = "2349116963707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349116963707";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_10_47_04_04_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkYrMXZNRFB0TWIxNXA0UDNhbFM5ZVJ6OGM0eXVlbmpsSTF4cUJEdk5YYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhabFhicGY2ajdFd1I0N3BUcjlGUmREYjJSVFZzL0tnZ0dOVUtWS05LQjg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaUZJbVY5WFVvZHNKM1M4dThtM0NqSFhIQ2pBMXBWRFZYMlVEWlZBOHFYTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIit0L25kZjRDeFRncCtSQVdkMWtLWm5seDZQOWpyQ2lpS1RnYjdOUmFIQ2M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUZGY2lHUURGTm1MYlN1NzRpWjg2ZHU1WFZRa3NRUEtWdXBlVm84akNHTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImJlenFWTGVBK3h5Q1E3VlNlWnRWbFRFZVZ2aDg5R01FR1F6bGVITU82d2c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJQWdYVmFScUFHU2VWSkdyNE03V3RYRzJjYlZUS2R2OW1hd3VkRVZNd1dNPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUJGU0g3cjkyNWZ1SG13c3lkM0RwU3Qram5ZNkliQzJwSHdieFAzTTdVdz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI3VjhUdi94TVNwa1Bab0VYYUZkQkxSUUpoWndvSTUvcE53NHhWdmcrN2hGaUNhWmw0cUtqeldTTHFIVktwK29LamxIcDR3Z1E0bW9kcG1FNEtIbHdndz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTU5LFwiYWR2U2VjcmV0S2V5XCI6XCJkT2tMenpWbTJ4SERYVHhwVTZIbXlBK1NqVVlLQ3VTSHdZNzdnM0lFTElBPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiQnNVdjdwSUJRUWVaZmtqbWcza0Jod1wiLFwicGhvbmVJZFwiOlwiODA2OGNiNGItNjliMi00OGM0LWJiNmYtYTA2NzA1YzZiNTBiXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsYlAzOVA5aldrbm0vb29CM2ZwbmR3bU5uZ289XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWlNFRnFRU0JaZDUvc3M4clhUN0xMUnpEdzQ0PVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlI0R0ZOVlRXXCIsXCJtZVwiOntcImlkXCI6XCIyMzQ5MTE2OTYzNzA3OjFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTU1MzgzODEzMzg2NDkzOjFAbGlkXCIsXCJuYW1lXCI6XCJzb2xvbW9uXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPblE5MUVRbllxNnNBWVlBU0FBS0FBPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiL0lFN0RsdVJyZCtnUi9sTXlJK205T3FpaVZ1SFc4Ym5PQk14UHdLUkVpZz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjZtR2JldUNOajRCVWVDdUJUSzFMVjN5eEQ4L1J0TEx0L1M1MjY5RVZ3ei8wRTZGb2hlNEVFaEE3UDNZeTJPU2JiaWFUVUx0ZzFQenpROFoycnh0WkR3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiU2lGU0JPR0xUcnBtR2dKczRnZGNmSTlqc0tlMjRNVHNTanUzR2NxWUc5TVFUK2g2Q1dnSFFKWVFjZjB5akQ5RzFzbndIbUM0OTF3WHp4TlpvbzRNaHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDkxMTY5NjM3MDc6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJmeUJPdzVia2EzZm9FZjVUTWlQcHZUcW9vbGJoMXZHNXpnVE1UOENrUklvXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjIyNzYxNixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFPaU1cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPaU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBQ2V4dTVZS2ZnOHF0dTFBVnZTeGhtSENMSFRqalFnSGVyTCtLUzdwcHBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTgyOTM1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyMjI3NjIyMjc1XCJ9Igp9",  // PUT SESSION ID HERE 
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
 
