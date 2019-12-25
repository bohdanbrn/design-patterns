const BasketModule = (function() {
    const goods = [];

    return {
        addProduct: function(product) {
            goods.push(product);
        },
        getTotalPrice: function() {
            let total = 0;

            goods.forEach(item => {
                total += item.price;
            });

            console.log(total);
        },
        printProducts: function() {
            for (let i = 0; i < goods.length; i++) {
                console.log(goods[i].name, goods[i].price);
            }
        },
    };
})();

const salt = {
    name: "Salt",
    price: 2,
};
const bread = {
    name: "Bread",
    price: 1.5,
};

BasketModule.addProduct(salt);
BasketModule.addProduct(bread);

BasketModule.printProducts();
BasketModule.getTotalPrice();
