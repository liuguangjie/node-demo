function removeType(pointTypeId, pointTypeName){
	//询问框
	layer.confirm('确定删除 "' + pointTypeName + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		remove(pointTypeId);
	}, function(){
	});
}
function remove(pointTypeId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/voidAr/picture/rem/' + pointTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
	 
}
function modifyBtnClick(id){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.open({
		  type: 2,
		  area: ['80%', '80%'],
		  fix: false, //不固定
		  scrollbar: false,
		  maxmin: true,
		  title:"修改",
		  content: '/' + contextPath + '/manager/voidAr/picture/omp/' + id,
	});
}  

function lockPicture(url){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	layer.open({
		//type: 1,
		//area: ['80%' , '80%'],
		fix: false,
		scrollbar:false,
		//maxmin:true,
		title:"查看",
		content:'<img src='+url+' style="width:100%;height:100%;">'
	})
}

$("#modifyFormRole").submit(function () {
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
   $.ajax({ 
   	type: 'POST', 
   	data: $(this).serialize(),
   	url: '/' + contextPath + '/manager/system/sr/mod',
       success: function () { //...
       	var index = parent.layer.getFrameIndex(window.name);
       	parent.location.reload();
       	parent.layer.close(index);
      
       },
       error: function (xhr) {
           //...
       } 
   });
   parent.location.reload();
  	parent.layer.close(index);
   return true;
});


