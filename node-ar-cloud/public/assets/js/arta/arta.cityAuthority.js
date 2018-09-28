//省
function cityOnchange(typeDropDown){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var provincetrCode = typeDropDown.value;
	var url = '/' + contextPath + '/manager/system/cityAuthority/ovc';
	$.ajax({
		url: url,
		data: {'provincetrCode':parseInt(provincetrCode)},
		type: "POST",
		async: true,
		dataType: "json",
		complete: function () {
		},
		error: function () {
		},
		success : function(data) {
			RemoveCityOption();
			var expressCompany = $("#selectCityId");
			var str = '<option value="">请选择市</option>';
			var result = eval(data);
			$(result).each(function (key) {
				str += '<option value="'+result[key].code+'">'+result[key].name+'</option>';
			});
			expressCompany.append(str);
		}
	});
}
//市
function typeDropDownOnchange(typeDropDown){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var cityCode = typeDropDown.value;
	
	var option = $("#selectProvincetr option:selected");
	var provincetrCode = $('#selectProvincetr option:selected') .val();//选中的值
	
	var url = '/' + contextPath + '/manager/system/cityAuthority/ovcp';
	$.ajax({
        url: url,
        data: {'provincetrCode':parseInt(provincetrCode),'cityCode':cityCode},
        type: "POST",
        async: true,
        dataType: "json",
        complete: function () {
        },
        error: function () {
        },
        success : function(data) {
        	  RemoveOption();
        	  var expressCompany = $("#citySelectId");
        	  var str = '';
        	  var result = eval(data);
              $(result).each(function (key) {
                  str += '<option value="'+result[key].code+'">'+result[key].name+'</option>';
              });
	          expressCompany.append(str);
	    }
    });
}
function RemoveOption() {
    $("#citySelectId option").remove();
}
function RemoveCityOption() {
	$("#selectCityId option").remove();
}
function submitCity(){
	 var localObj = window.location;
	 var contextPath = localObj.pathname.split("/")[1];
	 var option = $("#citySelectId option:selected");
	 var name = $('#citySelectId option:selected').text();//选中的文本
	 var code = $('#citySelectId option:selected') .val();//选中的值
	 if(name == "" || code ==""){
		 promptBlock("errorInfoDiv", "请选择城市！");
		 return false;
	 }
	  $.ajax({ 
	  	type: 'POST', 
	  	data: {"name":name,"code":code},async: false,
	  	url: '/' + contextPath + '/manager/system/cityAuthority/ac',
	      success: function () { //...
	      	parent.location.reload();
	      },
	      error: function (xhr) {
	    	  promptBlock("errorInfoDiv", "错误！");
	      } 
	  });
  function promptBlock(elementId, errorInfo) {
		var element = getElemet(elementId);
		var display = element.style.display;
		if (display == 'none') {
			element.style.display = 'block';
			hiddenElement(elementId, 5000);
		}
		element.innerHTML = errorInfo;
	}
}
function getElemet(elementId){
	return $('#' + elementId)[0];
}
function hiddenElement(elementId, timout) {
	setTimeout("document.getElementById('" + elementId +"').style.display = 'none'",timout)
}

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
	 var url = '/' + contextPath + '/manager/system/cityAuthority/rct/' + pointTypeId;
	 layer.load(1, {
		  shade: [0.75,'#fff'] //0.1透明度的白色背景
	 });
	 window.location.href = url;
	 
}
//是否使用此权限
function enableCity(typeDropDown){
	var localObj = window.location;
	var contextPath = localObj.pathname.split("/")[1];
	var cityCode = typeDropDown.value;
	
	var code = $('#enableCityId option:selected') .val();//选中的值
	var id = $('#enableCityInputId').val();
	var url = '/' + contextPath + '/manager/system/cityAuthority/ec';
	console.info("	请求进来了");
	$.ajax({
        url: url,
        data: {'code':parseInt(code),'id':id},
        type: "POST",
        async: false,
        dataType: "json",
        complete: function () {
        },
        error: function () {
        	parent.location.reload();
        },
        success : function(data) {
        	parent.location.reload();
	    }
    });
}