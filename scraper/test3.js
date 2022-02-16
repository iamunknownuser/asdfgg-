const axios = require('axios');

async function fbdl(url) {
  const furl =  url.split('&');
  const surl = furl[0]
  const fullURL ='https://youtube4kdownloader.com/ajax/getLinks.php?video=' + surl + '&rand=a95ce6c6be8b6'; 
  const result = await axios.get(fullURL)
  const metadata =  result.data.data;
  if (metadata.av[0].quality == 'unknown') {
  let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[1].fid,
                   ext: metadata.av[1].ext,
                   url:metadata.av[1].url,
                  
                 },
                { quality: metadata.av[0].fid,
                  ext: metadata.av[0].ext,
                  url:metadata.av[0].url,
                  
                }
                                         ]
  };
   return data;
  } else if (metadata.av[2].quality == 'unknown') {
    if(!metadata.av[3]){
      let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: 'hd',
                   ext: metadata.av[1].ext,
                   url:metadata.av[1].url,
                  
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
   return data;
  }
  else if(metadata.av[3].quality == 'unknown'){let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[3].fid,
                   ext: metadata.av[3].ext,
                   url:metadata.av[3].url,
                  
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
   return data;
  } }
  else if (metadata.av[4].quality == 'unknown') {
  let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[5].fid,
                   ext: metadata.av[5].ext,
                   url:metadata.av[5].url,
                  
                 },
                { quality: metadata.av[4].fid,
                  ext: metadata.av[4].ext,
                  url:metadata.av[4].url,
                  
                }
                                         ]
  };
   return data;
  }
  else { let data = {
              title: metadata.title,
              duration: metadata.duration,
              thumbnail: metadata.thumbnail,
              medias: [
                 { quality: metadata.av[3].fid,
                   ext: metadata.av[3].ext,
                   url:metadata.av[3].url,
                   
                 },
                { quality: metadata.av[2].fid,
                  ext: metadata.av[2].ext,
                  url:metadata.av[2].url,
                  
                }
                                         ]
  };
  return data;
  }
}
  module.exports = fbdl;
