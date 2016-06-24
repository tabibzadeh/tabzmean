(function(){

    var app = angular.module('codeschool', []);

    app.controller('CSController', function(){
        this.products = gems;
        })

    var gems = [
        {
            name: 'Dodachian',
            price: '2.95',
            description: '...',
            canPurchase: false,
                soldOut: false
        },
        {
            name: 'Mashmaloo',
            price: '4.50',
            description: '...',
            canPurchase: true,
            soldOut: false
        },

        {
            name: 'Gholoom',
            price: '3.5',
            description: '...',
            canPurchase: true,
            soldOut: false
        },

        {
            name: 'Saloome',
            price: '1.5',
            description: '...',
            canPurchase: true,
            soldOut: false
        },

        {
            name: 'Sekine',
            price: '4',
            description: '...',
            canPurchase: true,
            soldOut: false
        }
    ]
}());
