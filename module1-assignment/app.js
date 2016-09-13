(function () {
'use strict';

angular.module('Mod1App', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function FoodController($scope) {
  $scope.selections = "";
  $scope.foodCount = 0;
  $scope.message = "";
  $scope.messageStyle = "";
 function countCommaSeperatedValues(selections) {
     var count = 0;
     var selArray = selections.split(',');
     for(var i=0; i< selArray.length;i++){
         if(selArray[i].trim() !== ''){             
            count++;
         }
     }
     return count;
 }
 function getFoodMessage(count){
     if(count <= 0)
     {
         return "Please enter data first.";
     }
     else if(count <= 3){
        return "Enjoy!";
     }
     else
     {
         return "Too much!";
     }
 }
  function getFoodMessageStyle(count){
     if(count <= 0)
     {
         return "text-warning";
     }
     else if(count <= 3){
        return "text-success";
     }
     else
     {
         return "text-danger";
     }
 }
 $scope.countFood = function(){
    var foodCount = countCommaSeperatedValues($scope.selections);
    $scope.foodCount = foodCount;
    $scope.messageStyle = getFoodMessageStyle($scope.foodCount);
    $scope.message = getFoodMessage($scope.foodCount);
 };
}

})();
