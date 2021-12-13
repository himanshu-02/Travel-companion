//import {signInWithPopup} from 'firebase.js'
//this.signInWithPopup = new signInWithPopup;
window.onload = function(){
    var btn = document.getElementsByClassName("front-page-signup");
    function colorChange(){
        btn.style.backgroundColor='Red';
    }
    if (btn){
        btn.addEventListener("click", colorChange);
    }
}


