fs = require('fs');

fs.readFile('day.log', 'utf8', function(err, content){
 console.log('first file: ');
//  console.log(content);
});

fs.readFile('z4.js', 'utf8', function(err, content){
 console.log('third file: ');
//  console.log(content);
});

console.log('koniec programu!');
//NOT FINISHED YET!