var shuffledecks = document.getElementById("button");
var shuffle1 = document.getElementById("card1");
var shuffle2 = document.getElementById("card2");
var value1;
var value2;
var nine = 9;
var decks = [
    "assets/11.png",  "assets/12.png",  "assets/13.png",  "assets/14.png",
    "assets/21.png",  "assets/22.png",  "assets/23.png",  "assets/24.png", 
    "assets/31.png",  "assets/32.png",  "assets/33.png",  "assets/34.png",
    "assets/41.png",  "assets/42.png",  "assets/43.png",  "assets/44.png", 
    "assets/51.png",  "assets/52.png",  "assets/53.png",  "assets/54.png",
    "assets/61.png",  "assets/62.png",  "assets/63.png",  "assets/64.png", 
    "assets/71.png",  "assets/72.png",  "assets/73.png",  "assets/74.png",
    "assets/81.png",  "assets/82.png",  "assets/83.png",  "assets/84.png",
    "assets/91.png",  "assets/92.png",  "assets/93.png",  "assets/94.png", 
    "assets/110.png", "assets/111.png", "assets/112.png", "assets/113.png", 
    "assets/120.png", "assets/121.png", "assets/122.png", "assets/123.png",  
    "assets/130.png", "assets/131.png", "assets/132.png", "assets/133.png", 
    "assets/140.png", "assets/141.png", "assets/142.png", "assets/143.png"];
    shuffledecks.addEventListener("click", function () {
    var deck1 = Math.floor(Math.random() * decks.length) + 0
    var deck2 = Math.floor(Math.random() * decks.length) + 0
    shuffle1.src = decks[deck1];
    shuffle2.src = decks[deck2];
    if (deck1 >= 0 && deck1 <= 3) {
        value1 = 1;
    }
    else if (deck1 >= 4 && deck1 <= 7) {
        value1 = 2;
    }
    else if (deck1 >= 8 && deck1 <= 11) {
        value1 = 3;
    }
    else if (deck1 >= 12 && deck1 <= 15) {
        value1 = 4;
    }
    else if (deck1 >= 16 && deck1 <= 19) {
        value1 = 5;
    }
    else if (deck1 >= 20 && deck1 <= 23) {
        value1 = 6;
    }
    else if (deck1 >= 24 && deck1 <= 27) {
        value1 = 7;
    }
    else if (deck1 >= 28 && deck1 <= 31) {
        value1 = 8;
    }
    else if (deck1 >= 32 && deck1 <= 36) {
        value1 = 9;
    }
    else if (deck1 >= 37 && deck1 <= 40) {
        value1 = 0;
    }
    else{
        value1 = 0;
    }
    if (deck2 >= 0 && deck2 <= 3) {
        value2 = 1;
    }
    else if (deck2 >= 4 && deck2 <= 7) {
        value2 = 2;
    }
    else if (deck2 >= 8 && deck2 <= 11) {
        value2 = 3;
    }
    else if (deck2 >= 12 && deck2 <= 15) {
        value2 = 4;
    }
    else if (deck2 >= 16 && deck2 <= 19) {
        value2 = 5;
    }
    else if (deck2 >= 20 && deck2 <= 23) {
        value2 = 6;
    }
    else if (deck2 >= 24 && deck2 <= 27) {
        value2 = 7;
    }
    else if (deck2 >= 28 && deck2 <= 31) {
        value2 = 8;
    }
    else if (deck2 >= 32 && deck2 <= 36) {
        value2 = 9;
    }
    else if (deck2 >= 37 && deck2 <= 40) {
        value2 = 0;
    }
    else{
        value2 = 0;
    }
    if (value1 + value2 == nine) {
        document.getElementById("indicator").innerHTML = "You Win!"
        alert("Congratulations, You Win!");
    }
    else {
        document.getElementById("indicator").innerHTML = "You Lose!"
    }
});
