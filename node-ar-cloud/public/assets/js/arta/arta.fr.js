function remove(id, name){
	//询问框
	layer.confirm('确定删除 "' + name + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		toRemove(id);
	}, function(){
	});
}
function toRemove(id){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/fr/rfr/' + id;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
}

