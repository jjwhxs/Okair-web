

//以下都为页面初始化的内容
define(function(){
	initPageStyle=function(){
		$('#tbResult').bootstrapTable({locale:'zh-CN'});//这样的话在没有数据时，会显示没有记录
	};
	
	//初始化用户权限下拉列表
	//java里面无法形成方法赋值，而js里面可以利用匿名函数（变量）进行赋值，初始化全部的下拉列表不用传递参数，值和对应的文本信息要分清，向服务器-数据库发送请求的是一个值
	var initSysUser=function(){
		$.post(baseUrl+'/logic/baseInfo/sysUser/roleList',{},function(result){
			$('#sysUserRole').empty();//每一次都需要向远程服务器发送请求，获得新的数据，因为下拉列表是动态变化的
			var option=new Option("全部","-1");
			$('#sysUserRole').append(option);//result是一个JSON数组信息
			$.each(result, function(index,item) {
				option=new Option();
				option.text=item.role;
				option.value=item.id;//此处和后端有点不一样
				$('#sysUserRole').append(option);//把它加到父元素上，挂到树上
			});
		})
	};
	
	//初始化数据
	var initData=function(){
		initSysUser();	
	}
	//对外开放的接口
	return{
		initData:initData,
		initPageStyle:initPageStyle
	}
});