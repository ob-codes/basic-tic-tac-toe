let firstClick = true;
let values = [];
let isGameOver = false;
  
let box1 = document.querySelector("#box-1");
let box2 = document.querySelector("#box-2");
let box3 = document.querySelector("#box-3");
let box4 = document.querySelector("#box-4");
let box5 = document.querySelector("#box-5");
let box6 = document.querySelector("#box-6");
let box7 = document.querySelector("#box-7");
let box8 = document.querySelector("#box-8");
let box9 = document.querySelector("#box-9");

box1.addEventListener("click", function(){putEmoji(0)});
box2.addEventListener("click", function(){putEmoji(1)});
box3.addEventListener("click", function(){putEmoji(2)});
box4.addEventListener("click", function(){putEmoji(3)});
box5.addEventListener("click", function(){putEmoji(4)});
box6.addEventListener("click", function(){putEmoji(5)});
box7.addEventListener("click", function(){putEmoji(6)});
box8.addEventListener("click", function(){putEmoji(7)});
box9.addEventListener("click", function(){putEmoji(8)});

function putEmoji(i){  
  if (isGameOver) 
    return;
  
  let imagesArray = ["img1","img2","img3","img4","img5","img6","img7","img8","img9"];

  if (values[i] != null)
    return;

  if(firstClick){
    document.getElementById(imagesArray[i]).src = "img/cross.png";
    values[i] = 1;
    firstClick = false;
  } else{
    document.getElementById(imagesArray[i]).src = "img/tick.png";
    values[i] = 2;
    firstClick = true;
  }
  checkResult();

}

function compareValues(a, b, c) {
  let ret = false;
  if (a==null || b==null || c==null)
    return;

  if ((a === b) && (b === c)){
    ret = true;
  }

  return ret;
}

function checkResult(){
  if (compareValues(values[0], values[1], values[2]) 
  || compareValues(values[3], values[4], values[5])
  || compareValues(values[6], values[7], values[8]) 
  || compareValues(values[0], values[3], values[6])
  || compareValues(values[1], values[4], values[7]) 
  || compareValues(values[2], values[5], values[8])
  || compareValues(values[0], values[4], values[8]) 
  || compareValues(values[2], values[4], values[6]))
  {
    isGameOver = true;
    (firstClick === false) ? console.log(`winner is cross`) : console.log(`winner is circle`);
  }
  else{
    console.log(values);
  }
}