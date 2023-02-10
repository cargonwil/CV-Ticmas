

document.getElementById("imagen").addEventListener("mouseenter",mouseenter);
document.getElementById("imagen").addEventListener("mouseleave",mouseleave);

function mouseenter(){
    document.getElementById("imagen").src= "pelicula-el-aviador.jpeg";
}

function mouseleave(){
    document.getElementById("imagen").src= "torta.jpg";
}

// Register service worker to control making site work offline

if ("serviceWorker" in navigator){
    //window.addEventListener("load", function(){
        //this.navigator.serviceWorker
    navigator.serviceWorker    
      .register("/serviceWorker.js")
      .then(() => { console.log ("service worker registered");});
      //    .catch (err => console.log ("service worker not registered",err))
    }

// Code to handle install prompt on desktop //

let deferredPrompt;
const addBtn = document.querySelector( ".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) =>{
    //Prevent Chrome and earlier from automatically showing the prompt//
    e.preventDefault();
    //Stash the event so it can be triggered later.//
    deferredPrompt = e;
    //Update UI to notify the user they can add to home screen//
    addBtn.style.display = "block";

    addBtn.addEventListener("click", () =>{
        //hide out user interface that shows our button//
        addBtn.style.display = "none"
        // Show the prompt //
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt //
        deferredPrompt.userChoice.then ((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the prompt");
            }  else {
                console.log ("User dismissed the prompt");
            }
            deferredPrompt = null;
        });
    });
});


