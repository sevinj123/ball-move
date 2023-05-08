const bgcolor=document.getElementsByClassName("bgcolor")[0];
const circle=document.getElementsByClassName("circle")[0];
let en=0;
let hund=0;

//bu hisse backgroundun hundurluyu eni ve rengidir

function setBoxHeight(el){
    var el=el.previousElementSibling;
    console.log(el.value)
    if(el.value<=600){
        console.log(bgcolor)
        console.log(bgcolor.style)
        bgcolor.style.height=el.value+"px";
        hund=parseInt(el.value); //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("600 den boyuk value daxil etmek olmaz");
    }
}

function setBoxWidth(el){
    var el=el.previousElementSibling;
    if(el.value<=400){
        bgcolor.style.width=el.value+"px";
        en=parseInt(el.value); //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("400 den boyuk value daxil etmek olmaz");
    }
}

function setBoxColor(el){
    var el=el.previousElementSibling;
    bgcolor.style.backgroundColor = el.value;
}

//bu hisse topun hundurluyu eni ve rengidir

function setTopHeight(el){
    var el=el.previousElementSibling;
    if(el.value<=90){
        circle.style.height=el.value+"px";
        hund=parseInt(el.value);  //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("90 den boyuk value daxil etmek olmaz");
    }
}

function setTopWidth(el){
    var el=el.previousElementSibling;
    if(el.value<=90){
        circle.style.width=el.value+"px";
        en=parseInt(el.value);  //persInt internetde olan funksiyadir.stringi number edir
    }
    else{
        alert("90 den boyuk value daxil etmek olmaz");
    }
}

function setTopColor(el){
    var el=el.previousElementSibling;
    circle.style.backgroundColor = el.value;
}


//duymeleri herekete getirmek ucun
const square=document.querySelector(".square")
const bgclr=document.querySelector(".bg-color")
const step =20;
document.body.addEventListener("keydown",e=>{
if(e.key=="ArrowRight"){
    goRight();
}
 else if (e.key == "ArrowLeft") {
    goLeft();
}
else if (e.key == "ArrowUp") {
    goUp();
}
else if (e.key == "ArrowDown") {
    goDown();
}
})


function goRight(){
    let marLeft=square.style.marginLeft ? parseInt(square.style.marginLeft):0
    if(marLeft+step<=bgclr.clientWidth -square.clientWidth){
        square.style.marginLeft=marLeft+step+"px";
        console.log("Right "+square.style.marginLeft)
    }
    else{
        square.style.marginLeft=bgclr.clientWidth - square.clientWidth+"px";
        console.log("Right "+square.style.marginLeft)

    }

}
function goLeft() {
    let marLeft = square.style.marginLeft ? parseInt(square.style.marginLeft):0
    if(marLeft-step>=0){
        square.style.marginLeft=marLeft-step+"px";
        console.log("Left "+square.style.marginLeft)

    }
    else{
        square.style.marginLeft="0";
        console.log("Left "+square.style.marginLeft)
    }
}



function goUp(){
    let marTop=square.style.marginTop ? parseInt(square.style.marginTop):0
    if(marTop-step>=0){
        square.style.marginTop=marTop-step+"px";
    }
    else{
        square.style.marginTop="0px";
    }

}

function goDown(){
    let marTop=square.style.marginTop ? parseInt(square.style.marginTop):0
    if(marTop+step<=bgclr.clientHeight -square.clientHeight){  //height olmalidir cunki square yuxari ve asagi dogru hereket etmelidir
        square.style.marginTop=marTop+step+"px";
    }
    else{
        square.style.marginTop=bgclr.clientHeight - square.clientHeight+"px";
    }

}

// sag sola tikladiqda kicik div gedir amma yuxari asagi tikladiqda sehifem asagi yuxari yerini deyisir onu deyise bilmedim