var financeModule = angular.module('finance',[]);

console.log("financeModule module : " + financeModule);

//Reusable business logic of converting currency 
//It moved out of controller and made it as a factory
financeModule.factory("currencyConvertor", function() {

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