
// IIFEs - Immediately invoked function expression
(
    function () {
        var a = 100;
        var b = 200;
    
    
        function fun() {
            console.log('Inside fun');
            console.log(a + b);
        }
    
        fun()
    }
)();





