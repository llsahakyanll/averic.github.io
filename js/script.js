$(document).ready(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
});
// Header Logo Animated
const text = document.querySelector('.l_text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.2}deg);">${char}</span>`
).join("")
// End Header Logo Animated