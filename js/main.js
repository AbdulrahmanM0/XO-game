let game = document.getElementById("game");
let allCounters = document.getElementsByClassName("cont");
let turn = document.getElementById("game-info");
let arr = [];
let noWArr = [];

let clks = true;

function clkd(theID){
    let clkdSqr = document.getElementById(theID);
    if(clks === true && clkdSqr.innerHTML==""){
        clkdSqr.classList.remove("sq");
        clkdSqr.classList.add("sq-o");
        clkdSqr.innerHTML = "O";
        turn.style.cssText = "background-color: rgb(255, 179, 0)";
        turn.innerHTML = "Turn : <span> X </span>"
        clks = false;
    }else if(clks === false && clkdSqr.innerText==""){
        clkdSqr.classList.remove("sq");
        clkdSqr.classList.add("sq-x");
        clkdSqr.innerHTML = "X";
        turn.style.cssText = "background-color: #00ff22";
        turn.innerHTML = "Turn : <span> O </span>"
        clks = true;
    };
    noWArr.push(document.getElementById(theID));
    end()
}
function winner(a,b,c){
    document.getElementById(`sq${a}`).classList.add("winner");
    document.getElementById(`sq${b}`).classList.add("winner");
    document.getElementById(`sq${c}`).classList.add("winner");
    document.getElementById("end-game").style.cssText = "display: block";
    document.getElementById("block").style.cssText = "display: block";
    setTimeout(()=>{location.reload()},3000);
}
function noWinner(){
    document.getElementById("end-game").style.cssText = "display: block";
    document.getElementById("block").style.cssText = "display: block";
    setTimeout(()=>{location.reload()},3000);
    function finWins(){
    let winImg = document.getElementById("winImg");
      winImg.style.display = "inline-block";
    }
    finWins();
}
function end(){
    for(let i = 1;i <= game.childElementCount;i++){
        arr[i] = document.getElementById(`sq${i}`).innerHTML;
        
    }
    if(arr[1] === arr[2] && arr[2] === arr[3] && arr[1] != ""){
        document.getElementById("winner-Name").innerHTML = arr[2];
        winner(1,2,3);
    }
    else if(arr[4] === arr[5] && arr[5] === arr[6] && arr[4] !=""){
        document.getElementById("winner-Name").innerHTML = arr[4];
        winner(4,5,6)
    }
    else if(arr[7] === arr[8] && arr[8] === arr[9] && arr[7] !=""){
        document.getElementById("winner-Name").innerHTML = arr[7];
        winner(7,8,9)
    }
    else if(arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !=""){
        document.getElementById("winner-Name").innerHTML = arr[1];
        winner(1,4,7)
    }
    else if(arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !=""){
        document.getElementById("winner-Name").innerHTML = arr[2];
        winner(2,5,8)
    }
    else if(arr[3] === arr[6] && arr[6] === arr[9] && arr[3] !=""){
        document.getElementById("winner-Name").innerHTML = arr[3];
        winner(3,6,9)
    }
    else if(arr[1] === arr[5] && arr[5] === arr[9] && arr[1] !=""){
        document.getElementById("winner-Name").innerHTML = arr[1];
        winner(1,5,9)
    }
    else if(arr[3] === arr[5] && arr[5] === arr[7] && arr[3] !=""){
        document.getElementById("winner-Name").innerHTML = arr[3];
        winner(3,5,7)
    }
    else if(noWArr.length == 9){
        document.getElementById("winner-Name").innerHTML = "No Winner";
        noWinner();
    }
    
}
