function result(mode){
    if(mode=="yes"){
        document.getElementById("resImg").src = "images/testRes_no.png";
    }
	else if(mode=="no") {
        document.getElementById("resImg").src = "images/testRes_all.png";
    }
    else if(mode=="re") {
        document.getElementById("resImg").src = "images/testRes_yet.png";
    }
}