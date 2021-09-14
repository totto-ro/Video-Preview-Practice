console.log("page loaded...");

let videoElements = document.querySelectorAll( '.vid-s' );
console.log(videoElements);


function playVideo(event){
    console.log(event.target);
    event.target.play();
}


for( let i = 0; i < videoElements.length; i ++ ){
    videoElements[i].addEventListener( "mouseover", playVideo );
}

function stopVideo(event){
    console.log(event.target);
    event.target.pause();
}

for( let i = 0; i < videoElements.length; i ++ ){
    videoElements[i].addEventListener( "mouseout", stopVideo );
}




