let firstClick = true, isGameOver = false;
let values = [];
let totalFilledBoxes = 0;
let box = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];

let tempCrossWins = localStorage.getItem("crossWins");
if(!tempCrossWins)
  localStorage.setItem("crossWins", 0);

let tempCircleWins = localStorage.getItem("circleWins");
if(!tempCircleWins)
  localStorage.setItem("circleWins", 0);
    
document.querySelector("#cross-wins").innerText = tempCrossWins;
document.querySelector("#cirlce-wins").innerText = tempCircleWins;

box.forEach((element, idx) => {
  document.getElementById(element).addEventListener("click", function(){putEmoji(idx)});
})

function putEmoji(i){  
  if (isGameOver) 
    return;
  
  let imagesArray = ["img1","img2","img3","img4","img5","img6","img7","img8","img9"];

  if (values[i] != null)
    return;

  totalFilledBoxes++;

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

/*  0  |  1  |  2  
  -----+-----+-----
    3  |  4  |  5  
  -----+-----+-----
    6  |  7  |  8 
*/
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
    if (firstClick === false) {
      document.querySelector("h2").innerText = `Winner: Cross`;
      tempCrossWins++;
      localStorage.setItem("crossWins", tempCrossWins);
      document.querySelector("#cross-wins").innerText = tempCrossWins;
    }
    else { 
      document.querySelector("h2").innerText = `Winner: Circle`;
      tempCircleWins++;
      localStorage.setItem("circleWins", tempCircleWins);
      document.querySelector("#cirlce-wins").innerText = tempCircleWins;
    }
  }

  if (!isGameOver && (totalFilledBoxes>=9)) {
    document.querySelector("h2").innerText = `Game Tied`;
  }
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