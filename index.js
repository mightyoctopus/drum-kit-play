// Complete Version 


const buttonLength = document.querySelectorAll('.drum').length;
let lastClickedButton = null; 

for (i = 0; i < buttonLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {

        // Audio File Paths Construction (Angela)

        const buttonClassName = this.innerHTML;
        soundByKey(buttonClassName);
        btnAnime(buttonClassName);
    });
};

document.addEventListener('keydown', function (keyEvent) {
    soundByKey(keyEvent.key);
    btnAnime(keyEvent.key);
})

function soundByKey (keyboard) {
    switch (keyboard) {
        case "w":
            const audioW = new Audio ('sounds/w.mp3');
            audioW.play();
            break;
        
        case "a":
            const audioA = new Audio ('sounds/a.mp3');
            audioA.play();
            break;

        case "s":
            const audioS = new Audio('sounds/s.mp3');
            audioS.play();
            break;

        case "d":
            const audioD = new Audio('sounds/d.mp3');
            audioD.play();
            break;

        case "j":
            const audioJ = new Audio ('sounds/j.mp3');
            audioJ.play();
            break;
            
        case "k":
            const audioK = new Audio ('sounds/k.mp3');
            audioK.play();
            break;

        case "l":
            const audioL = new Audio ('sounds/l.mp3');
            audioL.play();
            break;
        
        default:
            console.log (keyboard);
            
    };
}

function btnAnime (currentKey) {
    const activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}


     











// ORIGNAL CODE (With the white text color change function enabled)

// const buttonLength = document.querySelectorAll('.drum').length;
// let lastClickedButton = null; 

// for (i = 0; i < buttonLength; i++) {
//     document.querySelectorAll('.drum')[i].addEventListener('click', function() {

//         //text changes to white when being clicked
//         if (lastClickedButton !== null) {
//             lastClickedButton.style.color = "";
//         }

//         this.style.color = "white";

//         lastClickedButton = this;


//         // Audio File Paths Construction (Angela)

//         const ButtonClassName = this.innerHTML;

//         switch (ButtonClassName) {
//             case "w":
//                 const audioW = new Audio ('sounds/w.mp3');
//                 audioW.play();
//                 break;
            
//             case "a":
//                 const audioA = new Audio ('sounds/a.mp3');
//                 audioA.play();
//                 break;

//             case "s":
//                 const audioS = new Audio('sounds/s.mp3');
//                 audioS.play();
//                 break;

//             case "d":
//                 const audioD = new Audio('sounds/d.mp3');
//                 audioD.play();
//                 break;

//             case "j":
//                 const audioJ = new Audio ('sounds/j.mp3');
//                 audioJ.play();
//                 break;
                
//             case "k":
//                 const audioK = new Audio ('sounds/k.mp3');
//                 audioK.play();
//                 break;

//             case "l":
//                 const audioL = new Audio ('sounds/l.mp3');
//                 audioL.play();
//                 break;
            
//             default:
//                 console.log (ButtonClassName);
                
//         };

//     });
// };

// document.addEventListener('keydown', function(event) {
//     console.log(event);
// });




























