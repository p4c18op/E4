const country = {
	gorod1: "Petrozavodsk",
	gorod2: "Suoyarvi"
}; 

function gorodOfCountry (arr) {
	const ownGorod = Object.create(arr);
	ownGorod.gorod3 = "Kondopoga";
    ownGorod.gorod4 = "Olonec";
	for (let key in ownGorod) {
        if (ownGorod.hasOwnProperty(key)) {
            console.log(key, ownGorod[key]);
        }   
    }
}
gorodOfCountry(country);