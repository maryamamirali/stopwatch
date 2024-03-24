
let sec = 0
const hrs = document.querySelector(".hrs")
const min = document.querySelector(".min")
const para = document.querySelector(".para")


const sec2 = setInterval(function(){
    sec = sec + 1;
    console.log(sec);
    para.innerHTML = sec
} , 1000)



function stop(){
clearInterval(sec2)
}


function resetbtn(){
s = 0;
h = 0;
m = 0;
para.innerHTML = s;
hrs.innerHTML = h;
min.innerHTML = m;
}

function srt(){
    se = 0;
    hr = 0;
    mi = 0;
    para.innerHTML = se;
    hrs.innerHTML = hr;
    min.innerHTML = mi;
    }



































