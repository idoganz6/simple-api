const express = require('express')
var router = express.Router();
__path = process.cwd()
const fs = require('fs')
const { getBuffer } = require('../lib/function')

//scraper
const { pinterest, randomTiktok, konachan } = require('../scraper/index') 
const { stickerSearch } = require('../scraper/stickerpack')
const { xnxx, javhd } = require('../scraper/scraper')
const { indojavSearch, xvideosSearch, pornhubSearch, rajahentaiSearch } = require('../scraper/bokep')

router.get('/google', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var google = require('google-it')
	var result = google({'query': query}).then(result => {
	res.json({ result })
	})
})
router.get('/pinterest', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await pinterest(query)
	res.json({ result })
})
router.get('/konachan', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var img = await konachan(query)
	const result = img[Math.floor(Math.random() * (img.length))]
	var data = await getBuffer(result)
    	await fs.writeFileSync(__path +'/tmp/konachan.png', data)
   	await res.sendFile(__path +'/tmp/konachan.png')
})
router.get('/xnxx', async(req, res) => {
	var q = req.query.q
	if (!q) return res.json({ message: 'masukan parameter q' })
	var ido = await xnxx(q)
	res.json({ ido })
})
router.get('/rajahentai', async(req, res) => {
	var title = req.query.title
	if (!title) return res.json({ message: 'masukan parameter title' })
	var ido = await rajahentaiSearch(title)
	res.json({ ido })
})
router.get('/indojav', async(req, res) => {
	var title = req.query.title
	if (!title) return res.json({ message: 'masukan parameter title' })
	var ido = await indojavSearch(title)
	res.json({ ido })
})
router.get('/xvideos', async(req, res) => {
	var title = req.query.title
	if (!title) return res.json({ message: 'masukan parameter title' })
	var ido = await xvideosSearch(title)
	res.json({ ido })
})
router.get('/pornhub', async(req, res) => {
	var title = req.query.title
	if (!title) return res.json({ message: 'masukan parameter q' })
	var ido = await pornhubSearch(title)
	res.json({ ido })
})

router.get('/javhd', async(req, res) => {
	var q = req.query.q
	if (!q) return res.json({ message: 'masukan parameter q' })
	var result = await javhd(q)
	res.json({ result })
})
router.get('/tiktok', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await randomTiktok(query)
	res.json({ result })
})
router.get('/sticker', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await stickerSearch(query)
	res.json({ result })
})

module.exports = router
