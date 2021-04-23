let boxes = document.querySelectorAll('.box');
let scoreGreen = document.querySelector('.green');
let scoreRed = document.querySelector('.red');
let move = 1;
const changeBox = (arr) => {
    let pasteX = `<p class="p1"> x </p>`;
    let pasteZero = `<p class="p2"> o </p>`;
    let res = [undefined, undefined, undefined,undefined,undefined,undefined,undefined,undefined, undefined];
    
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function(){
            move+=1;
            checkif(res, i, arr, move, pasteX, pasteZero);
        })
    }
}

function checkif(res, i, arr, move, pasteX, pasteZero) {
    console.log(move);
    let sum = 0;
    for (let x of res){
        if (x == undefined) {
            sum+=1;
        }
    }
    
    if (arr[i].innerHTML != pasteX && arr[i].innerHTML != pasteZero && move%2 === 0){
        arr[i].innerHTML = pasteX;
    }
    
    if(res.includes(undefined) && sum > 1 && move%2 !== 0){
        arr[i].innerHTML = pasteZero;   
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML == pasteX || arr[i].innerHTML == pasteZero)
            { 
                res.splice(i, 1, arr[i]);     
            }
    }
    checkForWin(res, pasteX, pasteZero);      
}


function checkForWin (res, pasteX, pasteZero) {
    function fun() {
        for (let element of res){
            if(element != undefined){
                element.innerHTML = `<div class="box"></div>`;
                element.style.background = 'ghostwhite';
                res.splice(res.indexOf(element), 1, undefined); 
            }
        }
        move = 1;
    }
   
    let win = [
        [0,1,2],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ];

   mark: for (let i = 0; i < win.length; i++) {
        for (let j = 0; j < win[i].length; j++) {
            if (j == 0){
                if (res[win[i][j]] != undefined && res[win[i][j+1]] != undefined 
                    && res[win[i][j+2]] != undefined){
                    if (res[win[i][j]].innerHTML == pasteX &&
                        res[win[i][j+1]].innerHTML == pasteX &&
                        res[win[i][j+2]].innerHTML == pasteX ){
                        res[win[i][j]].style.background = 'darkgreen';
                        res[win[i][j+1]].style.background = 'darkgreen';
                        res[win[i][j+2]].style.background = 'darkgreen';
                        setTimeout(fun, 500);
                        scoreGreen.innerHTML = parseInt(scoreGreen.innerHTML, 10) + 1;
                        break mark;
                    }if (res[win[i][j]].innerHTML == pasteZero &&
                        res[win[i][j+1]].innerHTML == pasteZero &&
                        res[win[i][j+2]].innerHTML == pasteZero ){
                            res[win[i][j]].style.background = '#A52A2A';
                            res[win[i][j+1]].style.background = '#A52A2A';
                            res[win[i][j+2]].style.background = '#A52A2A';
                            setTimeout(fun, 500);
                            scoreRed.innerHTML = parseInt(scoreRed.innerHTML, 10) + 1;
                    }
                }
                if (res.includes(undefined) == false){
                    setTimeout(fun, 500);
                }             
            }   
        } 
    }                                  
}  
                
        
changeBox(boxes);
