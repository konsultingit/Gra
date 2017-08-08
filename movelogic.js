'use strict';

document.onkeydown = function checkKeycode(event) {
    var keycode;
    if(!event) var event = window.event;
    if (event.keyCode) keycode = event.keyCode; // IE
    else if(event.which) keycode = event.which; // all browsers
    //37 39
    switch(keycode) {
    	case 37: 
    		//$('#gameBlock').addClass("animated slideFadeLeft");
            onPlayerChoose(packArray[1].card[currentCard].caseNo);
    		break;
    	case 39:
    		//$('#gameBlock').addClass("animated slideFadeRight");
            onPlayerChoose(packArray[1].card[currentCard].caseYes);
    		break;
    }
}