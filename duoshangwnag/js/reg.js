$(function(){
	//表单验证
	$('.form').validate({
	  rules:{
        phone_email:{
          required:true,
        },
        password:{
          required:true,
          digits:true
        } 
      },
      messages:{
        phone_email:{
          required:"该项必须填写",
        },
        password:{
          required:"该项必须填写",
        }
      }
	});
	
	//点击图片生成4位验证码
	$(".clickme").click(function(){
					var code="0123456789abcdefghijklnmoqprstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var str="";
                  for(var index=0;index<4;index++){
	                 var a=parseInt(Math.random()*62);
	                 str=str.concat(code[a]);
                   }
                  $(".getvalidate").val(str);
                  $(".validatecode").blur(function(){
					if($(this).val()==$(".getvalidate").val()){
						$(this).val("验证码输入合法");
						
					}else{
						
						$(this).val("验证码输入不合法");
					}
					
				  })
				
				})
	
	$(".submit").click(function(){
	  if($('.phone_email').val()!=''||$('.password').val()!=''||$("#checkbox").checked){
	       window.location.href="login.html";
//	    $.ajax(function(){
//	      type:"get",
//			  	url:"",
//			  	async:true,`
//			  	data:{
//			  	  account:$(".phone_email").val(),
//			  	  password:$(".password").val(),
//			  	
//			  	},
//			  	success:function(_data){
//			  		var myDate=JSON.parse(_data);
//			  		console.log(myDate.data.forecast);
//			  	}
//	    
//	    })

	  
	  }
	  return false;
	})
	
	
	//加载公共尾部
	$(".loadfoot").load("commonfoot.html?="+Math.random());
})
