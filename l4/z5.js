const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Jak się nazywasz?\n', function(answer) {
    console.log(`Witaj ${answer}!`);
    rl.close();
});
