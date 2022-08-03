const axios = require('axios').default;
const randomUseragent = require('random-useragent');
const md5 = require('md5');

async function sendData(down, up, ping, server, accuracy) {
    const hash = md5(`${ping}-${up}-${down}-297aae72`);
    const data = `startmode=recommendedselect&promo=&upload=${up}&accuracy=${accuracy}recommendedserverid=${server}&serverid=${server}&ping=${ping}&hash=${hash}&download=${down}`;
	var headers = {
		'Host': 'www.speedtest.net',
		'User-Agent': randomUseragent.getRandom(),
		'Content-Type': 'application/x-www-form-urlencoded',
		'Referer': 'http://c.speedtest.net/flash/speedtest.swf',
		'Origin': 'http://c.speedtest.net',
		'Connection': 'Close'
	}

	axios.post('http://www.speedtest.net/api/api.php', data, {"headers" : headers})
    .then((response) => {
        console.log('http://speedtest.net/my-result/' + response.data.resultid);
    })
    .catch((error) => {
        console.log('something went wrong!');
    })
}

module.exports = sendData;
