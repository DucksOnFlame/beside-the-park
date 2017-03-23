window.onload = appearOnLoad();

function appearOnLoad() {
  summaryAppear();
  iPhoneAppear();
  mainTextAppear();
  bottomBoxesAppear();
}

function summaryAppear(){
    var timeOut;
    var elementSummary = document.querySelector("#js-summary__text-container");
    //initial opacity
    var i = 0;
    //opacity increment
    var step = 5;
    //time waited between two opacity increments in msec
    var speed = 50;

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
        elementSummary.style.opacity = opacity;
        //older IE
        elementSummary.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}

function iPhoneAppear(){
    var timeOut;
    var elementIphone = document.querySelector("#c-iphone");
    //initial opacity
    var i = 0;
    //opacity increment
    var step = 5;
    //time waited between two opacity increments in msec
    var speed = 50;

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
        elementIphone.style.opacity = opacity;
        //older IE
        elementIphone.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}

function mainTextAppear(){
    var timeOut;
    var elementMainText = document.querySelector("#c-main-text");

    //initial opacity
    var i = 0;
    //opacity increment
    var step = 5;
    //time waited between two opacity increments in msec
    var speed = 50;

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
        elementMainText.style.opacity = opacity;
        //older IE
        elementMainText.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}

function bottomBoxesAppear(){
    var timeOut;
    var elementMainText = document.querySelector("#c-bottom-boxes");
    //initial opacity
    var i = 0;
    //opacity increment
    var step = 5;
    //time waited between two opacity increments in msec
    var speed = 50;

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
        elementMainText.style.opacity = opacity;
        //older IE
        elementMainText.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}
