let boxes = document.querySelectorAll(".btn");
let reset  = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let winner = document.querySelector(".winner");

let pl0 = true;

const winComb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const newGame=()=>{
    pl0 = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    winner.classList.add("hide");
}

reset.addEventListener("click",newGame);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(pl0){
            box.innerText = "0";
            pl0=false;
        }
        else{
            box.innerText = "X";
            pl0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner=()=>{
    for(let comb of winComb){
        let pos1 = boxes[comb[0]].innerText;
        let pos2 = boxes[comb[1]].innerText;
        let pos3 = boxes[comb[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            msg.innerText = `Winner is ${pos1}`;
            winner.classList.remove("hide");
            disableBoxes();
        }
      }  
    }
}


