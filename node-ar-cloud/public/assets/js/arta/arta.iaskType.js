function removeType(typeId, typeName){
	//询问框
	layer.confirm('确定删除 "' + typeName + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		remove(typeId);
	}, function(){
	});
}
function remove(typeId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/iask/type/rt/' + typeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
	 
}
function modifyBtnClick(pointTypeId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.open({
		  type: 2,
		  area: ['80%', '80%'],
		  fix: false, //不固定
		  scrollbar: false,
		  maxmin: true,
		  content: '/' + contextPath + '/manager/iask/type/omt/' + pointTypeId ,
	});
}  

$("#modifyForm").submit(function () {
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
   $.ajax({ 
   	type: 'POST', 
   	data: $(this).serialize(),async: false,
   	url: '/' + contextPath + '/manager/iask/type/mt',
       success: function () { //...
       	var index = parent.layer.getFrameIndex(window.name);
       	parent.location.reload();
       	parent.layer.close(index);
      
       },
       error: function (xhr) {
    	var index = parent.layer.getFrameIndex(window.name);
       	parent.location.reload();
       	parent.layer.close(index);
       } 
   });
   return true;
});
