animalShelter.controller("AnimalsCtrl", function AnimalsCtrl($scope, AnimalsFactory){

  $scope.animals = AnimalsFactory.animals;
  $scope.AnimalsFactory = AnimalsFactory;

});
