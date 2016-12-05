$(function(){
	$(".loadhead").load("commonhead.html?_="+Math.random());
	$(".loadfoot").load("commonfoot.html?_="+Math.random());
	
	
//	$(".head_wrap .bottom a").mouseout(function(){
//		$('.slide_wrap').css("display","none");
//		
//	})
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
						+_data.img+" /></a></dt><dd><p class='btn'><a href='#'>登录查看分销价</a></p><p class='tit'><a href='#'>"
						+_data.title+"</a></p><p class='style'>"+_data.style+"</p><p class='content'>"
						+_data.content+"</p><p class='price'>$"+_data.price+"</p></dd></dl>")
					
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
		   
	       
})