//选择素材
function selectVideo(type){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	layer.open({
		type: 2,
		area: ['80%' , '80%'],
		fix: false,
		scrollbar:false,
		maxmin:true,
		title:type==0?'视频素材列表':type==1?'安卓模型列表':type==2?'ios模型列表':type==3?'图片列表':'windows模型列表',
		content:'/' + contextPath + '/manager/voidAr/material/owmp/'+type
	})
}
function add_picteor(url,name,type){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	if(type == 0){
		window.parent.document.getElementById("video_address").src=url;
		window.parent.document.getElementById("video_video").load();
		window.parent.document.getElementById("video_video_input").value=url;
		window.parent.document.getElementById("video_video_name").innerHTML=name;
		if(window.parent.document.getElementById("video_video_input_name"))
		window.parent.document.getElementById("video_video_input_name").value=name;
	}else if(type == 1){
		window.parent.document.getElementById("video_android_input").value=url;
		window.parent.document.getElementById("video_android_name").innerHTML=name;
		window.parent.document.getElementById("video_android_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
		if(window.parent.document.getElementById("video_android_input_name"))
		window.parent.document.getElementById("video_android_input_name").value=name;
	}else if(type == 2){
		window.parent.document.getElementById("video_ios_input").value=url;
		window.parent.document.getElementById("video_ios_name").innerHTML=name;
		window.parent.document.getElementById("video_ios_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
		if(window.parent.document.getElementById("video_ios_input_name"))
		window.parent.document.getElementById("video_ios_input_name").value=name;
	}else if(type == 3){
		window.parent.document.getElementById("video_picture_input").value=url;
		window.parent.document.getElementById("video_picture_name").innerHTML=name;
		window.parent.document.getElementById("picture_address").src=url;
	}/*else if(type == 4){
		window.parent.document.getElementById("video_windows_input").value=url;
		window.parent.document.getElementById("video_windows_name").innerHTML=name;
		window.parent.document.getElementById("video_windows_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
	}*/
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

function gradeChange(){
    var objS = document.getElementById("pid");
    var g = objS.options[objS.selectedIndex].value;
    if(g == 1){
    	$("#form_video_id").show();
    	$("#form_android_ios_id").hide();
    	$("#form_picture_id").hide();
    }else if(g == 2){
    	$("#form_video_id").hide();
    	$("#form_picture_id").show();
    	$("#form_android_ios_id").hide();
    }else if(g == 3){
    	$("#form_video_id").hide();
    	$("#form_picture_id").hide();
    	$("#form_android_ios_id").show();
    }/*else if(g == 4){
    	$("#form_video_id").hide();
    	$("#form_picture_id").hide();
    	$("#form_android_ios_id").hide();
    	$("#form_android_windows_id").show();
    }*/
    cleanFromValue();
 }
function cleanFromValue(){
		document.getElementById("video_address").src="";
		document.getElementById("video_video").load();
		document.getElementById("video_video_input").value="";
		document.getElementById("video_video_name").innerHTML="";
		
		document.getElementById("video_android_input").value="";
		document.getElementById("video_android_name").innerHTML="";
		document.getElementById("video_android_img_url").src="";
		
		document.getElementById("video_ios_input").value="";
		document.getElementById("video_ios_name").innerHTML="";
		document.getElementById("video_ios_img_url").src="";
		
		document.getElementById("video_picture_input").value="";
		document.getElementById("video_picture_name").innerHTML="";
		document.getElementById("picture_address").src="";
		
		document.getElementById("video_windows_input").value="";
		document.getElementById("video_windows_name").innerHTML="";
		document.getElementById("video_windows_img_url").src="";
		/*if(window.parent.document.getElementById("video_video_input_name")){
			window.parent.document.getElementById("video_video_input_name").value="";
		}
		if(window.parent.document.getElementById("video_android_input_name")){
			window.parent.document.getElementById("video_android_input_name").value="";
		}
		if(window.parent.document.getElementById("video_ios_input_name")){
			window.parent.document.getElementById("video_ios_input_name").value="";
		}*/
}

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

function upladVideo(file) {
	if (isMp4(file)) {
		var size = getFileSize(file);
		if(size > 10240){
			promptBlock("errorInfoDiv", "视频大小超过10M");
			file.value="";
		}else{
			//上传
			var localObj = window.location;
			var contextPath = localObj.pathname.split("/")[1];
			var fileObj = file.files[0]; // js 获取文件对象
			var form = new FormData();
			form.append("file", fileObj); // 文件对象
			var xhr = getHTTPRequestObject();
			xhr.open("post", '/' + contextPath + '/manager/voidAr/material/upload/0', true);
			xhr.send(form);
			xhr.onload = function(){ 
				uploadOnloadViedo(xhr);
			};
			
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}
function upladPicture(file) {
	if (isJPGOrPNG(file)) {
		var size = getFileSize(file);
		if(size > 2048){
			promptBlock("errorInfoDiv", "图片大小超过2M");
			file.value="";
		}else{
			//上传
			var localObj = window.location;
			var contextPath = localObj.pathname.split("/")[1];
			var fileObj = file.files[0]; // js 获取文件对象
			var form = new FormData();
			form.append("file", fileObj); // 文件对象
			var xhr = getHTTPRequestObject();
			xhr.open("post", '/' + contextPath + '/manager/voidAr/material/upload/3', true);
			xhr.send(form);
			xhr.onload = function(){ 
				uploadOnloadPicture(xhr);
			};
			
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}

function upladAndroid(file) {
	if (isModel(file)) {
		var size = getFileSize(file);
		if(size > 10240){
			promptBlock("errorInfoDiv", "安卓模型大小超过10M");
			file.value="";
		}else{
			//上传
			var localObj = window.location;
			var contextPath = localObj.pathname.split("/")[1];
			var fileObj = file.files[0]; // js 获取文件对象
			var form = new FormData();
			form.append("file", fileObj); // 文件对象
			var xhr = getHTTPRequestObject();
			xhr.open("post", '/' + contextPath + '/manager/voidAr/material/upload/1', true);
			xhr.send(form);
			xhr.onload = function(){ 
				uploadOnloadAndroid(xhr);
			};
			
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}

function upladIos(file) {
	if (isModel(file)) {
		var size = getFileSize(file);
		if(size > 10240){
			promptBlock("errorInfoDiv", "Ios模型大小超过10M");
			file.value="";
		}else{
			//上传
			var localObj = window.location;
			var contextPath = localObj.pathname.split("/")[1];
			var fileObj = file.files[0]; // js 获取文件对象
			var form = new FormData();
			form.append("file", fileObj); // 文件对象
			var xhr = getHTTPRequestObject();
			xhr.open("post", '/' + contextPath + '/manager/voidAr/material/upload/2', true);
			xhr.send(form);
			xhr.onload = function(){ 
				uploadOnloadIos(xhr);
			};
			
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}
function upladWindows(file) {
	if (isModel(file)) {
		var size = getFileSize(file);
		if(size > 10240){
			promptBlock("errorInfoDiv", "windows模型大小超过10M");
			file.value="";
		}else{
			//上传
			var localObj = window.location;
			var contextPath = localObj.pathname.split("/")[1];
			var fileObj = file.files[0]; // js 获取文件对象
			var form = new FormData();
			form.append("file", fileObj); // 文件对象
			var xhr = getHTTPRequestObject();
			xhr.open("post", '/' + contextPath + '/manager/voidAr/material/upload/4', true);
			xhr.send(form);
			xhr.onload = function(){ 
				uploadOnloadWindows(xhr);
			};
			
		}
	} else {
		promptBlock("errorInfoDiv", "文件格式错误");
		file.value="";
	}
}

function uploadOnloadViedo(xhr) {
	if (xhr.readyState == 4) {
		var responseText = xhr.responseText;
		var jsonData = $.parseJSON(responseText);
		var url = jsonData.files[0].fullPath;
		var name = jsonData.files[0].name;
		if(url){
			document.getElementById("video_address").src=url
			document.getElementById("video_video").load();
			document.getElementById("video_video_input").value=url;
			document.getElementById("video_video_name").innerHTML=name;
		}else{
			promptBlock("errorInfoDiv", "上传失败");
		}
	}
}

function uploadOnloadPicture(xhr) {
	if (xhr.readyState == 4) {
		var responseText = xhr.responseText;
		var jsonData = $.parseJSON(responseText);
		var url = jsonData.files[0].fullPath;
		var name = jsonData.files[0].name;
		if(url){
			document.getElementById("picture_address").src=url
			document.getElementById("video_picture_input").value=url;
			document.getElementById("video_picture_name").innerHTML=name;
		}else{
			promptBlock("errorInfoDiv", "上传失败");
		}
	}
}

function uploadOnloadAndroid(xhr) {
	if (xhr.readyState == 4) {
		var localObj = window.location;
		var contextPath = localObj.pathname.split("/")[1];
		var responseText = xhr.responseText;
		var jsonData = $.parseJSON(responseText);
		var url = jsonData.files[0].fullPath;
		var name = jsonData.files[0].name;
		if(url){
			document.getElementById("video_android_input").value=url;
			document.getElementById("video_android_name").innerHTML=name;
			document.getElementById("video_android_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
		}else{
			promptBlock("errorInfoDiv", "上传失败");
		}
	}
}

function uploadOnloadIos(xhr) {
	if (xhr.readyState == 4) {
		var localObj = window.location;
		var contextPath = localObj.pathname.split("/")[1];
		var responseText = xhr.responseText;
		var jsonData = $.parseJSON(responseText);
		var url = jsonData.files[0].fullPath;
		var name = jsonData.files[0].name;
		if(url){
			document.getElementById("video_ios_input").value=url;
			document.getElementById("video_ios_name").innerHTML=name;
	        document.getElementById("video_ios_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
		}else{
			promptBlock("errorInfoDiv", "上传失败");
		}
	}
}
function uploadOnloadWindows(xhr) {
	if (xhr.readyState == 4) {
		var localObj = window.location;
		var contextPath = localObj.pathname.split("/")[1];
		var responseText = xhr.responseText;
		var jsonData = $.parseJSON(responseText);
		var url = jsonData.files[0].fullPath;
		var name = jsonData.files[0].name;
		if(url){
			document.getElementById("video_windows_input").value=url;
			document.getElementById("video_windows_name").innerHTML=name;
			document.getElementById("video_windows_img_url").src="/"+contextPath+"/assets/owlEditor/owl/img/d3_default.png";
		}else{
			promptBlock("errorInfoDiv", "上传失败");
		}
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

function isMp4(obj){
	var fileFormat = getFileFormat(obj);// 获得文件后缀名
	var flag = false;
	if(fileFormat =='.mp4' || fileFormat =='.avi' || fileFormat =='.mpge'){
		flag = true;
    }
	return flag;
}
function isModel(obj){
	var fileFormat = getFileFormat(obj);// 获得文件后缀名
	var flag = false;
	if(fileFormat =='.assetBundle' || fileFormat == '.assetbundle'){
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