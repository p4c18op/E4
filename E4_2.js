const components = {
	motherboard: "Motherboard",
	video card: "GPU",
	random access memory: "RAM"
};

function componentsInComponents (str, arr) {
	for (let key in arr) {
		if (key === str) {
			return true;
		}
		else {
			return false;
		}
	}
};

console.log(componentsInComponents("Processor", components))