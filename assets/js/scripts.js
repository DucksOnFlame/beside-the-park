window.onload = appear();

function appear(){
    var timeOut;
    var element = document.querySelector("#js-summary__text-container");
    //initial opacity
    var i = 0;
    //opacity increment
    var step = 5;
    //time waited between two opacity increments in msec
    var speed = 80;

    timeOut = setInterval(function() {
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step;
        if(opacity > 1 || opacity < 0){
            clearInterval(timeOut);
            //if 1-opaque or 0-transparent, stop
            return;
        }
        //modern browsers
        element.style.opacity = opacity;
        //older IE
        element.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}
