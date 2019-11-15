define(['jquery', 'moment' ,'bootstrapTable', 'bootstrapTreeview'], function($, moment, table, treeview){
moment.locale('zh-cn');
var currentTime=function(){
	$('#currentTime').html(moment().format('YYYY-MM-DD dddd HH:mm:ss'))
}
$(document).ready(function()
	{
		$.getJSON("js/logic/model/menuList.json",function(data){
		$('#tree').treeview({
			data:data,
			selectedIcon:"glyphicon glyphicon-right",
			selectedBackColor:'#FF7F24',
			expandIcon:'glyphicon glyphicon-plus',
			onNodeSelected:function(event,data)
			{
				var parent=$('#tree').treeview("getNode",data.parentId);
				$('#breadcrumb li:gt(0)').remove();
				$('#breadcrumb').append($('<li>').html(parent.text));
				$('#breadcrumb').append($('<li>').html(data.text));
				//通过点击按钮，显示右边内容
				$('#contentFrame').attr('src',data.href)
			}
		});

	});
		currentTime();
	setInterval(currentTime,1000);
	})
});





