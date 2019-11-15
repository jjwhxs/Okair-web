
define(["moment"],function(moment){
	//检索
	var searchButtonClick=function(e){
		$('#tbResult').bootstrapTable('destroy');
		$('#tbResult').bootstrapTable({
			url:baseUrl+'/logic/baseInfo/sysUser/find',//在bootstraptable里面添加路径
			method:'post',
			pagination:true,
			contentType:'application/x-www-form-urlencoded',//这个很重要，因为是在bootstraptable插件中
			queryParams:function(param){
				return{
					'uid':$('#sysUserName').val(),
					'role':$('#sysUserRole').val()
				}
			},
			columns:[
			{field:'uid',title:"用户名"},
			{field:'role',title:"权限"},
			{field:'nickname',title:"昵称"},
			{field:'createtime',title:"创建时间"}
			]
		});
	};
	return{
		searchButtonClick:searchButtonClick
	}
});