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
            var user=getCookie("username");
	        console.log(user);
          if(textarea.value!=''){
          	$(".div3 ul").append("<li><h3>"+user+":</h3>"+textarea.value+"<span class='time'>"+month+"."+day+"</span></li>")
          	
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
    //减1件
    var sNum=0;
    var mNum=0;
    var lNum=0;
    var xlNum=0;
    var total=0;
    var color;
    $(".sub").click(function(){
    	if(parseInt($(this).parent().find(".text").val())>0){
//  	console.log($(this).parent().find(".text").val());
    	$(this).removeAttr("disabled","disabled");
    	var number=parseInt($(this).parent().find(".text").val())-1;
    	$(this).parent().find(".text").val(number);
//  	console.log(typeof $(this).parent().find("h3").text())
        if($(this).parent().find("h3").text()=='S'){
        	sNum--;	
        	console.log(sNum);
        }
        if($(this).parent().find("h3").text()=='M'){
        	mNum--;	
        }
        if($(this).parent().find("h3").text()=='L'){
        	lNum--;	
        }
        if($(this).parent().find("h3").text()=='XL'){
        	xlNum--;	
        }
       }else{
       	$(this).attr("disabled","disabled");
       	console.log(parseInt($(this).parent().find(".text").val()));
       }
       total=sNum+mNum+lNum+xlNum;
    $(".showselect").html("<span>白色</span><span>("+total+")件</span><span>("+sNum+")S</span><span>("+mNum+")M</span><span>("+lNum+")L</span><span>("+xlNum+")XL</span>");
    $(".totalnumber").html(total);
    $(".totalprice").html(total*35)
    
    })
    //加1件
    $(".plus").click(function(){
//  	console.log(typeof $(this).parent().find(".text").val());
//  	console.log(parseInt($(this).parent().find(".text").val())+1);
        var num= parseInt($(this).parent().find(".text").val())+1;
        $(this).parent().find(".text").val(num);
         if($(this).parent().find("h3").text()=='S'){
        	sNum++;	
        	console.log(sNum);
        }
        if($(this).parent().find("h3").text()=='M'){
        	mNum++;	
        }
        if($(this).parent().find("h3").text()=='L'){
        	lNum++;	
        }
        if($(this).parent().find("h3").text()=='XL'){
        	xlNum++;	
        }
        total=sNum+mNum+lNum+xlNum;
    $(".showselect").html("<span>白色</span><span>("+total+")件</span><span>("+sNum+")S</span><span>("+mNum+")M</span><span>("+lNum+")L</span><span>("+xlNum+")XL</span>");
    $(".showselect").html("<span>白色</span><span>("+total+")件</span><span>("+sNum+")S</span><span>("+mNum+")M</span><span>("+lNum+")L</span><span>("+xlNum+")XL</span>");
    $(".totalnumber").html(total);
    $(".totalprice").html(total*35)
    })
    //颜色
    $(".bottom .color").click(function(){
    	console.log($(this).attr("value"));
    	color=$(this).attr("value");
    	
    })
    var title=getCookie("title");
    console.log(title);
    $(".title").html(title);
    
    //注意点击事件后面的代码只在加载完毕后触发一次，点击触发事件后不会再执行
   // 也就是输出的值不会变化
  //点击加入购物车时候将最后的totalnumber和totalprice放入cookie
$(".addto").click(function(){
//	    var title=document.getElementsByClassName("title")[0].innerHTML;
        var totalnumber=total;
        var totalprice=total*35;
        var singleprice=35;
        var Snum=sNum;
        var Mnum=mNum;
        var Lnum=lNum;
        var XLnum=xlNum;
        var Color=color;

            var date=new Date();
            date.setDate(date.getDate()+10);
			setCookie("title", title,date);
		    setCookie("totalnumber", totalnumber, date);
		    setCookie("totalprice", totalprice, date);
		    setCookie("singleprice", singleprice, date);
		    setCookie("Snum", Snum, date);
		    setCookie("Mnum", Mnum,date);
		    setCookie("Lnum", Lnum, date);
		    setCookie("XLnum", XLnum, date);
		    setCookie("color", Color, date);
		     
		    console.log("提交之后："+document.cookie);
		    window.location.href="car.html";
var aLi = document.getElementsByTagName("li");
                
//              var TITLE = "TITLE";
//              var TOTALNUMBER = "TOTALNUMBER";
//              var TOTALPRICE = "TOTALPRICE";
//              var SINGLEPRICE = "SINGLEPRICE";
//              var SNUM = "SNUM ";
//              var MNUM = "MNUM";
//              var LNUM = "LNUM ";
//              var XLNUM = "XLNUM";
//              var COLOR="COLOR";
//              //====cookie
//              //先从读取下cookie，看看之前是否有存过数据，存过则读取出来
//						//在之前的基础之上追加
//						var titleStr = getCookie(TITLE);
//						var totalnumberStr = getCookie(TOTALNUMBER);
//						var totalpriceStr = getCookie(TOTALPRICE);
//						var singlepriceStr = getCookie(SINGLEPRICE);
//						var snumStr = getCookie(SNUM);
//						var mnumStr = getCookie(MNUM);
//						var lnumStr = getCookie(LNUM);
//						var xlnumStr = getCookie(XLNUM);
//						var colorStr = getCookie(COLOR);
//						
//						
//						var titleArray = [];
//						var totalnumberArray = [];
//						var totalpriceArray = [];
//						var singlepriceArray = [];
//						var snumArray = [];
//						var mnumArray = [];
//						var lnumArray = [];
//						var xlnumArray = [];
//						var colorArray = [];
//						if(titleStr){
//							//因为对去出来的数据为字符串，不便于我们操作，所以讲字符串转化为数组
//							//这里注意我们一定要统一分割字符串的字符,这里用 &
//							titleArray = titleStr.split("&");
//							totalnumberArray  = totalnumberStr.split("&");
//							totalpriceArray = totalpriceStr.split("&");
//							singlepriceArray  = singlepriceStr.split("&");
//							snumArray = snumStr.split("&");
//							mnumArray  = mnumStr.split("&");
//							lnumArray = lnumStr.split("&");
//							xlnumArray  = xlnumStr.split("&");
//							colorArray  = colorStr.split("&");
//							
//						}
//						console.log("titleArray:"+titleArray);
//						
//						
//						//没有则直接添加到cookie中
//
//              //====end cookie
//              
//              var TitleArray = [];
//              var TotalnumberArray = [];
//              var TotalpriceArray = [];
//              var SinglepriceArray = [];
//              var SnumArray = [];
//              var MnumArray = [];
//              var LnumArray = [];
//              var XlnumArray = [];
//              var ColorArray = [];
//              
//
//                  document.getElementsByClassName("addto")[0].onclick = function() {
//                      
//                      var title=document.getElementsByClassName("title")[0].innerHTML;
//				        var totalnumber=total;
//				        var totalprice=total*35;
//				        var singleprice=35;
//				        var Snum=sNum;
//				        var Mnum=mNum;
//				        var Lnum=lNum;
//				        var XLnum=xlNum;
//				        var Color=color;
//
//                      var d = new Date();
//                      d.setDate(d.getDate()+7); //7天后的日期
//					     saveGoods(title,totalnumber,totalprice,singleprice,Snum,Mnum,Lnum,XLnum,Color);
//
//                     
//                     
//                  }
//
//              
//              function saveGoods(title,totalnumber,totalprice,singleprice,Snum,Mnum,Lnum,XLnum,Color){
//                	titleArray.push(title);
//					totalnumberArray.push(totalnumber);
//					totalpriceArray.push(totalprice);
//					singlepriceArray.push(singleprice);
//					snumArray.push(Snum);
//					mnumArray.push(Mnum);
//					lnumArray.push(Lnum);
//					xlnumArray.push(XLnum);
//					colorArray.push(Color);
//					
//					console.log("titleArray:"+titleArray);
//					
//					//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
//					//把数据类型转化为str
//					var tmptitleStr = titleArray.join("&");
//					var tmptotalnumberStr = totalnumberArray.join("&");
//					var tmptotalpriceStr = totalpriceArray.join("&");
//					var tmpsinglepriceStr = singlepriceArray.join("&");
//					var tmpsnumStr = snumArray.join("&");
//					var tmpmnumStr = mnumArray.join("&");
//					var tmplnumStr = lnumArray.join("&");
//					var tmpxlnumStr = xlnumArray.join("&");
//					var tmpcolorStr = colorArray.join("&");
//					
//					
//					console.log("tmptitleStr:"+tmptitleStr);
//					
//					//cookie的数据准备好了，接下来就是更新cookie里的数据
//					removeCookie(TITLE);
//					removeCookie(TOTALNUMBER);
//					removeCookie(TOTALPRICE);
//					removeCookie(SINGLEPRICE);
//					removeCookie(SNUM);
//					removeCookie(MNUM);
//					removeCookie(XLNUM);
//					removeCookie(LNUM);
//					removeCookie(COLOR);
//					
//					console.log("删除coo "+document.cookie)
//					var d = new Date();
//					d.setDate(d.getDate()+7);
//					
//					setCookie(TITLE,tmptitleStr,d);
//					setCookie(TOTALNUMBER,tmptotalnumberStr,d);
//					setCookie(TOTALPRICE,tmptotalpriceStr,d);
//					setCookie(SINGLEPRICE,tmpsinglepriceStr,d);
//					setCookie(SNUM,tmpsnumStr,d);
//					setCookie(MNUM,tmpmnumStr,d);
//					setCookie(LNUM,tmplnumStr,d);
//					setCookie(XLNUM,tmpxlnumStr,d);
//					setCookie(COLOR,tmpcolorStr,d);
//					console.log("加coo "+document.cookie)
//					window.location.href="car.html";
//              }
//              
                

  	
  	
})
  

})
