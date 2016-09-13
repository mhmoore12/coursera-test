(function(){
'use strict';

    angular.module('myFirstApp', [])
    .controller('NameCalculatorController', function($scope){
        $scope.name = 'megan';
        $scope.totalValue = 0;
        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name); //get total value
            $scope.totalValue = totalNameValue;
        };
        $scope.displayNumeric();        
        function calculateNumericForString(string){
            var totalStringValue = 0;
         for(var i = 0; i< string.length; i++) {
             totalStringValue += string.charCodeAt(i);
         }   
         return totalStringValue;
        }
    });

})();