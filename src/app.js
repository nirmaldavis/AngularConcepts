var invoiceAppModule = angular.module('invoice1', []);

//Reusable business logic of converting currency 
//It moved out of controller and made it as a factory
invoiceAppModule.factory('currencyConvertor', function(){
    
    var currencies = ["USD", "EUR", "CNY"];
    var usdToForiegnRates = { USD: 1,
                              EUR: 0.74,
                              CNY: 6.09 };
    
    var convert = function(amount, fromCurr, toCurr ) {
        return amount * usdToForiegnRates[toCurr] / usdToForiegnRates[fromCurr];
    };
    
    return {
        currencies : currencies,
        convertCurrency : convert
    };
});


invoiceAppModule.controller('InvoiceController', function (currencyConvertor) {
    this.quantity = 2;
    this.cost = 24;
    this.fromCurr = "EUR";
    
    this.currencies = currencyConvertor.currencies;

    this.total = function (toCurr) {
        return currencyConvertor.convertCurrency(this.quantity * this.cost, this.fromCurr, toCurr);
    };

});