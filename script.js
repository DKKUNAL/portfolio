let trendFood = document.querySelectorAll(".trendFood")
let count = 0;
console.log(trendFood);

trendFood.forEach((imgs, index)=>{
  imgs.style.left=`${index*100}%`
})

const myFun = ( )=>{
  trendFood.forEach((curImg)=>{
    curImg.style.transform =`translateX(-${count * 100}%)`
  })
}
setInterval(()=>{
  count++;
  if (count == trendFood.length){
    count=0
  }
  myFun();
}, 2000)