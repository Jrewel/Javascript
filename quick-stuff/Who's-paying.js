alert("Let's find out who's paying for lunch eh.. Click okay and we'll randomly choose one of you!")
var names = ["Jakson", "Anna", "Aidan", "Isaac", "Jordan"];

function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople); 
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";

}
