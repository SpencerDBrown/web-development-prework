document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "500px";});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";})

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").animate({backgroundColor: "white"},2000);})

document.getElementById("button4").addEventListener("click", function(){
    location.reload();})
