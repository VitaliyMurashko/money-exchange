// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if (currency === 0) {
        return obj;
    };
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange"
        return obj;
    };

    for (i = 1; currency - 50 >= 0; i++) {
        currency = currency - 50;
        obj["H"]= i;
    };

    for (i = 1; currency - 25 >= 0; i++) {
        currency = currency - 25;
        obj["Q"] = i;
    };

    for (i = 1; currency - 10 >= 0; i++) {
        currency = currency - 10;
        obj["D"] = i;
    };

    for (i = 1; currency - 5 >= 0; i++) {
        currency = currency - 5;
        obj["N"] = i;
    };

    for (i = 1; currency - 1 >= 0; i++) {
        currency = currency - 1;
        obj["P"] = i;
    };

    return obj;

}
