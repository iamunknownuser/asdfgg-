const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const author = "sanuwa"
async function  telestic(url)  {
    
        const packName = url.replace("https://t.me/addstickers/", "")
        const id= packName.replace("tg://addstickers?set=","")
       const  data = await axios('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' + id, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
           const fileId = data.data.result.stickers[i].thumb.file_id
           const data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
           const  result = {
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
   return hasil 
    
}
module.exports = telestic;
