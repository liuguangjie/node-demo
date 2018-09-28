function removeMaterial(id,type,name,positionPushTypeId){
	//询问框
	layer.confirm('确定删除 "' + name + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		remove(id,positionPushTypeId,type);
	}, function(){
	});
}

function remove(id,positionPushTypeId,type){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/voidAr/material/remove/' + id+"/"+type+"/"+positionPushTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
}

function materialFileSelectOnchange(typeDropDown,type) {
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var currentTypeId = typeDropDown.value;
	var url = '/' + contextPath + '/manager/voidAr/material/ovp/'+type+'/';
	url = url + currentTypeId;
	window.location.href = url;
}
function seachName(type,positionPushTypeId,start){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var nameKey = document.getElementById("name_key_v_a_id").value;
	//if(nameKey == ""){return}
	location.href='/' + contextPath + "/manager/voidAr/material/ovp/"+type+"/"+positionPushTypeId+"?start="+start+"&nameKey="+nameKey;
}