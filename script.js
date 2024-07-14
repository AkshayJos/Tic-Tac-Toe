let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let hide = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let playbtn = document.querySelector("#playbtn");
let infocontainer = document.querySelector(".info-container");
let unameO = document.querySelector("#unameO");
let unameX = document.querySelector("#unameX");
let changebtn = document.querySelector("#changebtn");
let container = document.querySelector(".container");
let undobtn = document.querySelector("#undobtn");

let player0 = true;
let indx = -1;
boxes = Array.from(boxes);

let winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

playbtn.addEventListener("click",()=>{
    infocontainer.classList.add("hide");
    msgcontainer.classList.add("hide");
    container.classList.remove("hide");
})

resetbtn.addEventListener("click",()=>{
   reset();
})

newbtn.addEventListener("click",()=>{
    msgcontainer.classList.add("hide");
    container.classList.remove("hide");
})

changebtn.addEventListener("click",()=>{
    infocontainer.classList.remove("hide");
    container.classList.add("hide");
    msgcontainer.classList.add("hide");
})

undobtn.addEventListener("click",()=>{
   if(indx !== -1){
    boxes[indx].innerText = "";
    boxes[indx].disabled = false;
    if(player0){
        player0 = false;
    }
    else{
        player0 = true;
    }
   }
  })

function showWinner(){
    if(player0){
        msg.innerText = `Congratulations !!, Winner is - "${unameX.value}"`;
    }
    else{
        msg.innerText = `Congratulations !!, Winner is - "${unameO.value}"`;
    }
}
function reset(){
    player0 = true;
    boxes.forEach((box)=>{
     box.innerText = "";
     box.disabled = false;
    })
}

function checkWinner(){
    winpatterns.forEach((winpattern)=>{
        let pos1 = boxes[winpattern[0]].innerText;
        let pos2 = boxes[winpattern[1]].innerText;
        let pos3 = boxes[winpattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
    if(pos1 === pos2 && pos2 === pos3){
       container.classList.add("hide");
       showWinner();
      reset();
       msgcontainer.classList.remove("hide");
    }else{
        let b = true;
      boxes.forEach((box)=>{
        if(box.innerText === ""){
            b = false;
        }
      })
        if(b){
         reset();
         msg.innerText = "Game is draw !!";
         msgcontainer.classList.remove("hide");
         container.classList.add("hide");
        }
    }
   }
    })
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
    if(player0){
        box.innerText = "O";
        player0=false;
       
    }else{
        box.innerText = "X";
        player0 = true;
    }
    indx = boxes.indexOf(box);
    box.disabled = true;
     checkWinner();
    })
})



