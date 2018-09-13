// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if (currency < 10000 && currency > 0) {
		let obj = {};
		
		let h = 50,
			q = 25,
			d = 10,
			n = 5,
			p = 1;

		if (currency/h >= 1) {
			obj["H"] = Math.floor(currency/h);
			if ((currency/h) >= obj["H"]) {
				currency = currency - obj["H"] * h;
			}
		}

		if (currency/q >= 1 && currency != 0) {
			obj["Q"] = Math.floor(currency/q);
			if ((currency/q) >= obj["Q"]) {
				currency = currency - obj["Q"] * q;
			}
		}

		if (currency/d >= 1 && currency != 0) {
			obj["D"] = Math.floor(currency/d);
			if ((currency/d) >= obj["D"]) {
				currency = currency - obj["D"] * d;
			}
		}

		if (currency/n >= 1 && currency != 0) {
			obj["N"] = Math.floor(currency/n);
			if ((currency/n) >= obj["N"]) {
				currency = currency - obj["N"] * n;
			}
		}

		if (currency/p >= 1 && currency != 0) {
			obj["P"] = Math.floor(currency/p);
			if ((currency/p) >= obj["P"]) {
				currency = currency - obj["P"] * p;
			}
        }

        return obj;
        
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else return {};
}
