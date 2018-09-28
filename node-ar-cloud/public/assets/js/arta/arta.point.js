function typeDropDownOnchange(typeDropDown) {
		var localObj = window.location;
		var contextPath = localObj.pathname.split("/")[1];
		var currentTypeId = typeDropDown.value;
		var url = '/' + contextPath + '/manager/d2/spti/';
		url = url + currentTypeId;
		window.location.href = url;
}
function pointTypeDropDownOnchange(pointTypeDropDown) {
	var pointTypeIdElm = document.getElementById('pointTypeId')
	pointTypeIdElm.value = pointTypeDropDown.value;
}

function newPointTypeDropDownOnchange(pointTypeDropDown) {
	var newPointTypeIdElm = document.getElementById('newPointTypeId')
	newPointTypeIdElm.value = pointTypeDropDown.value;
}
function removePoint(pointId, pointName){
	//询问框
	layer.confirm('确定删除 "' + pointName + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		remove(pointId);
	}, function(){
	});
}
function remove(pointId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/d2/rp/' + pointId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
}

//function modifyBtnClick(pointId){
//	 var localObj = window.location;
//	 var contextPath = localObj.pathname.split("/")[1];
//	 layer.open({
//		  type: 2,
//		  area: ['80%', '80%'],
//		  fix: false, //不固定
//		  scrollbar: false,
//		  maxmin: true,
//		  content: '/' + contextPath + '/manager/d2/omp/' + pointId ,
//	});
//} 

//$("#modifyForm").submit(function () {
//	 var localObj = window.location;
//	 var contextPath = localObj.pathname.split("/")[1];
//	 layer.load(1, {
//		  shade: [0.75,'#fff'] //0.1透明度的白色背景
//	 });
//	 
//  $.ajax({ 
//  	type: 'POST', 
//  	data: $(this).serialize(),
//  	 contentType: "multipart/form-data",  
//  	url: '/' + contextPath + '/manager/d2/mp',
//      success: function () { //...
//      	var index = parent.layer.getFrameIndex(window.name);
//      	parent.location.reload();
//      	parent.layer.close(index);
//     
//      },
//      error: function (xhr) {
//          //...
//      } 
//  });
//  return false;
//});

function getCoordinateAssignment(){
	 var xcenter = window.parent.document.getElementById("xAxis").value;
    var ycenter = window.parent.document.getElementById("yAxis").value;
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
}