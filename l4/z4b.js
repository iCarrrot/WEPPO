module.exports = {
    Foo: function(){
        return "Foo.b";
    },
    Bar: function(){
        var a = require('./z4a.js');
        return a.Foo()+" wywolane w b";
    }
}