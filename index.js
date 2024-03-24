
// Relating random number and dice 1 images

var ran_num1 = Math.floor(Math.random()*6)+1;

var dice_image = "images/" + "dice" + ran_num1 + ".png"; 

var dice_1 = document.querySelector(".dice_one").setAttribute("src",dice_image);

// Relating random number and dice 2 images

var ran_num2 = Math.floor(Math.random()*6)+1;

dice_image = "images/" + "dice" + ran_num2 + ".png"; 

var dice_2= document.querySelector(".dice_two").setAttribute("src",dice_image);


// relating random numbers and result

if(ran_num1>ran_num2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!!";
}
else if(ran_num1<ran_num2) {
    document.querySelector("h1").textContent  = "Player 2 Wins!!🚩";
}
else{
    document.querySelector("h1").textContent  = "Draw!!";
}