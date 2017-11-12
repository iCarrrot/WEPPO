module.exports = {
    Foo: function(){
        return "Foo.a";
    },
    Bar: function(){
        var b = require('./z4b.js');
        return b.Foo()+" wywolane w a";
    }
}