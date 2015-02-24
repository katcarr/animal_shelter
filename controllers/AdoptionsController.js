animalShelter.controller('AdoptionsCtrl', function AdoptionsCtrl($scope, AnimalsFactory) {

  $scope.animals = AnimalsFactory.animals;

  $scope.addAnimalToAdoptions = function(animal) {
    animal.adopted = true;
  };

});
