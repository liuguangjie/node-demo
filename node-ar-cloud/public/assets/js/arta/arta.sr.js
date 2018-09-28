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
	 var url = '/' + contextPath + '/manager/system/sr/rem/' + pointTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
	 
}
function modifyBtnClick(roleId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.open({
		  type: 2,
		  area: ['80%', '80%'],
		  fix: false, //不固定
		  scrollbar: false,
		  maxmin: true,
		  title:"修改",
		  content: '/' + contextPath + '/manager/system/sr/oip/' + roleId,
	});
}  

function lookClick(roleId){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	layer.open({
		type: 2,
		area: ['80%' , '80%'],
		fix: false,
		scrollbar:false,
		maxmin:true,
		title:"查看",
		content:'/' + contextPath + '/manager/system/sr/oip/' + roleId,
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
