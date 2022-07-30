let lengthOfButton =document.querySelectorAll(".drum").length;
for (let i=0; i<lengthOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var eachButton= this.innerHTML;
        console.log(eachButton);
        makeMusic(eachButton);
        aniMation(eachButton);
    });
   

}
document.addEventListener("keydown", function(event){
makeMusic(event.key);
aniMation(event.key);
});
function makeMusic(key){

    switch (key) {
        case "w":
            var audio= new Audio("C:/Users/USER/Desktop/Drum-kit/tom-1.mp3");
    audio.play();
            break;
            case "a":
             var audio =new Audio("C:/Users/USER/Desktop/Drum-kit/crash.mp3");
             audio.play();
             break;
             case "s":
              var audio =new Audio("C:/Users/USER/Desktop/Drum-kit/tom-1.mp3");
              audio.play();
              break;
              case "d":
               var audio =new Audio(" C:/Users/USER/Desktop/Drum-kit/crash.mp3");
               audio.play();
               break;
               case "j":
                var audio =new Audio("  C:/Users/USER/Desktop/Drum-kit/tom-2.mp3");
                audio.play();
                break;
                case "k":
                 var audio =new Audio("   C:/Users/USER/Desktop/Drum-kit/kick-bass.mp3");
                 audio.play();
                 break;
                 case "p":
                  var audio =new Audio("  C:/Users/USER/Desktop/Drum-kit/tom-4.mp3");
                  audio.play();
                  break;
    
        default:console.log(eachButton);
            
    }
    
}
function aniMation(currentKey){
  let activeButton=  document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");

  },200)


}