function copy(origin){
	var result;
	if(typeof origin === "object"){
		if(origin instanceof Array){
			result= [];
			for(var i=0,len=origin.length;i<len;i++){
				result[i]=copy(origin[i]);
			}
		}else{
			result= {};
			for(var i in origin){
				result[i]=copy(origin[i]);
			}
		}
	}else{
		result=origin;
	}
	return result;
}
function create(){
	var _data=obj.data;
	console.log(_data);
	var num=[0,16,16,20,24,8,40];
	var x=0,y=0,_data1=[];
	for(var i=0;i<6;i++){
		x+=num[i];
		y+=num[i+1];
		_data1=copy(_data.slice(x,y));
		$(".m-box-bd").eq(i).append(template("tmpl",{data:_data1}));
	}
}
create();

var turnval = [
	/*guonei : */[667,810,1367,1950],
	/*chujingbaopin :*/ [2110,2255,2816,3416],
	/*shuqi : */[3510,3702,4270,5116],
	/*huiyuan :*/ [5340],
	/*wanshui : */[5880,6020,6840,7820],
	/*ziyou : */[7910],
	/*chujingbibei : */[8710,8860,9680,10557],
	[99999,0,0,0],
]


function cardgo(){
	$(".card").eq(0).click(function(){
		scrollTo(0,667)
	})
	$(".card").eq(1).click(function(){
		scrollTo(0,3510)
	})
	$(".card").eq(2).click(function(){
		scrollTo(0,8710)
	})
	$(".card").eq(3).click(function(){
		scrollTo(0,5880)
	})
	$(".card").eq(4).click(function(){
		scrollTo(0,7910)
	})
}
cardgo();

function titlego(){
	//1
	$(".guonei").find(".left").click(function(){
		scrollTo(0,810)
	});
	$(".guonei").find(".right").click(function(){
		scrollTo(0,1370)
	});
	$(window).scroll(function(){
		if(scrollY >= 810 && scrollY < 1950){
			$(".guonei").find(".m-tab-top").addClass("fixed1")
			scrollY > 1367 ? $(".guonei").find(".left").removeClass("currentzi").siblings().addClass("currentzi") : $(".guonei").find(".right").removeClass("currentzi").siblings().addClass("currentzi");
		}else{
			$(".guonei").find(".m-tab-top").removeClass("fixed1")
		}
	})


	//2
	$(".chujing").find(".left").click(function(){
		scrollTo(0,2255)
	});
	$(".chujing").find(".right").click(function(){
		scrollTo(0,2820)
	});
	$(window).scroll(function(){
		if(scrollY >= 2255 && scrollY < 3416){
			$(".chujing").find(".m-tab-top").addClass("fixed1")
			scrollY > 2816 ? $(".chujing").find(".left").removeClass("currentzi").siblings().addClass("currentzi") : $(".chujing").find(".right").removeClass("currentzi").siblings().addClass("currentzi")
		}else{
			$(".chujing").find(".m-tab-top").removeClass("fixed1")
		}
	})

	//3
	$(".shuqi-hot").find(".left").click(function(){
		scrollTo(0,3702)
	});
	$(".shuqi-hot").find(".right").click(function(){
		scrollTo(0,4280)
	});
	$(window).scroll(function(){
		if(scrollY >= 3702 && scrollY < 5116){
			$(".shuqi-hot").find(".m-tab-top").addClass("fixed1")
			scrollY > 4270 ? $(".shuqi-hot").find(".left").removeClass("currenthuang").siblings().addClass("currenthuang") : $(".shuqi-hot").find(".right").removeClass("currenthuang").siblings().addClass("currenthuang")
		}else{
			$(".shuqi-hot").find(".m-tab-top").removeClass("fixed1")
		}
	})

	//4
	$(".wanshui").find(".left").click(function(){
		scrollTo(0,6020)
	});
	$(".wanshui").find(".right").click(function(){
		scrollTo(0,6890)
	});
	$(window).scroll(function(){
		if(scrollY >= 6020 && scrollY < 7820){
			$(".wanshui").find(".m-tab-top").addClass("fixed1")
			scrollY > 6840 ? $(".wanshui").find(".left").removeClass("currentcheng").siblings().addClass("currentcheng") : $(".wanshui").find(".right").removeClass("currentcheng").siblings().addClass("currentcheng")
		}else{
			$(".wanshui").find(".m-tab-top").removeClass("fixed1")
		}
	})

	//5
	$(".chujing-must").find(".left").click(function(){
		scrollTo(0,8860)
	});
	$(".chujing-must").find(".middle").click(function(){
		scrollTo(0,9680)
	});
	$(".chujing-must").find(".right").click(function(){
		scrollTo(0,10557)
	});
	$(window).scroll(function(){
		if(scrollY > 8860){
			$(".chujing-must").find(".m-tab-top").addClass("fixed1")
			if(scrollY>=8860 && scrollY<9680){
				$(".chujing-must").find(".left").addClass("currentlan").siblings().removeClass("currentlan")
			}else{
				if(scrollY>=9680 && scrollY<10557){
					$(".chujing-must").find(".middle").addClass("currentlan").siblings().removeClass("currentlan")
				}else{
					$(".chujing-must").find(".right").addClass("currentlan").siblings().removeClass("currentlan")
				}
			}
		}else{
			$(".chujing-must").find(".m-tab-top").removeClass("fixed1")
		}
	})
}
titlego();

function rNav(turnval){
	$(window).scroll(function(){
		//右导航栏定位
		if(scrollY> 450){
			$(".r-nav").addClass("fixed2");
			
		}else{
			if(scrollY < 100){
				$(".r-nav").removeClass("fixed2");
			}
		}
	})

	//右导航栏点击跳转
	$(".slider-list").click(function(){
		index = $(this).index();
		scrollTo(0,turnval[index][0])
		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
	})
	
	$(window).scroll(function(){
		for(var i = 0;i<7;i++){
			if(scrollY>=turnval[i][0] && scrollY<turnval[i+1][0]){
				$(".slider-list").eq(i).find("a").addClass("active").parent().siblings().find("a").removeClass("active")
			}
		}
	})
	//返回顶部
	$(".r-nav-ft").find("a").click(function(){
		scrollTo(0,0)
	})
}

rNav(turnval);
