function upladImg(file) {
	if (isJPGOrPNG(file)) {
		var size = getFileSize(file);
		if(size > 2048){
			promptBlock("errorInfoDiv", "图片大小超过2M");
			file.value="";
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}

function isJPGOrPNG(obj){
	var fileFormat = getFileFormat(obj);// 获得文件后缀名
	var flag = false;
	if(fileFormat =='.jpg' || fileFormat =='.png'){
		flag = true;
    }
	return flag;
}

function getFileFormat(obj){
	var fileFormat=obj.value.substr(obj.value.lastIndexOf(".")).toLowerCase();// 获得文件后缀名
	return fileFormat;
}

function promptBlock(elementId, errorInfo) {
	var element = getElemet(elementId);
	var display = element.style.display;
	if (display == 'none') {
		element.style.display = 'block';
		hiddenElement(elementId, 5000);
	}
	element.innerHTML = errorInfo;
}

function getElemet(elementId){
	return $('#' + elementId)[0];
}

function hiddenElement(elementId, timout) {
	setTimeout("document.getElementById('" + elementId +"').style.display = 'none'",timout)
}

function getFileSize(obj){
	var fileSize = 0;
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;            
    if (isIE && !obj.files) {          
         var filePath = obj.value;            
         var fileSystem = new ActiveXObject("Scripting.FileSystemObject");   
         var file = fileSystem.GetFile (filePath);               
         fileSize = file.Size;         
    }else {  
         fileSize = obj.files[0].size;     
    } 
    fileSize=Math.round(fileSize/1024*100)/100; // 单位为KB
    return fileSize;
}


function getHTTPRequestObject() {
	var xmlhttp = false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

/*function getCoordinateAssignment(){
	 var xcenter = window.parent.document.getElementById("xcenter").value;
     var ycenter = window.parent.document.getElementById("ycenter").value;
     if(xcenter != ""){
    	var newXcenter =  (xcenter/100*3500-(28.58/2))/3500*100;
    	var newYcenter =  (ycenter/100*2000-(51/2))/2000*100;
    	var div = createDiv(newXcenter,newYcenter);
    	document.getElementById("map_div").appendChild(div);
     }
}
function createDiv(x, y){
	var div = document.createElement("div");
	$(div).css("z-index", 100);
	$(div).css("position", "absolute");
	$(div).css("left", x + "%");
	$(div).css("top", y + "%");
	var span = document.createElement("span");
	$(span).css("font-size","50px");
	$(span).css("color","red");
	var i = document.createElement("i");
	$(i).addClass("icon-map-marker");
	span.appendChild(i);
	div.appendChild(span);
	return div;
}*/

/*<div class="alert alert-danger display-none" id="errorInfoDiv" style="display: none;"></div>*/
/*onchange="upladImg(this)" accept="image/png,image/jpeg"*/
/*<script src="/assets/js/arta/arta.img.unit.js"></script>*/