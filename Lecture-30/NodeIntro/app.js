const assert = require('assert');

function add(a, b) {
    return a + b + 1;
}

try {
    assert.deepStrictEqual(add(2, 3), 5, "First Testcase Failed");
    assert.deepStrictEqual(add(5, 3), 8);
    assert.deepStrictEqual(add(7, 3), 10);
    assert.deepStrictEqual(add(1, 3), 4);
}
catch (err) {
    console.log(err.actual);
    console.log(err.expected);
    console.log(err.message);
}
