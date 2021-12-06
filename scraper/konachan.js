const axios = require('axios');
const cheerio = require('cheerio');

function konachan(q) {
	return new Promise((resolve, reject) => {
		let query = q.replace(/ /g, '_')
		axios.get('https://konachan.net/post?tags='+query+'+').then(res => {
			const $ = cheerio.load(res.data)
			const aray = []
			$('div.pagination > a').each(function(a, b) {
				const u = $(b).text()
				aray.push(u)
				let math = Math.floor(Math.random() * aray.length)
				axios.get('https://konachan.net/post?page='+math+'&tags='+query+'+').then(respon => {
					const ch = cheerio.load(respon.data)
					const result = []
					ch('#post-list > div.content > div:nth-child(4) > ul > li > a.directlink.largeimg').each(function(c, d) {
						const r = $(d).attr('href')
						result.push(r)
					})
					resolve(result)
				}).catch(reject)
			})
		}).catch(reject)
	})
}

function xnxx(q) {
	return new Promise(async (resolve, reject) => {
		await axios.get(`https://www.xnxx.com/search/${q}`, {
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const hasil = []
			$('#content-thumbs > div.mozaique.cust-nb-cols').each(function (tyu, zu) {
				$(zu).find('div').each(function (chu, chuwi) {
					const Url = $(chuwi).find('div.thumb-inside > div > a').attr('href') || undefined
					const thumb = $(chuwi).find('div.thumb-inside > div > a > img').attr('data-src') || undefined
					const judul = $(chuwi).find('div.thumb-under > p:nth-child(1) > a').text().trim() || undefined
					const View = $(chuwi).find('div.thumb-under > p.metadata > span.right > span.superfluous').text().trim() || undefined
					const Info = $(chuwi).find('div.thumb-under > p.metadata').text().trim() || undefined
					const result = {
						url: Url,
						judul: judul,
						thumb: thumb,
						view: View,
						info: Info
					}
					hasil.push(result)
				})
			})
			const hasil2 = []
			hasil.map(itzy => {
				if (itzy.url === undefined) return 
				if (itzy.judul === undefined) return 
				if (itzy.thumb === undefined) return
				if (itzy.view === undefined) return
				if (itzy.info === undefined) return
				const Format = {
					judul: itzy.judul,
					url: 'https://www.xnxx.com' + itzy.url,
					thumb: itzy.thumb,
					viewers: itzy.view,
					info: itzy.info
				}
				hasil2.push(Format)
			})
			const data = {
				status: respon.status,
				result: hasil2
			}
			resolve(data)
		}).catch(reject)
	})
}
module.exports = konachan, xnxx
