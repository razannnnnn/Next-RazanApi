require("dotenv").config();

//_______________________ ┏  Main Setting  ┓ _______________________\\

creator = process.env.creator; // Nama
baseUrl = process.env.baseUrl;
LimitApikey = 200; // Limit Apikey default

//_______________________ ┏  Loghandler  ┓ _______________________\\

loghandler = {
  error: {
    status: false,
    code: 503,
    message: "[!] Service Unavaible Or Error",
    maintanied_by: `${creator}`,
  },
  noturl: {
    status: false,
    code: 403,
    message: "[!] Forbiden or Error, Invlid url",
    maintanied_by: `${creator}`,
  },
  notfound: {
    status: false,
    code: 404,
    message: "[!] Forbiden or Error, Not Found",
    maintanied_by: `${creator}`,
  },
  notid: {
    status: false,
    code: 404,
    message: "[!] Forbiden or Error, Invalid Id or Zone",
    maintanied_by: `${creator}`,
  },
  redy: {
    status: false,
    code: 403,
    message: "[!] Forbiden or Error, Alias ​​already in use",
    maintanied_by: `${creator}`,
  },
  emoji: {
    status: false,
    code: 403,
    message: "[!] Forbiden or Error, Emoji not Found",
    maintanied_by: `${creator}`,
  },
  instgram: {
    status: false,
    code: 403,
    message:
      "[!] Forbiden or Error, Username tidak ditemukan atau account private",
    maintanied_by: `${creator}`,
  },
  register: {
    status: false,
    code: 403,
    message: "[!] Please Register First",
  },
  verify: {
    status: false,
    code: 403,
    message: `[!] Please Verify Email, Check Your Inbox / Spam Folder, If Nothing Open Url ${baseUrl}/send-verification-email`,
  },
};
