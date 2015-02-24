animalShelter.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [{name: "Ron", type: "Dog", years: 1, months: 8, adopted: false}];

  factory.addAnimal = function() {
    var animal = {name: factory.animalName, type: factory.animalType, years: factory.animalYears, months: factory.animalMonths, adopted: false};
    factory.animals.push(animal);
    factory.animalName = null;
    factory.animalType = null;
    factory.animalAge = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal);
    factory.animals.splice(index, 1);
  };

  return factory;
});
