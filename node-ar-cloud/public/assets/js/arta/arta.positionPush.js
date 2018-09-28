function removePositionPushType(pointTypeId, pointTypeName){
	//询问框
	layer.confirm('确定删除 "' + pointTypeName + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		removePPT(pointTypeId);
	}, function(){
	});
}
function removePPT(pointTypeId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/positionPushType/rpt/' + pointTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
	 
}
function removePositionPush(pointTypeId, pointTypeName){
	//询问框
	layer.confirm('确定删除 "' + pointTypeName + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		removePP(pointTypeId);
	}, function(){
	});
}
function removePP(pointTypeId){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var url = '/' + contextPath + '/manager/positionPush/rp/' + pointTypeId;
	layer.load(1, {
		shade: [0.75,'#fff'] //0.1透明度的白色背景
	});
	window.location.href = url;
	
}
function modifyPP(id){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	layer.open({
		type: 2,
		area: ['80%', '80%'],
		fix: false, //不固定
		scrollbar: false,
		maxmin: true,
		title:"修改",
		content: '/' + contextPath + '/manager/positionPush/omp/' + id,
	});
} 
function modifyPPT(id){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.open({
		  type: 2,
		  area: ['80%', '80%'],
		  fix: false, //不固定
		  scrollbar: false,
		  maxmin: true,
		  title:"修改",
		  content: '/' + contextPath + '/manager/positionPushType/ompt/' + id,
	});
} 

function typeDropDownOnchange(typeDropDown) {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var currentTypeId = typeDropDown.value;
	var url = '/' + contextPath + '/manager/positionPush/spti/';
	url = url + currentTypeId;
	window.location.href = url;
}
function typeFromOnchange(typeDropDown) {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var currentTypeId = typeDropDown.value;
	$("#positionPushTypeId_inputId").value=currentTypeId;
	document.getElementById("positionPushTypeId_inputId").value=currentTypeId;
}


$("#modifyPositionPushTypeForm").submit(function () {
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
    var formData = new FormData($( "#modifyPositionPushTypeForm" )[0]); 
   $.ajax({ 
   	type: 'POST', 
   	data: formData,//$(this).serialize(),
    contentType: false,
    processData: false,async: false,
   	url: '/' + contextPath + '/manager/positionPushType/mpt',
       success: function () { //...
       	var index = parent.layer.getFrameIndex(window.name);
       	parent.location.reload(true);
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
$("#modifyPositionPushForm").submit(function () {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	layer.load(1, {
		shade: [0.75,'#fff'] //0.1透明度的白色背景
	});
	$.ajax({ 
		type: 'POST', 
		data: $(this).serialize(),async: false,
		url: '/' + contextPath + '/manager/positionPush/mp',
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
//批量删除
function delectSelectRow(){
	var ids = [];
	$('.checkboxes').each(function(){					
		if($(this).is(':checked')){
			ids.push($(this).val());
		}
		});
	if(ids.length > 0){
		removePositionPushs(ids);
	}else{
		//提示
		layer.msg('请勾选');
	}
	
}
function removePositionPushs(pointTypeIds){
	//询问框
	layer.confirm('确定删除勾选项吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		removePPs(pointTypeIds);
	}, function(){
	});
}
function removePPs(pointTypeIds){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	$.ajax({ 
	   	data: {"ids":pointTypeIds},
	    dataType : 'json',
        type : "post",
	    async: false,
	    traditional: true,
	   	url: '/' + contextPath + '/manager/positionPush/rps',
	       success: function () { 
	       	location.reload(true);
	       },
	       error: function (xhr) {
	    	   location.reload(true); 
	       } 
	   });
	
}