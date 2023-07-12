let user1 = true;
let result = [""];
  
let box1 = document.querySelector("#box-1");
let box2 = document.querySelector("#box-2");
let box3 = document.querySelector("#box-3");
let box4 = document.querySelector("#box-4");
let box5 = document.querySelector("#box-5");
let box6 = document.querySelector("#box-6");
let box7 = document.querySelector("#box-7");
let box8 = document.querySelector("#box-8");
let box9 = document.querySelector("#box-9");

box1.addEventListener("click", function(){putEmoji(1)});
box2.addEventListener("click", function(){putEmoji(2)});
box3.addEventListener("click", function(){putEmoji(3)});
box4.addEventListener("click", function(){putEmoji(4)});
box5.addEventListener("click", function(){putEmoji(5)});
box6.addEventListener("click", function(){putEmoji(6)});
box7.addEventListener("click", function(){putEmoji(7)});
box8.addEventListener("click", function(){putEmoji(8)});
box9.addEventListener("click", function(){putEmoji(9)});

function putEmoji(i){  
  
  let imagesArray = ["", "img1","img2","img3","img4","img5","img6","img7","img8","img9"];
  
  if (user1) {
    document.getElementById(imagesArray[i]).src = "img/cross.png";
    user1 = false;
    result[i] = 1;
  }
  else {
    document.getElementById(imagesArray[i]).src = "img/tick.png";
    user1 = true;
    result[i] = 2;
  }

  console.log(result);

  if ((result[1]==result[2]==result[3])
  ||(result[4]==result[5]==result[6])
  ||(result[7]==result[8]==result[9])
  ||(result[1]==result[4]==result[7])
  ||(result[2]==result[5]==result[8])
  ||(result[3]==result[6]==result[9])
  ||(result[1]==result[5]==result[9])
  ||(result[7]==result[5]==result[3])){
    console.log("winner");
  }
}