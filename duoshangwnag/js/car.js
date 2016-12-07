$(function(){
	$(".loadhead").load("commonhead.html?="+Math.random());
	$(".loadfoot").load("commonfoot.html?="+Math.random());
//	
//	             var TITLE = "TITLE";
//              var TOTALNUMBER = "TOTALNUMBER";
//              var TOTALPRICE = "TOTALPRICE";
//              var SINGLEPRICE = "SINGLEPRICE";
//              var SNUM = "SNUM ";
//              var MNUM = "MNUM";
//              var LNUM = "LNUM ";
//              var XLNUM = "XLNUM";
//              var COLOR="COLOR";
//				//====cookie 读取cookie里的数据
//				var TitleStr = getCookie(TITLE);
//				var TotalnumberStr = getCookie(TOTALNUMBER);
//				var TotalpriceStr = getCookie(TOTALPRICE);
//				var SinglepriceStr = getCookie(SINGLEPRICE);
//				var SnumStr = getCookie(SNUM);
//				var MnumStr = getCookie(MNUM);
//				var LnumStr = getCookie(LNUM);
//				var XlnumStr = getCookie(XLNUM);
//				var ColorStr = getCookie(COLOR);
//				
//				//===把字符串转化为数组
//				var TitleArray = [];
//              var TotalnumberArray = [];
//              var TotalpriceArray = [];
//              var SinglepriceArray = [];
//              var SnumArray = [];
//              var MnumArray = [];
//              var LnumArray = [];
//              var XlnumArray = [];
//              var ColorArray = [];
//				if(TitleStr){
//				   TitleArray = TitleStr.split("&");
//				   TotalnumberArray = TotalnumberStr.split("&");
//				   TotalpriceArray = TotalpriceStr.split("&");
//				   SinglepriceArray= SinglepriceStr.split("&");
//				   SnumArray = SnumStr.split("&");
//				   MnumArray =  MnumStr.split("&");
//				   LnumArray =  LnumStr.split("&");
//				   XlnumArray =  XlnumStr.split("&");
//				   ColorArray = ColorStr.split("&");
//				}
//				
//				
//				
//				//=====end cookie
//				
//				for(var i = 0;i<TitleArray.length;i++){
//					var title = TitleArray[i];
//					var totalnumber = parseInt(TotalnumberArray[i]);
//                  var totalprice = parseInt(TotalpriceArray[i]);
//					var singleprice =parseInt(SinglepriceArray[i]);
//					var Snum =parseInt( SnumArray[i]);
//					var Mnum =parseInt( MnumArray[i]);
//					var Lnum =parseInt( LnumArray[i]);
//					var XLnum = parseInt(XlnumArray[i]);
//					var color = ColorArray[i];
					
//                  for(var index=0;index<TitleArray.length;index++){
//                  	 if($(".delete").parent().find(".size").text()=="S"){
//				//  			removeCookie("Snum");
//				    			Snum=Snum;
//				    	  }
//				          if($(".delete").parent().find(".size").text()=="M"){
//				//  			removeCookie("Mnum");
//				    			Mnum=0;
//				    	  }
//				          if($(".delete").parent().find(".size").text()=="L"){
//				//  			removeCookie("Lnum");
//				    			Lnum=0;
//				    	  }
//				          if($(".delete").parent().find(".size").text()=="XL"){
//				//  			removeCookie("XLnum");
//				    			XLnum=0;
//				    	  }
//                  	
//                  }
                   
//                 if(Snum>0){
//			     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>S</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Snum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Snum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
//			     	$(".table").append(content);
//			     	
//			     }
//				     if(Mnum>0){
//				     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>M</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Mnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Mnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
//				     	$(".table").append(content);
//				     	
//				     }
//				     if(Lnum>0){
//				     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>L</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Lnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Lnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
//				     	$(".table").append(content);
//				     	
//				     }
//				     if(XLnum>0){
//				     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>XL</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+XLnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*XLnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
//				     	$(".table").append(content);
//				     	
//				     }
//				     var total_number=singleprice*(XLnum+Lnum+Mnum+Snum);
//				     console.log(total_number);
//				     $(".order span").remove();
//				     $(".order p").append("<span>商品总价:￥"+total_number+"</span>");
//				
				     
				
				    


//					var liNode = document.createElement("li");
//					liNode.innerHTML = "商品名称："+name+",商品价格："+price;
//					oList.appendChild(liNode);
//				}


	
	
	 var title=getCookie("title");
	 var totalnumber=parseInt(getCookie("totalnumber"));
	 var totalprice=parseInt(getCookie("totalnumber"));
	 var singleprice=parseInt(getCookie("singleprice"));
	 var Snum=parseInt(getCookie("Snum"));
	 var Mnum=parseInt(getCookie("Mnum"));
	 var Lnum=parseInt(getCookie("Lnum"));
	 var XLnum=parseInt(getCookie("XLnum"));
	 var color=getCookie("color");
     $(".table .tr").remove();
     if(Snum>0){
     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>S</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Snum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Snum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
     	$(".table").append(content);
     	
     }
     if(Mnum>0){
     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>M</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Mnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Mnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
     	$(".table").append(content);
     	
     }
     if(Lnum>0){
     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>L</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+Lnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*Lnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
     	$(".table").append(content);
     	
     }
     if(XLnum>0){
     	var content="<tr class='tr'><td class='first'><img src='img/details_img/57c5501535838.jpg'/><h3><a href='#'>"+title+"</a><p>"+color+";<p class='size'>XL</p></p></h3></td><td>"+singleprice+"</td><td><input type='button' id='' value='-' class='sub'/><input type='text' value='"+XLnum+"' class='text'/><input type='button' id='' value='+' class='plus'/></td><td class='totalprice'>¥"+(singleprice*XLnum)+"</td><td class='delete'><img src='img/delect.JPG'/>删除</td></tr>";
     	$(".table").append(content);
     	
     }
     var total_number=singleprice*(XLnum+Lnum+Mnum+Snum);
     console.log(total_number);
     $(".order span").remove();
     $(".order p").append("<span>商品总价:￥"+total_number+"</span>");

    $(".delete").click(function(){
    	$(this).parent().find(".text").attr("value",0);
    	console.log($(this).parent().find(".text"));
	    console.log($(this).parent().find(".size").text());
          if($(this).parent().find(".size").text()=="S"){
//  			removeCookie("Snum");
    			Snum=0;
    	  }
          if($(this).parent().find(".size").text()=="M"){
//  			removeCookie("Mnum");
    			Mnum=0;
    	  }
          if($(this).parent().find(".size").text()=="L"){
//  			removeCookie("Lnum");
    			Lnum=0;
    	  }
          if($(this).parent().find(".size").text()=="XL"){
//  			removeCookie("XLnum");
    			XLnum=0;
    	  }
        console.log(Snum);
        console.log(Mnum);
         console.log(Lnum);
        console.log(XLnum);
    	var total_number=singleprice*(XLnum+Lnum+Mnum+Snum);
     console.log(total_number);
     $(".order span").remove();
     $(".order p").append("<span>商品总价:￥"+total_number+"</span>");
    	$(this).parent().remove();
    })
    
    
    
    
})
