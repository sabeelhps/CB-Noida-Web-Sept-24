

var a = 200;

function fun() {
    
    var a = 100;

    function innerFun() {
        a++;
        console.log(a);
    }

    return innerFun;
}

var f = fun();
f();
f();
f();
f();



