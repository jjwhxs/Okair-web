/**
 * 
 */

define(['jquery', 'moment', 'bootstrap'], function($, moment, bootstrap){
	
	moment.locale("zh-cn");
	
	$(document).ready(function() {

		$('#btnLogin').click(function () {
            $.post(
            	baseUrl + '/logic/baseInfo/sysUser/login',
				{
					uid: $('#tbxUid').val(),
					pwd: $('#tbxPwd').val()
				},
				function (result) {
					if(!result.error) {
						window.location.href=localUrl + result.msg+".html";
					} else {
						$('#loginAlert').show();
						setTimeout(
							function(){
								$('#loginAlert').hide();
							},1000
						);
					}
                }
			);
        });
	});
});