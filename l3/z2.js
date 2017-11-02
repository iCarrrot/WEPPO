var fib = (function(){
    var mem={};
    function f(n){
        var value;
        if(n in mem){
            value=mem[n];
        }
        else{
            if(n===0 || n===1){
                value=n;
            }
            else{
                value=f(n-1)+f(n-2)
            }
            mem[n]=value;
        }
    return value;
    }
    return f;
})();
console.log(fib(100))
