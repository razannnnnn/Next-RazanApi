//―――――――――――――――――――――――――――――――――――――――――― ┏  Modules ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

const axios = require("axios");

//―――――――――――――――――――――――――――――――――――――――――― ┏  Instagram Downloader Api ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

async function exportInsta_Data(url) {
  var data = await axios({
    method: "post",
    url: "https://instasupersave.com/api/convert",
    data: {
      url: url,
      cancelToken: {
        promise: {},
      },
      client_options: '{"mediaDownloaderHost":"media.instasupersave.com"}',
    },
  });
  return data.data;
}
function getInstaLink() {
  return "https://instasupersave.com/api/convert";
}
module.exports = exportInsta_Data;
