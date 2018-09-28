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
	 var url = '/' + contextPath + '/manager/advertisement/ra/' + pointId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
}
