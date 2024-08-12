//―――――――――――――――――――――――――――――――――――――――――― ┏ Modules ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
import "../../../config";
import { ytMp3, ytMp4 } from "../../../lib/y2mate";
import fetch from "node-fetch";

//―――――――――――――――――――――――――――――――――――――――――― ┏ Api Youtube Downloader ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
export default async function handler(req, res) {
  let url = req.query.url;
  if (!url)
    res.json({
      status: false,
      creator: creator,
      message: "[!] Masukan parameter url",
    });
  let mp3 = await ytMp3(url);
  let mp4 = await ytMp4(url);
  res.status(200).json({
    status: 200,
    creator: creator,
    result: {
      title: mp4.title,
      desc: mp4.desc,
      thum: mp4.thumb,
      view: mp4.views,
      channel: mp4.channel,
      uploadDate: mp4.uploadDate,
      mp4: {
        result: mp4.result,
        size: mp4.size,
        quality: mp4.quality,
      },
      mp3: {
        result: mp3.result,
        size: mp3.size,
      },
    },
  });
}
