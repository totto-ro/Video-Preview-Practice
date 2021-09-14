console.log("page loaded...");

function play (element) {
    let catVideoStar = document.getElementById( '.vid-s' ).duration;
    document.getElementById('.vid-s').innerHTML = catVideoStar;
    
}

function stop (element) {
    let catVideoPaused = document.getElementById('.vid-s').paused;
    document.getElementById('.vid-s').innerHTML = catVideoPaused;
}
