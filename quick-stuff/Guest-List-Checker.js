var guestList = ["Jakson", "Anna", "Jackson", "John", "Jordan", "Aidan"];

var guestName = prompt("What is your first name?")

if (guestList.includes(guestName)) {
    alert("Welcome!")
} else {
    alert("Sorry, your name is not on this list.")
}