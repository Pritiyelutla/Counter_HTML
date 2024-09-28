let dc = document.getElementById("decrement");
let ic = document.getElementById("increment");
let cl = document.getElementById("clear");

let ans = document.getElementById("middle");
let error = document.getElementById("error");
let clear = document.getElementById("clear");

dc.addEventListener("click", function(){
    let res = Number(ans.innerText);
    if(res == 0)
    {
        error.innerHTML = '<p style = "color : red;" >Error : Cannot go below 0<p>';
        //clear.innerHTML = '<style = "display: none;">';
        clear.style.display = "none";
    }
    else{
        ans.innerText = res-1;
    }
})
ic.addEventListener("click", function(){
    let res = Number(ans.innerText);
    ans.innerText = res+1;
    error.innerText = "";
    clear.style.display = "inline-block";
})
clear.addEventListener("click", function(){
    ans.innerText = 0;
    error.innerText = " ";
    clear.style.display = "none";
})

