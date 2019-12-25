function Fedex() {
    this.calculate = shippingPackage => {
        // Fedex calculations...
        return 2.45;
    };
}

function UPS() {
    this.calculate = shippingPackage => {
        // UPS calculations...
        return 1.99;
    };
}

function USPS() {
    this.calculate = shippingPackage => {
        // USPS calculations...
        return 3.5;
    };
}

function Shipping() {
    this.company = "";

    this.setStrategy = company => {
        this.company = company;
    };
    this.calculate = shippingPackage => {
        return this.company.calculate(shippingPackage);
    };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shippingPackage = { from: "Alabama", to: "Georgia", weight: 1.56 };

const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log("Fedex: " + shipping.calculate(shippingPackage));

shipping.setStrategy(ups);
console.log("UPS: " + shipping.calculate(shippingPackage));

shipping.setStrategy(usps);
console.log("USPS: " + shipping.calculate(shippingPackage));
