animalShelter.controller('EuthanasiaCtrl', function EuthanasiaCtrl($scope, AnimalsFactory) {

  $scope.animals = AnimalsFactory.animals;

  $scope.addAnimalToEuthanasia = function(animal) {
    animal.euthanised = true;
  };

  $scope.removeAnimalFromEuthanasia = function(animal) {
    animal.euthanised = false;
  };


});
