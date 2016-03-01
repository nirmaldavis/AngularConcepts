var invoiceAppModule = angular.module('invoice1', []);

invoiceAppModule.factory('currencyConvertor', function(){
    return {
        
        usdToForiegnRates : {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        },
        convertCurrency : function(amount, fromCurr, toCurr) {
            return amount * this.usdToForiegnRates[toCurr] / this.usdToForiegnRates[fromCurr];
        }
    };
});


invoiceAppModule.controller('InvoiceController', function (currencyConvertor) {
    this.quantity = 2;
    this.cost = 24;
    this.fromCurr = "EUR";
    this.currencies = ["USD", "EUR", "CNY"];

//    this.usdToForiegnRates = {
//        USD: 1,
//        EUR: 0.74,
//        CNY: 6.09
//    };
//
//    this.convertCurrency = function (amount, fromCurr, toCurr) {
//
//        return amount * this.usdToForiegnRates[toCurr] / this.usdToForiegnRates[fromCurr];
//    };

    this.total = function (toCurr) {
        return currencyConvertor.convertCurrency(this.quantity * this.cost, this.fromCurr, toCurr);
    };

});