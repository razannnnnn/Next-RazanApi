import "../../../config";
import "../../../lib/dl";

export default async function handler(req, res) {
  let url = req.query.url;
  if (!url)
    res.json({
      status: false,
      creator: creator,
      message: `[!] Masukan parameter url`,
    });

  razan
    .musically(url)
    .then((data) => {
      if (!data) res.status(302).json(loghandler.noturl);
      res.status(200).json({
        status: 200,
        creator: creator,
        result: data,
      });
    })
    .catch((e) => {
      res.json(loghandler.noturl);
    });
}
