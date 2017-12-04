var http = require('http');
var express = require('express');
var url = require('url')
var utils = require('./utils.js');
var https = require('https');
var fs = require('fs');

const options = {
    pfx: fs.readFileSync('/home/michal/WEPPO/l5/iCarrot.pfx'),
    passphrase: ''
  };
  

var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

// tu dodajemy middleware
app.get('/', (req, res) => {
    var model = { user: 'jan' };
    res.render('user', model);
});

app.get('/plik', (req, res) => {

    // proszę zaremować i odremować tę linijkę i porównać wynik
    res.setHeader('Content-disposition', 'attachment; filename=test.html');

    res.write('123');
    res.end();
});

app.get('/red', (req, res) => {
    res.redirect('innastrona');
});

app.use(express.urlencoded({ extended: true }));

app.get('/deklaracja', (req, res) => {
    res.render('deklaracja');
});

app.post('/deklaracja', (req, res) => {
    var name = req.body.name;
    var lecture = req.body.lecture;
    var date = req.body.date;
    var punkty = {
        1: req.body.zad1,
        2: req.body.zad2,
        3: req.body.zad3,
        4: req.body.zad4,
        5: req.body.zad5,
        6: req.body.zad6,
        7: req.body.zad7,
        8: req.body.zad8,
        9: req.body.zad9,
        10: req.body.zad10,
    };
    for (const p in punkty) {
        if (punkty[p] == '') {
            punkty[p] = 0;

        }
    }


    var model = { name: name, lecture: lecture, punkty: punkty, date: date };
    // res.render('print', model);
    res.redirect(
        url.format({
            pathname: "print",
            query: {
                name: name,
                lecture: lecture,
                punkty: utils.intDictEncode(punkty),
                date: date,
            }
        }));
});

app.get('/print', (req, res) => {
    var punkty = utils.intDictDecode( req.query.punkty)
    var model = req.query;
    model.punkty=punkty;
    console.log(punkty)
    res.render('print', model);
});




app.use((req, res, next) => {
    res.render('404.ejs', { url: req.url });
});



// tu uruchamiamy serwer
var server = http.createServer(app).listen(3000);
var server = https.createServer(options, app).listen(3001);
console.log('serwer started');
