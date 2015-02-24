animalShelter.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [{name: "Ron", type: "Dog", years: 1, months: 8, adopted: false, euthanised: false},
                     {name: "Ronald", type: "Cat", years: 9, months: 10, adopted: true, euthanised: false},
                     {name: "Ronnie", type: "Bird", years: 5, months: 0, adopted: false, euthanised: true}];

  factory.addAnimal = function() {
    var animal = {name: factory.animalName, type: factory.animalType, years: factory.animalYears, months: factory.animalMonths, adopted: false, euthanised: false};
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
