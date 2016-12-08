$(document).ready(function() {
	// 返回
	$("#back").bind("click", function(){
		window.history.go(-1);
	});

	// 给页面标题 .header h1 添加 letter-spacing 
	var h1Len = $(".header h1").text().length;
	if (h1Len == 2) {
		$(".header h1").css({
			letterSpacing: "0.7rem",
			paddingLeft: "0.7rem"
		});
	}
	if (h1Len == 3) {
		$(".header h1").css({
			letterSpacing: "0.4rem",
			paddingLeft: "0.4rem"
		});
	}

	// 菜单	
	$("#menu").click(function(){
		$("#navList").slideToggle();
	});

	// 传媒页面设置服务列表的宽和高
	$("#mediaServiceList li figure").outerHeight(parseFloat($("#mediaServiceList li figure").outerWidth() / 1.25));
	$("#mediaServiceList li a i").outerHeight(parseFloat($("#mediaServiceList li figure").outerHeight()));
	$("#mediaServiceList li a i").css("lineHeight", parseFloat($("#mediaServiceList li figure").height()) + "px");

	// 无人机页面，无人机和案例的切换
	/*$("#uavCase li").click(function() {
		$(this).addClass("active");
		$(this).siblings("li").removeClass("active");		
	});
	$("#uav").click(function(){
		$("#uavIntro").show();
		$("#caseIntro").hide();
	});
	$("#case").click(function(){
		$("#caseIntro").show();
		$("#uavIntro").hide();
	});*/

	// 如果无人机列表图片没有文字说明，将背景去掉
	var $uavInfo = $(".uav-info");
	var uavInfoLen = $uavInfo.length;
	for (var i = 0; i < uavInfoLen; i++) {
		if ( $($uavInfo[i]).find("p").text().length == 0 ) {
			$($uavInfo[i]).css("display","none");
		}
	}
	// 设定图片的高度
	$("#uavList li").height($("#uavList li").width() * 3 / 4);

	/* 无人机列表图片使用瀑布流排序
	 * 原理：
	 * 1.把所有的li的高度值放到数组里面
	 * 2.第一行的top都为0
	 * 3.计算高度值最小的值是哪个li
	 * 4.把接下来的li放到那个li的下面
	*/
	/*var margin = $("#uavList li").css("marginRight");  // 这里设置间距
	var li = $("#uavList li");  // 这里是区块名称
	var marginR = li[0].css("marginRight");  // 这里设置间距,取第一个li的右外边距，因为偶数个li没有右外边距
	var marginT = li[0].css("marginTop");  // 这里设置间距,取第一个li的上外边距
	var	li_W = li[0].offsetWidth + marginR;  // 取区块的实际宽度（包含间距，这里使用源生的offsetWidth函数）
	function waterfall(){  // 定义成函数便于调用
		var h = [];  // 记录区块高度的数组
		var n = document.documentElement.offsetWidth / li_W | 0;  // 窗口的宽度除以区块宽度就是一行能放几个区块
		for(var i = 0; i < li.length; i++) {  // 有多少个li就循环多少次
			li_H = li[i].offsetHeight;  // 获取每个li的高度
			if(i < n) {  // n是一行最多的li，所以小于n就是第一行了
				h[i]=li_H;  // 把每个li放到数组里面
				li.eq(i).css("top",0);  // 第一行的Li的top值为0
				li.eq(i).css("left",i * li_W);  // 第i个li的左坐标就是i*li的宽度
			}
			else{
				min_H =Math.min.apply(null,h);  // 取得数组中的最小值，区块中高度值最小的那个
				minKey = getarraykey(h, min_H);  // 最小的值对应的指针
				h[minKey] += li_H+margin ;  // 加上新高度后更新高度值
				li.eq(i).css("top",min_H+margin);  // 先得到高度最小的Li，然后把接下来的li放到它的下面
				li.eq(i).css("left",minKey * li_W);  // 第i个li的左坐标就是i*li的宽度
			}
			$("h3").eq(i).text("编号："+i+"，高度："+li_H);  // 把区块的序号和它的高度值写入对应的区块H3标题里面
		}
	}
	 // 使用for in运算返回数组中某一值的对应项数(比如算出最小的高度值是数组里面的第几个) 
	function getarraykey(s, v) {for(k in s) {if(s[k] == v) {return k;}}}
	// 这里一定要用onload，因为图片不加载完就不知道高度值
	window.onload = function() {waterfall();};
	// 浏览器窗口改变时也运行函数
	window.onresize = function() {waterfall();};*/

});
