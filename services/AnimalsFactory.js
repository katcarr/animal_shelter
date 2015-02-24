animalShelter.factory('AnimalsFactory', function AnimalsFactory() {
  var factory = {};
  factory.animals = [{name: "Ron", type: "Dog", years: 1, months: 8, ageCategory: "Baby", adopted: false, euthanised: false},
                     {name: "Wron", type: "Rabbit", years: 4, months: 11, ageCategory: "Adult", adopted: false, euthanised: false},
                     {name: "R'on", type: "Pig", years: 2, months: 2, ageCategory: "Baby", adopted: false, euthanised: false},
                     {name: "Rahn", type: "Dog", years: 10, months: 3, ageCategory: "Senior", adopted: false, euthanised: false},
                     {name: "Ronald", type: "Cat", years: 9, months: 10, ageCategory: "Adult", adopted: true, euthanised: false},
                     {name: "Ronnie", type: "Bird", years: 5, months: 0, ageCategory: "Adult", adopted: false, euthanised: true}];

  factory.addAnimal = function() {
    var animal = {name: factory.animalName, type: factory.animalType, years: factory.animalYears, months: factory.animalMonths, adopted: false, euthanised: false};
    if (animal.years > 0 && animal.years < 3) {
      animal.ageCategory = "Baby";
    } else if (animal.years > 2 && animal.years < 10) {
      animal.ageCategory = "Adult";
    } else {
      animal.ageCategory = "Senior";
    }
    factory.animals.push(animal);
    factory.animalName = null;
    factory.animalType = null;
    factory.animalYears = null;
    factory.animalMonths = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal);
    factory.animals.splice(index, 1);
  };

  return factory;
});
