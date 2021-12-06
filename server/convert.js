__path = process.cwd()
const express = require("express");
const fs = require('fs');
const fetch = require('node-fetch')
const router = express.Router()
const request = require('request')
const escapeStringRegexp = require('escape-string-regexp');
const async = require('async')
const MultiStream = require('multistream')
const gTTS = require("gtts.js")
const tts = new gTTS() 
const fakeUa = require('fake-useragent')
const { ffmpeg, toAudio } = require('../lib/converter')
const { Text2Speech } = require('../scraper/tts')


/**
 * Image to Webp
 * @param {String} url Image/Video URL
 */
 async function sticker(url) {
    if (url) {
      let res = await fetch(url)
      if (res.status !== 200) throw await res.text()
      img = await res.buffer()
    }
    return await ffmpeg(img, [
      '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
    ], 'jpeg', 'webp')
  }

router.get('/towebp', async(req, res) => {
    var url = req.query.url
    var packname = req.query.packname
    var creator = req.query.creator
    var stc = await sticker(url)
    await fs.writeFileSync(__path + '/tmp/stc.webp', stc)
	await res.sendFile(__path + '/tmp/stc.webp')
})
router.get('/tomp3', async(req, res) => {
    var url = req.query.url 
    const Buffer = await fetch(url)
	  const getBuffer = await Buffer.buffer()
    let audio = await toAudio(getBuffer, 'mp4')
    await fs.writeFileSync(__path + '/tmp/audio.mp3', audio)
	await res.sendFile(__path + '/tmp/audio.mp3')
})
router.get('/gtts', async(req, res) => {
	var text = req.query.text
	if (!text) return res.json({ message: 'masukan parameter text' })
	var hasil = await tts.save(text)
	try {
		var data = await getBuffer(hasil.audio)
		await fs.writeFileSync(__path +'/tmp/tiktok.mp3', data)
   		await res.sendFile(__path +'/tmp/tiktok.mp3')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/tts', async(req, res) => {
    var text = req.query.text
    if (!text) return res.json({ message: 'masukan parameter text' })
    var _lang = req.query._lang
    const Buffer = await fetch(_lang)
	  const getBuffer = await Buffer.buffer()
    let audio = await Text2Speech(getBuffer, 'mp4')
    await fs.writeFileSync(__path + '/tmp/audio.mp3', audio)
	await res.sendFile(__path + '/tmp/audio.mp3')
})
module.exports = router
