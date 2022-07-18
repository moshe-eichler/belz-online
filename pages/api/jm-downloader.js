const url = require('url');
const https = require('https');
// require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();


export default async (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
    });
    const response = await fetch("https://jewishmusic.fm/jmusic/mp3sec/stream?loc=%2Fwp-content%2Fuploads%2Fsecretmusicfolder1%2Fa-z%2Fb%2Fberry-weber%2Fkorban%2F01---retzoin-boreini.mp3", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "range": "bytes=0-",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-mp3sec": "eyJ0cyI6MTY1NDIwNTI3MTM5MywiaWQiOiJtcDNzZWNfMjA5MTUxNTA1NzYyOTkyYjU1ZTBmYTYwLjQ4ODI0MjgxIn0=",
          "cookie": "pll_language=he; _ga=GA1.2.1589441981.1652028317; _gid=GA1.2.1909881640.1654203915; _au_1d=AU1D-0100-001654203921-CX1UIFAH-6H8V; _au_last_seen_apn=1654203920771; _au_last_seen_ttd=1654203920771; _au_last_seen_pub=1654203920771; _au_last_seen_adx=1654203920771; _au_last_seen_goo=1654203920771; _au_last_seen_ppnt=1654203920771; _au_last_seen_rub=1654203920771; _au_last_seen_ado=1654203920771; _au_last_seen_son=1654203920771; _au_last_seen_smart=1654203920771; _au_last_seen_openx=1654203920778; _au_last_seen_mediamath=1654203920778; _au_last_seen_impr=1654203920778; _au_last_seen_taboola=1654203920778; _au_last_seen_unruly=1654203920778; _au_last_seen_bees=1654203920778; _fbp=fb.1.1654203928482.1364930564",
          "Referer": "https://jewishmusic.fm/sw.js",
          "Referrer-Policy": "no-referrer-when-downgrade"
        },
        "body": null,
        "method": "GET",
        "agent": httpsAgent
      });
    response
    console.log(response);
    return res.json({"message": response});
}