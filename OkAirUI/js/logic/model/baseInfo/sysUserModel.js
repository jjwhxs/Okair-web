

requirejs(["jquery","bootstrap","bootstrapTable","bootstrapTableZhCN","bootstrapSelect","moment"
		,"logic/model/baseInfo/sysUserInitModel"
		,"logic/model/baseInfo/sysUserEventModel"]
		,function($,bootstrap,table,zhcn,select,moment,pageInit,pageEvent){
			moment.locale('zh-cn');
			
			$(function(){
				pageInit.initData();//样式已经完成，因为调用了BOOTSTRAP组件
				pageInit.initPageStyle();
				$('#searchButton').click(pageEvent.searchButtonClick);
			});
		});