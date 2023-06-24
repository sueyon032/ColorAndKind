function result(mode){
    if(mode=="yes"){
        document.getElementById("resImg").src = "images/testRes_no.png";
    }
	else if(mode=="noAll") {
        document.getElementById("resImg").src = "images/testRes_all.png";
    }
	else if(mode=="noBlue") {
        document.getElementById("resImg").src = "images/testRes_blue.png";
    }
	else if(mode=="noGreen") {
        document.getElementById("resImg").src = "images/testRes_green.png";
    }
	else if(mode=="noRed") {
        document.getElementById("resImg").src = "images/testRes_red.png";
    }
    else if(mode=="re") {
        document.getElementById("resImg").src = "images/testRes_yet.png";
    }
}