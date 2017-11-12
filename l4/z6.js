fs = require('fs')
tekst = ""
fs.readFile('z1.js', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    tekst=data
    foo();
});
function foo(){
    console.log("\n\n\n\n\n\n tekst1:\n\n")
    console.log(tekst)
}
console.log("\n\n\n\n\n\n tekst2:\n\n")
console.log(tekst);