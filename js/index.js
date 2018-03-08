$(document).ready(function(){

	  // 内容分类切换 
	  $(".g-2nd-tt li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("#g-2nd-content .mod").eq($(".g-2nd-tt li").index(this)).show().siblings("#g-2nd-content .mod").hide();
    });

	  // 新闻动态轮播图 
	  jQuery(".slideBox1").slide({mainCell:".bd ul",autoPlay:true,delayTime:700,effect:"fold"});

	  // 头条切换
	 	$(".tt-tt li").hover(function(){
	      $(this).addClass("active").siblings().removeClass("active");
	      $(".tylb .mod1").eq($(".tt-tt li").index(this)).show().siblings(".tylb .mod1").hide();
	  });

	  // 专题栏目
	   jQuery(".g2-content1-2r").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50});

	  // 政务公开
	  $(".g2-content2-1 li").hover(function(){
        $(this).addClass("active2").siblings().removeClass("active2");
    });

});