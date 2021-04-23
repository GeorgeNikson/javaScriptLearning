let boxes = document.querySelectorAll('.box');
let scoreGreen = document.querySelector('.green');
let scoreRed = document.querySelector('.red');

const changeBox = (arr) => {
    let rnd = Math.floor(Math.random() * 9);
    let pasteX = `<p class="p1"> x </p>`;
    let pasteZero = `<p class="p2"> o </p>`;
    let res = [undefined, undefined, undefined,undefined,undefined,undefined,undefined,undefined, undefined];
    
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function(){
            checkif(res, i, arr, rnd, pasteX, pasteZero);
        })
    }
}

function checkif(res, i, arr, rnd, pasteX, pasteZero) {
    
    let sum = 0;
    for (let x of res){
        if (x == undefined) {
            sum+=1;
        }
    }
    
    if (arr[i].innerHTML != pasteX && arr[i].innerHTML != pasteZero){
        arr[i].innerHTML = pasteX;
        if(res.includes(undefined) && sum > 1){
            while (arr[rnd].innerHTML == pasteX || arr[rnd].innerHTML == pasteZero){
                rnd = Math.floor(Math.random() * 9);
                
            }
            arr[rnd].innerHTML = pasteZero;   
        }
    }for (let i = 0; i < arr.length; i++) {
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
