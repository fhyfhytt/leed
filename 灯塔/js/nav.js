$(".nav li").click(function () {
	$(this).addClass("col").siblings().removeClass("col")
})