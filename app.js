const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInJPY = valueInEuro * 156.5;
    return valueInJPY;
}
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromYenToPound = function(valueInJPY) {
    let valueInEuro = valueInJPY / 156.5;
    let valueInGBP = valueInEuro * 0.87;
    return valueInGBP;
}



const sum = (a,b) => {
    return a + b
}


console.log(sum (6,4))
module.exports = {
    sum,fromEuroToDollar,fromDollarToYen,fromYenToPound
}

