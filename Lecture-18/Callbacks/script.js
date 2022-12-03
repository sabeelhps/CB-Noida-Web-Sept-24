function fun(f) {
    f();
}


function innerFun() {
    console.log('InnerFun')
}

fun(innerFun);

fun(function innerFun() {
    console.log('InnerFun')
})

fun(function() {
    console.log('InnerFun')
})

fun(()=> {
    console.log('InnerFun')
})