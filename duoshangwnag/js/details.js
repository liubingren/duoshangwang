$(function(){
	$(".loadhead").load("commonhead.html?_="+Math.random());
	$(".loadfoot").load("commonfoot.html?_="+Math.random());
	
	        var bigPic = document.getElementById('bigPic');
            var smallPics = document.getElementById('smallPic').getElementsByTagName('img');

            // 2）给li绑定onmouseover事件
            for(var i=0;i<smallPics.length;i++){
                smallPics[i].onmouseover = function(){
                    // 把变大图的src属性该成当前小图的src属性
                     bigPic.src = this.src;
                     bigPic.setAttribute("jqimg",this.src);
                    for(var i=0;i<smallPics.length;i++){
                        smallPics[i].parentNode.className = '';
                    }

                    // 给当前li添加高亮样式
                    this.parentNode.className = 'active';
                }
                
            }
//  左右箭头
	$(".arr-left").click(function(){
		$(".list").css("left","-202px");
		$(".first").css("visibility","hidden");
	})
	$(".arr-right").click(function(){
		$(".list").css("left",0);
		$(".first").css("visibility","visible");
//		$(".first").css("display","none");
	})
	
////	切换tab
//	var tab_btn= document.getElementsByClassName("tab_btn")[0];
//		var spans = tab_btn.getElementsByTagName('span');
//		var content = document.getElementsByClassName('div');
//
//		// 先隐藏除第一个以外的.content
//		for(var i=1;i<content.length;i++){
//			content[i].style.display = 'none';
//		}
//
//		// 给span标签绑定点击事件
//		// 点击时，显示对应的.content
//		for(var i=0;i<spans.length;i++){
//			// 把i值赋值给每个按钮的属性
//			spans[i].index = i;
//			spans[i].onclick = function(){
//				// for循环隐藏所有.content
//				for(var i=0;i<content.length;i++){
//					content[i].style.display = 'none';
//
//					// 把所有span背景颜色改成灰色
//					spans[i].style.backgroundColor = 'red';
//				}
//
//				// 显示相应.content
//				content[this.index].style.display = 'block';
//
//				// 高亮显示当前tab标签
//				spans[this.index].style.backgroundColor = '#f60';
//
//
//			}
//		}
//      
//      固定在头部
        window.onscroll = function(){
				//获取一下到顶端的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	            console.log(scrollTop);
	            if(scrollTop>=1225){
	            	document.getElementsByClassName("tab_btn")[0].style.position="fixed";
	            	document.getElementsByClassName("tab_btn")[0].style.top=0;
	            	document.getElementsByClassName("tab_btn")[0].style.left=292+'px';
	            }
	            else{
	            	document.getElementsByClassName("tab_btn")[0].style.position="absolute";
	            	document.getElementsByClassName("tab_btn")[0].style.top=295+"px";
	            	document.getElementsByClassName("tab_btn")[0].style.left=0;
	            }
	            //	切换tab
	
	        }
	var tab_btn= document.getElementsByClassName("tab_btn")[0];
		var spans = tab_btn.getElementsByTagName('span');
		var content = document.getElementsByClassName('div');

		// 先隐藏除第一个以外的.content
		for(var i=1;i<content.length;i++){
			content[i].style.display = 'none';
		}

		// 给span标签绑定点击事件
		// 点击时，显示对应的.content
		for(var i=0;i<spans.length;i++){
			// 把i值赋值给每个按钮的属性
			spans[i].index = i;
			spans[i].onclick = function(){
				 document.body.scrollTop=1225;
				console.log(document.body.scrollTop);
				for(var i=0;i<content.length;i++){
					content[i].style.display = 'none';

					// 把所有span背景颜色改成灰色
					spans[i].style.backgroundColor = 'red';
				}

				// 显示相应.content
				content[this.index].style.display = 'block';

				// 高亮显示当前tab标签
				spans[this.index].style.backgroundColor = '#f60';


			}
		}
        var button=document.getElementsByClassName("yes")[0];
        var textarea=document.getElementsByClassName("textarea")[0];
      
        button.onclick=function(){
        	var date=new Date();
        	var month=date.getMonth()+1;
        	var day=date.getDate();
          if(textarea.value!=''){
          	$(".div3 ul").append("<li>"+textarea.value+"<span class='time'>"+month+"."+day+"</span></li>")
          	
          }else{
          	alert("评论不能为空！");
          	
          }
        }
        //放大功能
	  	$(".bigPic").jqueryzoom({
		  xzoom: 500,//放大区域宽度
		  yzoom: 500,//放大区域高度
		  preload: 1,//是否显示预加载
		  offset:10,//放大区域偏离小图的距离
		  position: "right",//放大区域显示的位置（left,right）
		  lens:true //是否显示小图上的透明区域
	  });
	  
//	  对about中心区域的判断
//  $(".sub").click(function(){
//  	$(this).
//  	
//  })
//  
//  $(".text")
//  $(".plus")
    
})
