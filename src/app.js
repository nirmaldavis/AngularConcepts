var invoiceAppModule = angular.module('invoice1',[]);

invoiceAppModule.controller('InvoiceController', function() {
    this.quantity = 2;
    this.cost = 24;
    this.fromCurr = "EUR";
    this.currencies = ["USD" , "EUR" , "CNY" ];
    
    this.usdToForiegnRates = {  USD : 1,
                                EUR : 0.74,
                                CNY : 6.09
                             };
    
    this.convertCurrency = function(amount, fromCurr, toCurr) {
        
         return amount * this.usdToForiegnRates[toCurr] / this.usdToForiegnRates[fromCurr];
    };
    
    this.total = function(toCurr) {
        return this.convertCurrency(this.quantity * this.cost, this.fromCurr, toCurr);
    };
                
});    

//angular.module('invoice1', [])
//.controller('InvoiceController', function() {
//  this.qty = 1;
//  this.cost = 2;
//  this.inCurr = 'EUR';
//  this.currencies = ['USD', 'EUR', 'CNY'];
//  this.usdToForeignRates = {
//    USD: 1,
//    EUR: 0.74,
//    CNY: 6.09
//  };
//
//  this.total = function total(outCurr) {
//    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
//  };
//  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
//    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
//  };
//  this.pay = function pay() {
//    window.alert("Thanks!");
//  };
//});