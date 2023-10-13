function calvat(money, vat) {
    return money * vat / 100;
}

function hello() {
    console.log("Hello");
}

// exports.calvat = function calvat(money, vat) {
//     return money * vat / 100;
// }

// exports.hello = function hello() {
//     console.log("Hello");
// }

module.exports = {
    calvat,
    hello,
};

