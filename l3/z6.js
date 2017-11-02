function createGenerator(n) {
    var _state = 0;
    return function () {

        return {
            next: function () {
                return _state <= n ?
                    { value: _state++, done: false } :
                    { done: true }
            }
        }
    }
}

var foo = {
    [Symbol.iterator]: createGenerator(10)
};

var foo1 = {
    [Symbol.iterator]: createGenerator(20)
};
for (var f of foo)
    console.log(f);
for (var f of foo1)
    console.log(f);