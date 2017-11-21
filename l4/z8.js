print = console.log;
var fs = require('fs');
var util = require('util');

// fs.readFile('day.log', 'utf8', function(err, content){
//  console.log('first file: ');
// //  console.log(content);
// });

// fs.readFile('z4.js', 'utf8', function(err, content){
//  console.log('third file: ');
// //  console.log(content);
// });

// console.log('koniec programu!');
// //NOT FINISHED YET!

function fspromise(path) {
    return new Promise(function (res, rej) {
        fs.readFile(path, function (err, data) {
            if (err)
                rej(err);
            res(data.toString());
        });
    });
}

fspromise('day.log')
    .then(function (data) {
        console.log(data.length);
    }).then(function () {
        console.log("done");
    })


var readFileAsync1 = util.promisify(fs.readFile);

(async function () {

    var data1 = await readFileAsync1('day.log');
    var data2 = await readFileAsync1('z1.js');
    print(data1.length,data2.length)

})();