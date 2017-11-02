var foo = {
    _i: 0,
    met(a) {
        return foo._i * a
    },
    get bar() {
        return foo._i;
    },
    set bar(i) {
        foo._i = i;
    }
}
console.log(foo.bar);
foo.bar = 5;
console.log(foo.bar);
console.log(foo.met(10));

foo.ala = "makota"
foo.xyz = function(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
        
    }
}
Object.defineProperty(foo, 'qux', {
    get: function () {
        return 17;
    }
});

foo.xyz(foo.qux)