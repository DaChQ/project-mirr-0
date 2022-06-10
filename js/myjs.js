function shecvla(){
    const ganateba = document.getElementById("shesacvleli").innerHTML;
    if (ganateba == '<i class="fa-solid fa-sun"></i>'){
        document.getElementById("shesacvleli").innerHTML = '<i class="fa-solid fa-moon"></i>';
        document.getElementById("navi").style.backgroundColor = '#ffffff';
        document.getElementById("ragaca").src = 'img/ttt.png';
        document.getElementById("mirr").style.color = '#000000';
        document.getElementById("cover").style.backgroundImage = 'url(img/blackbg.png)';
        document.getElementById("navi").style.boxShadow = '0px 2px 17px 0px rgba(117,117,117,0.51)';
        document.getElementById("isari").style.color = '#000000';
        document.getElementById("mtliani").style.backgroundColor = '#000000';
        document.getElementById("gadasvla").style.color = '#ffffff';
        document.getElementById("gadasvla").style.borderBottom = '2px solid #ffffff';
        document.getElementById("footer").style.backgroundColor = '#ffffff';
        document.getElementById("footer").style.boxShadow = '0px -2px 17px 0px rgba(117,117,117,0.51)'
        document.getElementById("footerp").style.color = '#000000';
        document.getElementById("play").style.color = '#000000';
        document.getElementById("isari").style.filter = 'drop-shadow(3px 5px 2px rgb(255, 255, 255, 0.3))'
    }
    else{
        document.getElementById("shesacvleli").innerHTML = '<i class="fa-solid fa-sun"></i>';
        document.getElementById("navi").style.backgroundColor = '#000000';
        document.getElementById("ragaca").src = 'img/why.png';console.log(document.getElementById("ragaca").src);
        document.getElementById("mirr").style.color = '#ffffff';
        document.getElementById("cover").style.backgroundImage = 'url(img/whitebg.png)';
        document.getElementById("isari").style.color = '#ffffff';
        document.getElementById("navi").style.boxShadow = 'none';
        document.getElementById("gadasvla").style.color = '#000000';
        document.getElementById("gadasvla").style.borderBottom = '2px solid #000000';
        document.getElementById("mtliani").style.backgroundColor = '#ffffff';
        document.getElementById("footer").style.backgroundColor = '#000000';
        document.getElementById("footer").style.boxShadow = 'none'
        document.getElementById("footerp").style.color = '#ffffff';
        document.getElementById("play").style.color = '#ffffff';
        document.getElementById("isari").style.filter = 'drop-shadow(3px 5px 2px rgb(0, 0, 0, 0.3))'
    }
}
var audio = document.getElementById("my_audio"); 
audio.autoplay = true;
function pauseAud() { 
    if (audio.paused === true) {
        audio.play(); 
    }  else {
        audio.pause(); 
    }
} 
//azrze ar var ra davwere an rogor moqmedebs magram rac aris aris
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

function activefotoli(){
}