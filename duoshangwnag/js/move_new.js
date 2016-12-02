

/**
 * 
 * @param {Object} 需要动画的元素对象
 * @param {Object} 要进行动画的属性对象
 * @param {Object} extend  {buffer,callback} 
 * buffer 为true 表示为弹性运动
 * callback  回调函数
 */
function animate(obj,json,extend){
	if(obj.isMoving){
		return;
	}else{
		
		obj.isMoving = true;
	}
	
	//一组定时器
	obj.timerlist = {};
	
	//为每一个属性添加一个定时器
	for(var attr in json){
		(function(attr){
			//
			obj.timerlist[attr] = {speed:0};
			obj.timerlist[attr].timer = setInterval(function(){
				//1.获取当前值
				var iNow = 0;
				if(attr == "opacity"){
					iNow = parseFloat(getStyle(obj,attr))*100;
					
					
				}else{
					iNow = parseFloat(getStyle(obj,attr));
				}
				
				
				//2.声明一个速度
				var speed = obj.timerlist[attr].speed;
				//根据目标值，计算速度
				if(extend && extend.buffer){
					speed += (json[attr] - iNow)/5;
					speed *= 0.75;//给一个弹性系数
				}else{
					speed = (json[attr] - iNow)/5;
					
				}
			
			//3.临界值判断,当非常接近目标值时就停止定时器
			if(Math.abs(iNow - json[attr])<0.1){
				console.log("Math.abs(iNow - json[attr]<0.1");
				//清除定时器
				clearInterval(obj.timerlist[attr].timer);
				//删掉对应属性
				delete obj.timerlist[attr];
				//如果timerlist的所有属性都没有了，说明动画都执行完毕
				var length = getObjLength(obj.timerlist);
				console.log("length:"+length);
				//可以调用回调函数了
				if(getObjLength(obj.timerlist)==0){//所有的定时器都已经停止了
					//
					console.log("move_new动画执行完毕！！！！！");
					stop(obj);
					(extend && extend.callback()) ? extend.callback() : "";
					
				}
				
			}else{
				//4.根据速度，修改当前的值，做运动（动画）
				if(attr == "opacity"){
					obj.style.opacity = (iNow + speed)/100;
					
					obj.style.filter = "alpha(opacity="+parseInt(iNow+speed)+")";
				}else{
					obj.style[attr] = iNow + speed + "px";
				}
				
				//把速度存起来
				obj.timerlist[attr].speed = speed;
			}
			 
				
				
				
			},30);
			
			
		})(attr);
		
		
	}
	
	
	
}


//获取样式的值
function getStyle(obj,attr){
	if(obj.currentStyle){
//		return obj.currentStyle[attr];
		//做一点容错处理
		//isNaN JS第一天，是不是一个非数字！NaN "Not a Number",说明不是一个数字,
		return isNaN(parseFloat(obj.currentStyle[attr])) ? obj.style[attr] = 0 : obj.currentStyle[attr];      
	}else{
		return isNaN(parseFloat(getComputedStyle(obj,null)[attr])) ? obj.style[attr]=0 :getComputedStyle(obj,null)[attr];
	}
}


//获取对象的属性个数
function getObjLength(obj){
	var n = 0;
	for(var i in obj){
		n++;
	}
	return n;
}

//停止运动方法
 function stop(obj){
 	obj.isMoving = false;
 	
 }
