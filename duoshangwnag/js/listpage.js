$(function(){
	$(".loadhead").load("commonhead.html?_="+Math.random());
	$(".loadfoot").load("commonfoot.html?_="+Math.random());
	
	
//	$(".head_wrap .bottom a").mouseout(function(){
//		$('.slide_wrap').css("display","none");
//		
//	})

//   $(".look").click(function(){
//		  var title=$(this).parent().parent().find(".title").text();
//		   var date=new Date();
//		    console.log(title);	
//		   date.setData(date.getDate()+10);
//		   setCookie("title",title,date);
//		     var title=getCookie("title");
//          console.log(title);	
//		   })
//		   

	var total;
	//翻页按钮+加载图片
	var page = function(_pageindex, _isgenerate){
				$.get('goodList.txt', {'_': Math.random()}, function(response){
					var obj = JSON.parse(response);
					var pageCount = obj.totalCount % obj.pageSize > 0 ? parseInt(obj.totalCount / obj.pageSize) + 1 :  parseInt(obj.totalCount / obj.pageSize)
//					total=obj.totalCount;
//					$('.content-top .number').append(total);
					var pageFlag = '';
						$(".list").find("dl").remove();
					for(var i=(_pageindex-1)*obj.pageSize;i<_pageindex*obj.pageSize;i++){
						if(i==obj.totalCount){
							return false;
						}
						var _data=obj.data[i];
						console.log(_data);
						$('.list').append("<dl><dt><a href='#'><img src="
						+_data.img+" /></a></dt><dd><p class='btn'><a href='javascript:(0)' class='look'>登录查看分销价</a></p><p class='tit'><a href='#' class='title'>"
						+_data.title+"</a></p><p class='style'>"+_data.style+"</p><p class='content'>"
						+_data.content+"</p><p class='price'>$"+_data.price+"</p></dd></dl>")
					    console.log($(".look"));
							//以下setcookie代码的成功进行需要在页面不跳转的情况下，a的href='javascript:(0)'，href为空还是刷新页面
							$(".look").click(function(){
						  var title=$(this).parent().parent().find(".title").text();
						   console.log("ok");
						   var date=new Date();
						   date.setDate(date.getDate()+10);
						   setCookie("title",title,date);
						     var title=getCookie("title");
				    console.log(title);	
				           window.location.href="details.html";
						   })          
//                  $(".list").on("click",".look",function(){
//                  	console.log("ok");
//                  })
					
					
					}
					
				
				
				
				
					if(!_isgenerate){
						return false;
					}
//					翻页按钮
					for(var i = 1; i <= pageCount; i++){
						pageFlag += ('<span>' + i + '</span>');
					}
//					$(pageFlag).appendTo('#pageing');
					
					pageFlag += ('<span>' + "下页"+ '</span>');
					pageFlag += ('<span>' + "首页"+ '</span>');
					pageFlag += ('<span>' + "尾页"+ '</span>');
					pageFlag += ('共'+pageCount+'页,到第<input type="text" class="topage" placeholder="page"/>页&nbsp;<input type="button" class="button" value="确定" />');
					$(pageFlag).appendTo('#pageing');
						$(".button").click(function(){
//							document.getElementById("pageing").getElementsByTagName("span")[_pageindex-1].style.background="white";
							console.log($(".topage").val());
							if($(".topage").val()){
						      num=$(".topage").val();
							  page(num);
							}
						
						})
//						document.getElementById("pageing").getElementsByTagName("span")[0].style.background="red";
						
				})
			
				 
			}
//	        $(".look").click(function(){
//		  var title=$(this).parent().parent().find(".title").text();
//		   var date=new Date();
//		    console.log(title);	
//		   date.setDate(date.getDate()+10);
//		   setCookie("title",title,date);
//		     var title=getCookie("title");
//          console.log(title);	
//		   })
		   
			page(1, true);
			var num=1;
			$('#pageing').on('click', function(evt){
				for(var i=1;i<=5;i++){
					document.getElementById("pageing").getElementsByTagName("span")[i].style.background="white";
				}
				if($(evt.target).text()=="下页"){
					var next;
					next=num;
					console.log();
					if(parseInt(next)+1==6){
					  parseInt(next)+1==5;	
						
					}else{
						page(parseInt(next)+1);
						console.log(parseInt(next)+1);
						num=parseInt(next)+1;
						console.log(num);
					}
				}
				if($(evt.target).text()>=1&&$(evt.target).text()<=5){
				 page($(evt.target).text());
				 num=$(evt.target).text();
				}
				if($(evt.target).text()=="尾页"){
					num=5;
					page(num);
				}
				if($(evt.target).text()=="首页"){
					num=1;
					page(num);
					
				}
				console.log(num);
				document.getElementById("pageing").getElementsByTagName("span")[num-1].style.background="red";
			})
		   $(".look").click(function(){
//		  var title=$(this).parent().parent().find(".title").text();
		   console.log("ok");
////		   var date=new Date();
////		   date.setDate(date.getDate()+10);
////		   setCookie("title",title,date);
////		     var title=getCookie("title");
////  console.log(title);	
		   })
//		   
	       
})
