/*function myFunction() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level2.jpg)";
    document.getElementById("lvl1").style.display = "none";
    document.getElementById("lvl2").style.display = "block";
  }

function myLevel2() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level3.jpg)";
    document.getElementById("lvl2").style.display = "none";
    document.getElementById("lvl3").style.display = "block";
}

function myLevel3() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level4.jpg)";
    document.getElementById("lvl3").style.display = "none";
    document.getElementById("lvl4").style.display = "block";
}

function myLevel4() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level5.jpg)";
    document.getElementById("lvl4").style.display = "none";
    document.getElementById("lvl5").style.display = "block";
}

function myLevel5() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level6.webp)";
    document.getElementById("lvl5").style.display = "none";
    document.getElementById("lvl6").style.display = "block";
}

function myLevel6() {
    document.getElementById("firstwrapper").style.backgroundImage = "url(/images/level7.webp)";
    document.getElementById("lvl6").style.display = "none";
    document.getElementById("lvl7").style.display = "block";
}
*/
function changeOne() {
    document.getElementById("speech").innerHTML = "Now Young One, embark on your journey ahead and gather intel for the sake of the company! I believe in you.";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
}

function changeTwo(){
    document.getElementById("speech").innerHTML = "Calm down, we have barely breached the surface of the water. Here, there is still a lot of light and even the scuba divers can reside here. See, there's our crew member Bob. Your current depth is 30 meters.";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/sunset.jpg)";
    document.getElementById("firstwrapper").style.backgroundSize = "none";
    document.getElementById("titletext").style.display = "none";
    document.getElementById("pic1").style.display = "none";
    document.getElementById("pic2").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
}

function changeThree(){
    document.getElementById("name").innerHTML = "Bob";
    document.getElementById("speech").innerHTML = "*Bob stares intently at your submarine as you continue your descend further into the depths of the ocean";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "inline-block";
}

function changeFour(){
    document.getElementById("name").innerHTML = "Captain";
    document.getElementById("speech").innerHTML = "Anyways, lets continue the journey deeper, there is much left to explore Young One.";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "inline-block";
}

function changeFive(){
    document.getElementById("speech").innerHTML = "Darker isn't it? Well that's because we have entered the Twilight Zone. Sunlight begins to start having a hard time penetrating this deep into the water. Despite that, many sharks and other marinelife still live at these depths. Your current depth is 200 meters";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/lvl2.jpg)";
    document.getElementById("pic2").style.display = "none";
    document.getElementById("pic3").style.display = "block";
    document.getElementById("button5").style.display = "none";
    document.getElementById("button6").style.display = "inline-block";
}

function changeSix(){
    document.getElementById("speech").innerHTML = "Ah ah, not so fast. I hope that you didn't think we'd stop here. We've quite literally only scratched the surface. There is still so much left to see Young One. Lets continue moving";
    document.getElementById("button6").style.display = "none";
    document.getElementById("button7").style.display = "inline-block";
}

function changeSeven(){
    document.getElementById("speech").innerHTML = "Hear that? Yeah neither do I. It's absolutely silent down here. This is what's called the Midnight Zone. No more sunlight is visible at all, and only a select few species of marinelife live at these depths. See, look at that Sperm Whale. You and I could never live here, but these are its hunting grounds. Your current depth is 1000 meters";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/lvl3.jpg)";
    document.getElementById("pic3").style.display = "none";
    document.getElementById("pic4").style.display = "block";
    document.getElementById("button7").style.display = "none";
    document.getElementById("button8").style.display = "inline-block";
}

function changeEight(){
    document.getElementById("speech").innerHTML = "Tired are you? We're close now, don't worry Young One. Lets continue a little further";
    document.getElementById("button8").style.display = "none";
    document.getElementById("button9").style.display = "inline-block";
}

function changeNine(){
    document.getElementById("speech").innerHTML = "Yep, that's the famous Titanic. She's a beauty isn't she? Tragic, but many lessons learnt. It sits in its solitude at our depth of 3800 meters. Care to continue? Lets do it.";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/lvl4.jpeg)";
    document.getElementById("firstwrapper").style.backgroundSize = " 150% 100%";
    document.getElementById("pic4").style.display = "none";
    document.getElementById("pic5").style.display = "block";
    document.getElementById("button9").style.display = "none";
    document.getElementById("button10").style.display = "inline-block";
}

function changeTen(){
    document.getElementById("speech").innerHTML = "Oh? See that? It's an anglerfish. It's so dark now that the fish have their own way of making light. This signals our stopping point. We shouldn't push it since you're only a beginner. Lets go back to the surface";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/lvl5.jpeg)";
    document.getElementById("pic5").style.display = "none";
    document.getElementById("pic6").style.display = "block";
    document.getElementById("button10").style.display = "none";
    document.getElementById("button11").style.display = "inline-block";
}

function changeEleven(){
    document.getElementById("speech").innerHTML = "You did well for yourself out there Young One. This will be good for your experience going forward. Go rest and we'll debrief once you come to. I'm proud of you.";
    document.getElementById("firstwrapper").style.backgroundImage = "url(../images/end.jpeg)";
    document.getElementById("firstwrapper").style.backgroundPosition = "top";
    document.getElementById("pic6").style.display = "none";
    document.getElementById("pic1").style.display = "block";
    document.getElementById("button11").style.display = "none";
    document.getElementById("button12").style.display = "inline-block";
}

function changeTwelve(){
    document.getElementById("name").innerHTML = "Billy (Creator)"
    document.getElementById("speech").innerHTML = "That's it... thanks for viewing/reading/playing. Reload Page to View again";
    document.getElementById("pic1").style.display = "none";
    document.getElementById("firstwrapper").style.backgroundImage = "none";
    document.getElementById("firstwrapper").style.background = "white";
}
