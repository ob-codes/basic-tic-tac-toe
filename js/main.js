let firstClick = true;
let values = [];
let isGameOver = false;
let box = ["box-1", "box-2", "box-3", "box-4", "box-5", "box-6", "box-7", "box-8", "box-9"];

box.forEach((element, idx) => {
  document.getElementById(element).addEventListener("click", function(){putEmoji(idx)});
})

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