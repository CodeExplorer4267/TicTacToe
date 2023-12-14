console.log("Welcome to tic tac toe");
let gameover=new Audio("gameover.mp3");
let t=new Audio("turn.mp3");
let turn="X";
let Gameover=false;
//Function to change turn
const changeturn=()=>{
    return turn==="X"?"0":"X";
}
//Function to check for a win
const checkwin=()=>{
   let boxtext=document.getElementsByClassName("boxtext");
   let wins=[//all winning posibilities
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   ]
   wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
        document.querySelector('span.info').innerText=boxtext[e[0]].innerText + " Won";
        Gameover=true;
        gameover.play();
        document.querySelector('.img').getElementsByTagName("img")[0].style.width="300px";
    }
   })
}
//Main Logic
let boxes=document.getElementsByClassName("box");//returns collection so we have to create array
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");//span zar moddhe x or 0 likhbo.boxtext er text k set korbo
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();//because we return it
            t.play();
            checkwin();
            if(!Gameover){
                document.querySelector('span.info').innerText="Turn for "+ turn;
            }
        }
    })
})
//Adding onclick listener on reset btn
btn=document.getElementById("reset");
btn.addEventListener('click',()=>{
    let boxes=document.getElementsByClassName("box");
    Array.from(boxes).forEach((element)=>{
        let boxtext=document.querySelectorAll(".boxtext");
        element.innerText=" ";
        turn="X";
        Gameover=false;
        document.querySelector('span.info').innerText="Turn for "+ turn;
        document.querySelector('.img').getElementsByTagName("img")[0].style.width="0px";
    })
})