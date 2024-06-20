class Device {
    constructor() {
        this.pluggedIn = function (){
            return this._isPluggedIn;
        }
    }
}

class Mouse extends Device {
    constructor(name, brand, dpi, color, pluggedIn){
        super(pluggedIn);
        this.name = name;
        this.brand = brand;
        this.dpi = dpi;
        this.color = color;
        this._isPluggedIn = true;
    }

}
const mouse = new Mouse('Mouse', 'Ardor Gaming', 26000, 'black')
console.log(mouse)

class Keyboard extends Device {
    constructor(name, brand, type, color, material, backlight, pluggedIn){
        super(pluggedIn);
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.material = material;
        this.backlight = backlight;
        this._isPluggedIn = true;
    }
}
const keyboard = new Keyboard('Keyboard', 'Ardor Gaming', 'mechanical', 'black', 'plastic', 'rgb')
console.log(keyboard)

function sumBrandAllDevices(...devices) {
    let sumBrand = 0;

    devices.forEach(device => {
        if (device.pluggedIn()) {
            sumBrand += device.brand;
        }
    });

    return sumBrand;
}
const sumBrand = sumBrandAllDevices(mouse, keyboard);
console.log(`The sum of all the same brands ${sumBrand} w`);