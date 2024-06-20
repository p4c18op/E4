function Device(){
    this.pluggedIn = function () {
        return this._isPluggedIn;
    };
}

function Mouse(name, brand, dpi, color){
    this.name = name,
    this.brand = brand,
    this.dpi = dpi,
    this.color = color,
    this._isPluggedIn = true;
}
Mouse.prototype = new Device();
const mouse = new Mouse('Mouse', 'Ardor Gaming', 26000, 'black');
console.log(mouse);

function Keyboard(name, brand, type, color, material, backlight){
    this.name = name,
    this.brand = brand,
    this.type = type,
    this.color = color,
    this.material = material,
    this.backlight = backlight,
    this._isPluggedIn = true;
}
Keyboard.prototype = new Device();
const keyboard = new Keyboard('Keyboard', 'Ardor Gaming', 'mechanical', 'black', 'plastic', 'rgb');
console.log(keyboard);


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