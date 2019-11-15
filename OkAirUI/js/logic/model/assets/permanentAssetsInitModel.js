define(function(){
	var initPageStyle=function(){
		
		$('#tbResult').bootstrapTable({locale:'zh-CN'});//这条函数非常关键，会影响表格的形成，以及一些文本的出现
		
		//css样式
		$('.row').css('margin-top','10px');
		$('#divSearchForm').css('line-height','40px');
		$('#divSearchForm >div').css('margin-left','10px');
		$('.glyphicon-asterisk').css('color','red');
		
		
		//bootstrap样式（也可以在html中通过class属性值来出现）---把html中共同的代码块表现在js样式文件中
		$('#divSearchForm').addClass('form-inline');
		$('#divSearchForm >div').addClass('form-group');//原来放哪 ，选择器何处来
		$('button').addClass('btn');
		
		$('#divAssetsInfo').addClass('modal fade');//隐藏模态框
		$('#formAssetsInfo').addClass('form-horizontal');
		$('#formAssetsInfo >div').addClass('form-group');
		$('input,textarea').addClass('form-control');
		$('label').addClass('control-label');
		$('#formAssetsInfo label').addClass('col-md-3');
		$('#formAssetsInfo .input-group').addClass('col-md-8');
		
//		$('input[type="checkbox"]').bootstrapSwitch({
//			onText:'是',
//			offText:'否',
//			size:'small'
//		});

		//下拉框
		$('select').selectpicker({width:'100px',noneSelectedText:'请选择...'});//在没有文本，内容可选则时
	};
	
	//获取类别一级下拉菜单，selectId:选择器，pid:父id
	var initCategoryByParentId=function(selectId,pid){
		if(pid!=undefined&&pid!='')
		{
			initSelect(selectId,'/logic/baseInfo/category/list/'+pid);
		}
	};
	
	var initCity=function(selectId){
		initSelect(selectId,'/logic/baseInfo/sysDict/city');
	};
	
	var initEquityType=function(selectId){
		initSelect(selectId,'/logic/baseInfo/sysDict/equityType');
	};
	
	var initSelect=function(selectId,url){
		if(url!=undefined)
		{
			$.post(baseUrl+url,{},function(result){
				$(selectId).empty();
				var option=new Option('全部','-1');
				$(selectId).append(option);
				$.each(result,function(index,item){
					option=new Option();
					option.text=item.namecn||item.display||item.text;
					option.value=item.id;
					$(selectId).append(option);
				});
				$(selectId).selectpicker('refresh');
				$(selectId).selectpicker('render');
			});
		}
	};
	//初始化数据
	var initData=function(){
		initCategoryByParentId('#selectCategory1','3');
		initCategoryByParentId('#selectCategoryEdit1','3');
		initCity('#city');
		initCity('#cityEdit');
		initEquityType('#equityTypeEdit');
	};
	
	return{
		initPageStyle:initPageStyle,
		initData:initData,
		initCategoryByParentId:initCategoryByParentId
	}
});
