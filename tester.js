
var start = new Date().getTime();

function randColor(){
    var l='123456789ABCDEFGHIJKLMNOPQRSTUVWXYYZ'.split('');
    var c='#';
    for (var i=0;i<6;i++){
        c+=l[Math.floor(Math.random()*16)];

    }
    if (c=='#B3F7E0'){
        c='#05875C';
    }
    return c;
}

function appear(){


    var top = Math.random()*400;
    var left = Math.random()*80;
    var width = 100 + Math.random()*120;
    
    if (Math.random()>0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else{
        document.getElementById("shape").style.borderRadius = "0%";
    }
    
    document.getElementById("shape").style.backgroundColor = randColor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "%";
    
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}



function appearad(){
    setTimeout(appear, Math.random()*2000);
}    

appearad();

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var t = (end - start) / 1000;
    // alert(t);
    document.getElementById('time').innerHTML = t + "s";

    appearad();
    
}

                
