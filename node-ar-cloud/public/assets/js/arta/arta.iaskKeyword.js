function typeDropDownOnchange(typeDropDown) {
		var localObj = window.location;
		var contextPath = localObj.pathname.split("/")[1];
		var currentTypeId = typeDropDown.value;
		var url = '/' + contextPath + '/manager/iask/keyword/sti/';
		url = url + currentTypeId;
		window.location.href = url;
}
function modifyKeyWordModelDropDownOnchange(typeDropDown) {
	var newKeyWordModelTypeElm = document.getElementById('newKeyWordModelTypeId')
	newKeyWordModelTypeElm.value = typeDropDown.value;
}


function newPointTypeDropDownOnchange(pointTypeDropDown) {
	var newPointTypeIdElm = document.getElementById('newPointTypeId')
	newPointTypeIdElm.value = pointTypeDropDown.value;
}
function removeKeyword(id, oldTypeId,name){
	//询问框
	layer.confirm('确定删除 "' + name + '" 吗？', {
		icon: 2,
		btn: ['确定','取消'] //按钮
	}, function(){
		remove(id, oldTypeId);
	}, function(){
	});
}
function remove(id, oldTypeId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var url = '/' + contextPath + '/manager/iask/keyword/rk/' + id + '/' + oldTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
}

function modifyBtnClick(pointId){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 layer.open({
		  type: 2,
		  area: ['80%', '80%'],
		  fix: false, //不固定
		  scrollbar: false,
		  maxmin: true,
		  content: '/' + contextPath + '/manager/d2/omp/' + pointId ,
	});
} 

function modifyKeyWordDropDownOnchange(typeDropDown) {
	var modifyKeyWordModelNewTypeIdElm = document.getElementById('modifyKeyWordModelNewTypeId')
	modifyKeyWordModelNewTypeIdElm.value = typeDropDown.value;
}