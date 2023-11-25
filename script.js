var today = new Date();
var hour = today.getHours();
var greeting;
if (hour >= 0 && hour < 12) {
  greeting = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Night";
}
document.getElementById("greeting").innerHTML = greeting + ", Sukalaper!";

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "quote"
      ).innerHTML = `"${data.content}" - ${data.author}`;
    })
    .catch((error) => console.log(error));
}
setInterval(getQuote, 4000);
