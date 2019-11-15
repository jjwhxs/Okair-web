define(["moment"],function(moment){
//	"logic/model/assets/permanentInitModel",
//initPage,

	//检索
	var searchButtonClick=function(){
		$('#tbResult').bootstrapTable('destroy');
		$('#tbResult').bootstrapTable({
			url:baseUrl+'/logic/assets/permanent/list',//在bootstraptable里面添加路径
			method:'post',
			pagination:true,
			singleSelect:true,
			clickToSelect:true,
			contentType:'application/x-www-form-urlencoded',//这个很重要，因为是在bootstraptable插件中
			queryParams:function(param){
				return{
					'assetsCode':$('#assetsCode').val(),
					'assetsType1':$('#selectCategory1').val(),
					'assetsType2':$('#selectCategory2').val(),
					'assetsNameCn':$('#assetsName').val(),
					'city':$('#city').val(),
					'equityType':$('#equityType').val(),
					'address':$('#address').val(),
					'util':$('#unit').val()
				}
			},
			columns:[
			{title:'',checkbox:true},
			{field:'assetscode',title:"资产编号"},
			{field:'namecn',title:"资产名称"},
			{field:'city',title:"所在城市"},
			{field:'util',title:"购买单位"},
			{field:'area',title:"登记面积"},
			{field:'equitytype',title:"产权类型"}
			]
		});
	};
	
	var addButtonClick=function(){
		$('#divAssetsInfo').modal();
	};
	var addAddButtonClick=function(){
//		alert("保存操作");
		$.post(baseUrl+'/logic/assets/permanent/save',
		{
			namecn:$('#tbxAssetsNameEdit').val(),
			assetstype:$('#selectCategoryEdit2').val(),
			city:$('#cityEdit').val(),
			address:$('#addressEdit').val(),
			scale:$('#scaleEdit').val(),
			util:$('#utilEdit').val(),
			area:$('#areaEdit').val(),
			equitytype:$('#equityTypeEdit').val(),
			comment:$('#commentEdit').val()
		},
		function(result){
			console.log(result);
			$('#divEditAlert').show();
			if(result.success)
			{
				//保存成功
				clearAssetsInfoForm();
				$('#divEditAlert').fadeOut(2000);//点击按钮，2秒出现
				$('#divEditAlert').html('<span class="glyphicon glyphicon-ok">资产信息保存成功</span>');
				$('#divEditAlert').removeClass().addClass('alert alert-success');
				setTimeout("$('#divAssetsInfo').modal('hide')",1000);
			}
			else{
				//保存失败
				$('#divEditAlert').html('<span class="glyphicon glyphicon-remove">资产信息保存失败</span>');
				$('#divEditAlert').removeClass().addClass('alert alert-danger');
			}
		});
	};
	
	var clearAssetsInfoForm=function(){
		$('#formAssetsInfo input,#formAssetsInfo textarea').val('');
		$('#selectCategoryEdit1,#selectCategoryEdit2,#cityEdit,#equityTypeEdit').val(null).trigger('change');//触发事件
	};
	
//	var editButtonClick=function(){
//		clearAssetsInfoForm();
//		var table=$('#tbResult');
//		var selected=table.bootstrapTable('getSelections');
//		if(selected!=undefined&&selected.length===1)
//		{
//			var result=selected[0];
//			$('#hidAssetsId').val(result.id);
//			$('#tbxAssetsNameEdit').val(result.namecn);
//			$('#tbxAssetsCodeEdit').val(result.assetscode);
//			$('#addressEdit').val(result.address);
//			$('#areaEdit').val(result.area);
//			$('#utilEdit').val(result.util);
//			$('#equityTypeEdit').val('val',result.equitytype);
//			$('#cityEdit').val('val',result.city);
//			$('#scaleEdit').val(result.scale);
//			$('#commentEdit').val(result.comment);
//			$.post(baseUrl+'/logic/baseInfo/category/'+result.assetstype,
//			       {},
//			       function{
//			       	$('#selectCategoryEdit1').val('val',result.parentid);
//					initPage.initCategoryByParentId('#selectCategoryEdit1',result.parentid);
//			       });
//          $('#divAssetsInfo').modal();
//		}
//      else
//    	{
//			alert('请选中记录后再做相关操作');
//		}
//	};
	return{
		searchButtonClick:searchButtonClick,
		addButtonClick:addButtonClick,
		addAddButtonClick:addAddButtonClick,
//		editButtonClick:editButtonClick
	}
});
