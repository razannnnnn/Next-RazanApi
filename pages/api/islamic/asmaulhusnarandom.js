import "../../../config";
import fetch from "node-fetch";

export default async function handler(req, res) {
  const response = await fetch(
    "https://raw.githubusercontent.com/razn-id/data-rest-api/main/asmaulhusna.json"
  );
  let data = await response.json();
  let random = data[Math.floor(Math.random() * data.length)];

  res.status(200).json({
    status: 200,
    creator: creator,
    result: random,
  });
}