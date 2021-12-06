const axios = require('axios')
const cheerio = require('cheerio')


function rajahentaiLast() {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('article.bs').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    size: $(b).find('div.tt > span').text().split('·')[1].split('·')[0],
                    release: $(b).find('div.tt > span').text().split('·')[0],
                    last_up: $(b).find('div.tt > span').text().split('·')[2]
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiSearch(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/search/'+title)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('article.bsz').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    episode: $(b).find('div.tt > span').text().split('·')[0],
                    release: $(b).find('div.tt > span').text().split('·')[1].split('·')[0],
                    status: $(b).find('div.tt > span').text().split('·')[2]
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiDetail(link) {
    return new Promise((resolve, reject) => {
        axios.get(link)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {};
            const list = [];
            hasil.judul = $('div.postbody').find('h1').text()
            hasil.uploader = $('div.postbody').find('span.vcard.author').text()
            hasil.upload = $('div.postbody').find('span.updated').text()
            hasil.thumbnail = 'https:'+$('div.postbody').find('img').attr('src')
            hasil.desc = $('div.postbody').find('p').text()
            hasil.alternatif = $('div.postbody').find('tbody > tr:nth-child(1) > td').text()
            hasil.tipe = $('div.postbody').find('tbody > tr:nth-child(2) > td').text()
            hasil.episode = $('div.postbody').find('tbody > tr:nth-child(3) > td').text()
            hasil.genre = $('div.postbody').find('tbody > tr:nth-child(4) > td').text()
            hasil.status = $('div.postbody').find('tbody > tr:nth-child(5) > td').text()
            hasil.produser = $('div.postbody').find('tbody > tr:nth-child(6) > td').text()
            hasil.dirilis = $('div.postbody').find('tbody > tr:nth-child(7) > td').text()
            $('ul.daftar > li').each(function (x, b) {
                list.push({
                    judul: $(b).find('a').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href')
                })
            })
            hasil.list_episode = list
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiDownload(link) {
    return new Promise((resolve, reject) => {
        axios.get(link)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {}
            hasil.judul = $('div.postbody').find('h1').text()
            hasil.uploader = $('div.postbody').find('span.vcard.author').text()
            hasil.upload = $('div.postbody').find('span.updated').text()
            hasil.thumbnail = 'https:'+$('div.postbody').find('img').attr('src')
            hasil.link_1 = 'https://rajahentai.xyz'+$('div.postbody').find('center > a').eq(0).attr('href')
            hasil.link_2 = 'https:'+$('div.postbody').find('center > a').eq(1).attr('href')
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiList() {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/daftar')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            const list = [];
            $('div.blix').each(function (x, b) {
                hasil.push({
                    huruf: $(b).find('span > a').text(),
                    list: list
                })
                $(b).find('ul > li').each(function (y, c) {
                    list.push({
                        judul: $(c).find('a').text(),
                        link: 'https://rajahentai.xyz'+$(c).find('a').attr('href')
                    })
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiSeries() {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/series')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('article.bsz').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    episode: $(b).find('div.tt > span').text().split('·')[0],
                    release: $(b).find('div.tt > span').text().split('·')[1].split('·')[0],
                    status: $(b).find('div.tt > span').text().split('·')[2]
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiRandom() {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/random')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {};
            const list = [];
            hasil.judul = $('div.postbody').find('h1').text()
            hasil.uploader = $('div.postbody').find('span.vcard.author').text()
            hasil.upload = $('div.postbody').find('span.updated').text()
            hasil.thumbnail = 'https:'+$('div.postbody').find('img').attr('src')
            hasil.desc = $('div.postbody').find('p').text()
            hasil.alternatif = $('div.postbody').find('tbody > tr:nth-child(1) > td').text()
            hasil.tipe = $('div.postbody').find('tbody > tr:nth-child(2) > td').text()
            hasil.episode = $('div.postbody').find('tbody > tr:nth-child(3) > td').text()
            hasil.genre = $('div.postbody').find('tbody > tr:nth-child(4) > td').text()
            hasil.status = $('div.postbody').find('tbody > tr:nth-child(5) > td').text()
            hasil.produser = $('div.postbody').find('tbody > tr:nth-child(6) > td').text()
            hasil.dirilis = $('div.postbody').find('tbody > tr:nth-child(7) > td').text()
            $('ul.daftar > li').each(function (x, b) {
                list.push({
                    judul: $(b).find('a').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href')
                })
            })
            hasil.list_episode = list
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiGenre(genre) {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/genre/'+genre)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('article.bsz').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    episode: $(b).find('div.tt > span').text().split('·')[0],
                    release: $(b).find('div.tt > span').text().split('·')[1].split('·')[0],
                    status: $(b).find('div.tt > span').text().split('·')[2]
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiTahun(tahun) {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz/tahun/'+tahun)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('article.bsz').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    episode: $(b).find('div.tt > span').text().split('·')[0],
                    release: $(b).find('div.tt > span').text().split('·')[1].split('·')[0],
                    status: $(b).find('div.tt > span').text().split('·')[2]
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function rajahentaiPopuler() {
    return new Promise((resolve, reject) => {
        axios.get('https://rajahentai.xyz')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#sidebar > div:nth-child(3) > div.serieslist.pop > ul > li').each(function (x, b) {
                hasil.push({
                    judul: $(b).find('h2').text(),
                    link: 'https://rajahentai.xyz'+$(b).find('a').attr('href'),
                    thumb: 'https:'+$(b).find('img').attr('src'),
                    genres: $(b).find('div.leftseries > span').text().replace('Genres: ', '')
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function indojavHome(type) { // type = ['#top','#top-today','#top-weekly','#top-rating','movies.html']
    return new Promise((resolve, reject) => {
        axios.get('https://indojavstream.com/'+type)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#hot > div > div > div').each(function (y, c) {
                hasil.push({
                    judul: $(c).find('h3').text().trim(),
                    link: $(c).find('a').attr('href'),
                    thumb: $(c).find('div').attr('data-src'),
                    kualitas: $(c).find('div.video_quality').text().trim(),
                    ditonton: $(c).find('div.video_views').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
				message: "List Type = ['#top','#top-today','#top-weekly','#top-rating']",
                hasil: hasil
            })
        })
    })
}

function indojavMovie() {
    return new Promise((resolve, reject) => {
        axios.get('https://indojavstream.com/movies.html')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#section-opt > div > div.row > div > div > div > div > div').each(function (y, c) {
                hasil.push({
                    judul: $(c).find('h3').text().trim(),
                    link: $(c).find('a').attr('href'),
                    thumb: $(c).find('div').attr('data-src'),
                    kualitas: $(c).find('div.video_quality').text().trim(),
                    ditonton: $(c).find('div.video_views').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function indojavSearch(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://indojavstream.com/search?q='+title)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#section-opt > div > div.row > div.col-md-12.col-sm-12 > div > div > div > div').each(function (y, c) {
                hasil.push({
                    judul: $(c).find('h3').text().trim(),
                    link: $(c).find('a').attr('href'),
                    thumb: $(c).find('div').attr('data-src'),
                    kualitas: $(c).find('div.video_quality').text().trim(),
                    ditonton: $(c).find('div.video_views').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function indojavGenre(genres) {
    return new Promise((resolve, reject) => {
        genre = genres.toLowerCase()
        axios.get(`https://indojavstream.com/genre/${genre}.html`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#section-opt > div > div.row > div > div > div > div > div').each(function (y, c) {
                hasil.push({
                    judul: $(c).find('h3').text().trim(),
                    link: $(c).find('a').attr('href'),
                    thumb: $(c).find('div').attr('data-src'),
                    kualitas: $(c).find('div.video_quality').text().trim(),
                    ditonton: $(c).find('div.video_views').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
				message: "List Genre = ['4-hours-or-more','adultery','amateur','ass-fetish','ass-lover','beautiful-breasts','beautiful-girl','beautiful-tits','beauty-treatment','big-asses','big-butt','big-tits','big-tits-lover','big-vibrator','bitch','black-actor','black-man','blowjob','bondage','breast-milk','bukkake','busty-fetish','car-sex','cat-cosplay','caucasian-actress','cheating-wife','cherry-boy','childhood-friend','chubby','collaboration-work','college-girl','confinement','cosplay','couple','cowgirl','creampie','cum-swallowing','cunnilingus','daydream','debut','deep-throat'deepthroat','devil','digital-mosaic','dirty','dirty-talk','documentary','doll','drama','embarrassment','employeecoworker','exclusive','facial','facial-cumshot','featured-actress','female-anchor','female-boss','female-detective','female-investigator','female-techer','for-women,'gal','gangbang','glasses','gonzo','grimosa','handjob','harem','high-vision','hot-spring','housewife','huge-dick','huge-tits','idol-celebrity','immediately-saddle','incest','infidelity','kimono','kimono-yukata','kiss-kiss','leg-fetish','lingerie','love','married-woman','message','message-parlor','message-refre','masturbation','mature-woman','milf','minimal-mosaic','miss-hippopatamus','molester','mom','mother-in-law','multiple-episodes','muscular','no-panties','nasty-hard','ntr','nurse','office-lady','nymphomaniac','old-playmates','older-sister','orgy','original-collab','other-fetish','other-fetishes','outdoor','over-4-hours','panty-shot','pantyhose','pantyhose-tights','planning','pov','pissing-leakage','pranks','prestige-30-off','princess','private-tutor','quickie','restraint','ropes-ties','sailor-suit','school','school-swimsuits','school-uniform','schoolgirl','secretary','sex-toys','sex-worker','shame','shaved','shotacon','single-work','sister','slender','slut','small-tits','soapland-girl','squirting','stepfamily','stepmom','subjectivity','substance-use','sweating','tall','tall-girl','threesome','titty-fuck','toy','training-slave','trip','tsundere','tutor','uniform','upskirt','urination','variety','various-occupations','various-worker','vibrator','virgin','voyeur','widow','young-wife','youthful']",
                hasil: hasil
            })
        })
    })
}

function indojavYear(year) {
    return new Promise((resolve, reject) => {
        axios.get(`https://indojavstream.com/year/${year}.html`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#section-opt > div > div.row > div > div > div > div > div').each(function (y, c) {
                hasil.push({
                    judul: $(c).find('h3').text().trim(),
                    link: $(c).find('a').attr('href'),
                    thumb: $(c).find('div').attr('data-src'),
                    kualitas: $(c).find('div.video_quality').text().trim(),
                    ditonton: $(c).find('div.video_views').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
				message: 'Old Year = 2010 & Last Year = Now',
                hasil: hasil
            })
        })
    })
}

function indojavDetail(link) {
    return new Promise((resolve, reject) => {
        const hasil = {};
        const list = []
        axios.get(link+'#info')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            hasil.judul = $('#info').find('div.col-md-9 > div:nth-child(1) > div:nth-child(1) > h1').text().trim()
            hasil.desc = $('#info').find('div.col-md-9 > div:nth-child(1) > div:nth-child(1) > p').text().trim()
            hasil.genre = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(1)').text().split('\n')[1]
            hasil.aktor = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)').text().split('\n')[1]
            hasil.director = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)').text().split('\n')[1]
            hasil.writer = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(4)').text().split('\n')[1]
            hasil.country = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(5)').text().split('\n')[1]
            hasil.release = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(1) > p:nth-child(6)').text().split('\n')[1]
            hasil.duration = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)').text().split('\n')[1]
            hasil.quality = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)').text().replace('Quality: ', '')
            hasil.rating = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)').text().split('\n')[1]
            hasil.ratings = $('#info').find('div.col-md-9 > div:nth-child(2) > div:nth-child(2) > div').text().split('\n')[0]
            hasil.hastag = $('#info').find('div.col-md-9 > div:nth-child(3) > div > a').text()
            hasil.link = list
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
        axios.get(link+'#download')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            $('#download > a').each(function (y, c) {
                list.push({
                    judul: $(c).attr('href'),
                    link: $(c).text()
                })
            })
        })
    })
}

function xnxxSearch(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.xnxx.com/search/'+title)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('#content-thumbs > div.mozaique.cust-nb-cols > div').each(function (z, d) {
                hasil.push({
                    title: $(d).find('div.thumb-under > p:nth-child(1)').text(),
                    link: 'https://xnxx.com'+$(d).find('a').attr('href'),
                    thumb: $(d).find('img').attr('data-src'),
                    viewers: $(d).find('div.thumb-under > p:nth-child(2) > span.right').text().trim(),
                    resolusi: $(d).find('div.thumb-under > p:nth-child(2) > span.video-hd').text().replace(' - ', '')
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function xnxxDetail(link) {
    return new Promise((resolve, reject) => {
        axios.get(link)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = {};
            const po = $('div.wrapper').html()
            hasil.title = $('div.wrapper').find('div.clear-infobar > strong').text()
            hasil.thumb = $('div.wrapper').find('img').attr('src')
            hasil.duration = $('div.wrapper').find('span.metadata').text().split('-')[0].trim()
            hasil.resolusi = $('div.wrapper').find('span.metadata').text().split('-')[1].split('-')[0].trim()
            hasil.viewers = $('div.wrapper').find('span.metadata').text().split('-')[2].trim()
            hasil.like = $('div.wrapper').find('#video-votes > span.vote-actions > a').eq(0).text()
            hasil.dislike = $('div.wrapper').find('#video-votes > span.vote-actions > a').eq(1).text()
            hasil.comment = $('div.wrapper').find('#video-content-metadata > div.metadata-row.video-metadata > div.tab-buttons > a').eq(0).text()
            hasil.hastag = $('div.wrapper').find('#video-content-metadata > div.metadata-row.video-tags').text().replace('Tags:  \n', '').replace(/\n/gi, ', ')
            hasil.desc = $('div.wrapper').find('p').text().trim()
            hasil.link = [{
                quality: "Low",
                link: po.split("html5player.setVideoUrlLow('")[1].split("');")[0]
            },
            {
                quality: "High",
                link: po.split("html5player.setVideoUrlHigh('")[1].split("');")[0]
            },
            {
                quality: "HLS",
                link: po.split("html5player.setVideoHLS('")[1].split("');")[0]
            }
            ]
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function xvideosSearch(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.xvideos.com/?k=${title}&p=${page}`)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = []
            $('#content > div > div').each(function (a, b) {
                hasil.push({
                    title: $(b).find('p.title').text().trim(),
                    link: 'https://www.xvideos.com'+$(b).find('a').attr('href'),
                    thumb: $(b).find('img').attr('data-src'),
                    quality: $(b).find('p.metadata > span > span.video-hd-mark').text(),
                    duration: $(b).find('p.metadata > span > span.duration').text(),
                    uploader: $(b).find('p.metadata > span > span:nth-child(3)').text().split('-')[0] || '',
                    views: $(b).find('p.metadata > span > span:nth-child(3)').text().split('-')[1] || ''
                })
            })
            resolve({ status: res.status, creator: 'Dika Ardnt.', hasil: hasil })
        })
    })
}

function xvideosDetail(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            const $ = cheerio.load(res.data)
            const po = $('#video-player-bg > script:nth-child(6)').html()
            const hasil = {}
            hasil.title = $('#main').find('h2.page-title').text().trim(),
            hasil.thumb = po.split("html5player.setThumbUrl('")[1].split("');")[0]
            hasil.duration = $('#main').find('h2 > span.duration').text(),
            hasil.quality = $('#main').find('h2 > span.video-hd-mark').text(),
            hasil.tags = $('#main').find('ul > li').text(),
            hasil.views = $('#v-views > strong.mobile-hide').text()+' ( '+$('#v-views > strong.mobile-show-inline').text()+' )',
            hasil.like = $('div.vote-actions').find('span.rating-good-perc').text().split('%')[0]+' %',
            hasil.dislike = $('div.vote-actions').find('span.rating-bad-perc').text().split('%')[0]+' %',
            hasil.rating = $('div.vote-actions > div.rate-infos > span').text(),
            hasil.comments = $('div.tabs > button.comments.tab-button > span:nth-child(1) > span.badge').text()
            hasil.link = [{
                quality: 'Low',
                link: po.split("html5player.setVideoUrlLow('")[1].split("');")[0]
            },
            {
                quality: 'High',
                link: po.split("html5player.setVideoUrlHigh('")[1].split("');")[0]
            },
            {
                quality: 'HLS',
                link: po.split("html5player.setVideoHLS('")[1].split("');")[0]
            }]
            resolve({ status: res.status, creator: 'Dika Ardnt.', hasil: hasil })
        })
    })
}

function pornhubSearch(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.pornhub.com/video/search?search='+title)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = [];
            $('ul > li > div.wrap').each(function (a, c) {
                hasil.push({
                    title: $(c).find('span.title').text().trim(),
                    link: 'https://pornhub.com'+$(c).find('a').attr('href') || 'https://pornhub.com'+$(c).find('a').attr('data-releated-url'),
                    thumb: $(c).find('img').attr('data-thumb_url') || $(c).find('img').attr('src'),
                    duration: $(c).find('a > div > .duration').text().trim(),
                    quality: $(c).find('a > div > span').text().trim(),
                    uploader: $(c).find('div.usernameWrap').text().trim(),
                    viewers: $(c).find('span.views').text().trim(),
                    rating: $(c).find('div.rating-container.neutral').text().trim()
                })
            })
            resolve({
                creator: 'Dika Ardnt.',
                status: true,
                hasil: hasil
            })
        })
    })
}

function pornvid() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve({ status: res.status, creator: 'Dika Ardnt.', hasil: hasil })
        })
    })
}

function pinalySearch(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://pinayflix.tv/?s='+title)
        .then((src) => {
            let s = cheerio.load(src.data)
            let search = []
            s('article').each(function (a, b) {
                search.push({
                    title: s(b).find('span.title').text(),
                    views: s(b).find('span.views').text(),
                    duration: s(b).find('span.duration').text(),
                    quality: s(b).find('span.hd-video').text() || 'Ngga HD',
                    thumb: s(b).find('img').attr('data-src'),
                    link: s(b).find('a').attr('href')
                })
            })
            resolve({ status: true, creator: 'Dika Ardnt.', hasil: search })
        })
    })
}

function pinalyDetail(link) {
    return new Promise((resolve, reject) => {
        axios.get(link)
        .then((res) => {
            let d = cheerio.load(res.data)
            let hasil = {
                author: d('div.video-player > meta[itemprop="author"]').attr('content'),
                title: d('div.video-player > meta[itemprop="name"]').attr('content'),
                description: d('div.video-player > meta[itemprop="description"]').attr('content'),
                duration: d('div.video-player > meta[itemprop="duration"]').attr('content'),
                thumbnail: d('div.video-player > meta[itemprop="thumbnailUrl"]').attr('content'),
                streaming: d('div.video-player > meta[itemprop="embedURL"]').attr('content'),
                upload_date: d('div.video-player > meta[itemprop="uploadDate"]').attr('content'),
                views: d('div.video-infos > div > span.views').text(),
                tags: d('div.video-tags > div > a').text(),
                link_dl: d('div.tracking-btn > a').attr('href')
            }
            resolve({ status: true, creator: 'Dika Ardnt.', hasil: hasil })
        })
    })
}

module.exports = { rajahentaiLast, rajahentaiSearch, rajahentaiDetail, rajahentaiDownload, rajahentaiList, rajahentaiSeries, rajahentaiRandom, rajahentaiGenre, rajahentaiTahun, rajahentaiPopuler, indojavHome, indojavMovie, indojavSearch, indojavGenre, indojavYear, indojavDetail, xnxxSearch, xnxxDetail, xvideosSearch, xvideosDetail, pornhubSearch, pornvid, pinalySearch, pinalyDetail }
