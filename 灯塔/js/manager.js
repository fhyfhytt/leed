$(".btn").click(function () {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        shadeClose: true,
        skin: 'manage',
        content: `<h2>尊敬的<span>${$("#name").text()}女士</span></h2>
        <p>一位来自灯塔app的神秘人，向您推荐了<a href="#">《红高粱》</a>，表示这是一本很不错的书，希望您也能看看</p>
        <p>消息来自：2018/09/25 13:28</p>   
      
        
        `
    });
})