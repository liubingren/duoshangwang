$(function(){
  //加载头部和底部
$(".loadhead").load("commonhead.html?="+Math.random());
	$(".loadfoot").load("commonfoot.html?="+Math.random());
	
	
  
  
  //nav左边动态效果
$(".nav .left .list").mouseenter(function(){
	$(this).css("width","240px").css("background","white");
	$(this).find(".top").css("color","red");
	$(this).find(".tab").css("display","block");
//	$(this).parent().next(function(){
//		$(this).css("background","none");
//		$(this).find(".wrap").css("display","none");
//		$(this).find(".pic_after").css("display","block");
//	
//	});
//	$(this).parent().next().mouseleave(function(){
//		$(this).css("background"," url(../img/nav_img/nav_bg.jpg) no-repeat right top");
//		$(this).find(".wrap").css("display","block");
//		$(this).find(".pic_after").css("display","none");
//	
//	});

});



   $(".nav .left .list").mouseleave(function(){
	$(this).css("width","205px").css("background","black");
	$(this).find(".top").css("color","white");
	$(this).find(".tab").css("display","none");
});


//回到顶部
     
				timer = null;
				$(".totop").click(function(){
				
					
					//关闭旧的定时器
					clearInterval(timer);
					
					//创建新的定时器
					timer = setInterval(function(){
					//1.获取当前值
					var current = document.documentElement.scrollTop || document.body.scrollTop;
					
					//2.给一个速度
					var iSpeed = (0 -current)/8;
					iSpeed = Math.floor(iSpeed);
					
					//3.判断是否到达目标值
					if(current==0){
						clearInterval(timer);
						return;
					}
						
					//4.运动
					document.documentElement.scrollTop = document.body.scrollTop = current + iSpeed;
						
					},30);
		
				}); 
				
   //客服面板伸展
   $('.kefu').click(function(){
   	 if( $(this).css("right")=="-177px"){
   	 	 $(this).stop().animate({right:0},400)
   	 	
   	 }else{
   	 	 $(this).stop().animate({right:-177},400)
   	 }
   	
   })
   
   
//轮播图实现
              var $main= $('#main');
				var $pic = $main.find('.pic li');
				var $nav = $main.find('.nav ul');

				// 轮播数量
				var len= $pic.length;

				// 初始化索引值
				var index= 0;

				// 上一张的索引
				var lastIndex= 0;
				show();

				// 添加导航(小方块)
				for(var i=0;i<len;i++){
					var $li = $('<li/>');
					if(i==0) {
						$li.addClass('select');
					}
					$li.appendTo($nav);
				}

				//点击小方块切换图片
				$nav.on('click','li',function(){
					index = $(this).index();
					show();
				});

				var timer;
				$main.on('mouseenter',function(){
					clearInterval(timer);
				}).on('mouseleave',function(){
					timer = setInterval(function(){
						index++;
						show();
					},3000);
				}).trigger('mouseleave')

				.on('click','.next',function(){	
					console.log(this);
					index++;
					show();
				}).on('click','.prev',function(){
					index--;
					show();
				});


				// 图片展示效果函数
				function show(){
					//清空上一张的样式
					reset();

					if(index<0){
						index = len - 1;
					}else if(index > len - 1){
						index = 0;
					}
					// 显示隐藏背景图片
					$pic.hide().eq(index).show();
				

					// 小方块高亮效果
					$nav.find('li').removeClass().eq(index).addClass('select');

					// 清除当没有显示的li下面的img1,img2的样式
					// $pic.eq(index).siblings('li').find('.img1,.img2').removeAttr('style');

					// 更新lastIndex
					lastIndex = index;
				}

				function reset(){
					$pic.eq(lastIndex).find('img0').removeAttr('style');//removeProp(attr)
				}
      
              
//		   
		   
		   
		   
//		   ___________________________________
      
      var $main1= $('#main1');
				var $pic1 = $main1.find('.pic li');
				var $nav1 = $main1.find('.nav ul');

				// 轮播数量
				var len1= $pic1.length;

				// 初始化索引值
				var index1= 0;

				// 上一张的索引
				var lastIndex1= 0;
				show1();

				// 添加导航(小方块)
				for(var i=0;i<len1;i++){
					var $li = $('<li/>');
					if(i==0) {
						$li.addClass('select');
					}
					$li.appendTo($nav1);
				}

				//点击小方块切换图片
				$nav1.on('click','li',function(){
					index1 = $(this).index();
					show1();
				});

				var timer1;
				$main1.on('mouseenter',function(){
					clearInterval(timer1);
				}).on('mouseleave',function(){
					timer1 = setInterval(function(){
						index1++;
						show1();
					},3000);
				}).trigger('mouseleave')

				.on('click','.next',function(){	
					console.log(this);
					index1++;
					show1();
				}).on('click','.prev',function(){
					index1--;
					show1();
				});


				// 图片展示效果函数
				function show1(){
					//清空上一张的样式
					reset1();

					if(index1<0){
						index1 = len1 - 1;
					}else if(index1 > len1 - 1){
						index1 = 0;
					}
					// 显示隐藏背景图片
					$pic1.hide().eq(index1).show();
				

					// 小方块高亮效果
					$nav1.find('li').removeClass().eq(index1).addClass('select');

					// 清除当没有显示的li下面的img1,img2的样式
					// $pic.eq(index).siblings('li').find('.img1,.img2').removeAttr('style');

					// 更新lastIndex
					lastIndex1 = index1;
				}

				function reset1(){
					$pic1.eq(lastIndex1).find('img0').removeAttr('style');//removeProp(attr)
				}
      
              
		
})
