function clock(){

    var hours = document.getElementById('hour');
    var minutes = document.getElementById('min');
    var seconds = document.getElementById('sec');
    var am = document.getElementById('ampm');

    var time = new Date();

    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var a = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        a = "PM";
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    am.innerText = a;
}
setInterval(clock,1000);

// function change(){
//     let result1 = document.getElementById('morning');
//     let result2 = result1.value;
//     document.getElementById('wake').innerHTML=result2;
 
//     let result3 = document.getElementById('afternoon');
//     let result4 = result3.value;
//     document.getElementById('lunch').innerHTML=result4;

//     let result5 = document.getElementById('evening');
//     let result6 = result5.value;
//     document.getElementById('nap').innerHTML=result6;

//     let result7 = document.getElementById('night');
//     let result8 = result7.value;
//     document.getElementById('nighttime').innerHTML=result8; 
// }
function change() {


var e = document.getElementById("morning");
var text1 = e.options[e.selectedIndex].text;

var f = document.getElementById("afternoon");
var text2 = f.options[f.selectedIndex].text;

var g = document.getElementById("evening");
  var text3 = g.options[g.selectedIndex].text;

var go = document.getElementById('night') ;
var text4 = go.options[go.selectedIndex].text; 


     var idExist = document.getElementById("chg");
    if(idExist){
        idExist.innerHTML =  `<br> Wake Up Time : ${text1} <br><br> Lunch Time : ${text2}<br><br> Nap Time : ${text3} <br><br> Night Time : ${text4} `;
    }
 
}

function settime(){

    var a =document.getElementById('morning').value;
    var b = document.getElementById('afternoon').value;
    var c = document.getElementById("evening").value;
    var d = document.getElementById('night').value;
    
    var h = new Date().getHours();

    if(a == h){

        document.getElementById('imgcontainer').style.backgroundImage="url(wakeup.png)"
        document.getElementById('health').innerHTML='Wake Up !!';
        document.getElementById("gm").innerHTML="Good Morning !!";
    }

    if(b == h){
        document.getElementById("imgcontainer").style.backgroundImage="url(lunch.png)"
        document.getElementById("health").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("gm").innerHTML="Good Afternoon !!";
    }

    if(c ==h ){
        document.getElementById("imgcontainer").style.backgroundImage="url(defaul.png)"
        document.getElementById("health").innerHTML="Let's Have Some Dinner !!";
        document.getElementById("gm").innerHTML="Good Evening !!";
    } 
    if(d == h){
        document.getElementById("imgcontainer").style.backgroundImage="url(night.png)"
        document.getElementById("health").innerHTML="Good Night !!";
        document.getElementById("gm").innerHTML="Good Night !!";
    }
    change();
}

document.getElementById("imgcontainer").style.backgroundImage="url(wakeup.png)";
document.getElementById('health').innerHTML='GRAB SOME HEALTHY BREAKFAST!!!';
document.getElementById('gm').innerHTML='GOOD MORNING!!WAKE UP!!';


