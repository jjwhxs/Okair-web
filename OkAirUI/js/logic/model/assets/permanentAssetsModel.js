


require(["jquery","moment","bootstrap","bootstrapTable","bootstrapTableZhCN","bootstrapSwitch","bootstrapSelect",
        "logic/model/assets/permanentAssetsInitModel",
        "logic/model/assets/permanentAssetsEventModel"],function($,moment,strap,table,zhcn,swi,select,pageInit,pageEvent){
        	moment.locale('zh-cn');
        	
        	$(function(){
        		
        		pageInit.initPageStyle();
        		//类别下拉列表事件绑定
         		$('#selectCategory1').change(function(){
        			pageInit.initCategoryByParentId('#selectCategory2',this.value);
        		});
        		$('#selectCategoryEdit1').change(function(){
        			pageInit.initCategoryByParentId('#selectCategoryEdit2',this.value);
        		});
        		$('#btnAddAdd').click(pageEvent.addButtonClick);
        		$('#btnAdd').click(pageEvent.addAddButtonClick);
	     		//给编辑按钮绑定事件
//	      		$('#editButton').click(pageEvent.editButtonClick);
        		//绑定检索按钮事件
        		$('#btnSearch').click(pageEvent.searchButtonClick);
         		pageInit.initData();
        	});
        });
