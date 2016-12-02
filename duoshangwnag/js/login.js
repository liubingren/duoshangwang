$(function(){   
	            //load公共底部
				
	$(".loadfoot").load("commonfoot.html?="+Math.random());
				
				
				//自动轮播
				var $main = $('#main');
				var $pic = $main.find('.pic li');
				
				// 轮播数量
				var len = $pic.length;

				// 初始化索引值
				var index = 0;

				// 上一张的索引
				var lastIndex = 0;
				show();

				

				var timer;
				$main.on('mouseenter',function(){
					clearInterval(timer);
				}).on('mouseleave',function(){
					timer = setInterval(function(){
						index++;
						show();
					},3000);
				}).trigger('mouseleave')


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
	

	

					// 更新lastIndex
					lastIndex = index;
				}
                function reset(){
					$pic.eq(lastIndex).find('img').removeAttr('style');//removeProp(attr)
				}
				
				
			});