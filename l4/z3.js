var Foo = (function() {
    
    var Qux = function(){
        console.log("Qux");
    };

    var FooFoo = function() {
        this.Bar = function() {
            Qux();
        };   
    };

    return FooFoo;
})();

var f = new Foo();

console.log(f.Qux);
f.Bar()
