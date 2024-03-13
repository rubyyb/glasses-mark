$(function(){
    // 링크방지
    $('a').click(function(e){
        if($(this).attr("href") == "#") {
            e.preventDefault();
        }
    })

    // 스크립트 시작
    // header
        let nav = document.querySelector('.header .mobile_gnb');
        let openBtn = document.querySelector('.header .mobile_btn');
        let depth01 = document.querySelectorAll('.pc_gnb .depth01 > a');
        let depth02 = document.querySelectorAll('.pc_gnb .depth02');

        openBtn.addEventListener('click', () => {
            nav.classList.toggle('on');
        })
        for(let i = 0; i < depth01.length; i++) {
            depth01[i].addEventListener('click', () => {
                if(getComputedStyle(depth01[i].nextElementSibling).display === 'none') {
                    depth02.forEach((item) => {
                        item.classList.remove('on');
                    })
                    depth01[i].nextElementSibling.classList.add('on');
                } else {
                    depth01[i].nextElementSibling.classList.remove('on');
                }
            })
        }


    //프리미엄 아이웨어 탭메뉴
    let mobileMenu = $('.glasses_menu .inner .tab_menu li');
    let mobileList = $('.glasses_menu .inner .mobile_list');

    mobileMenu.click(function(){
        mobileMenu.removeClass('on');
        $(this).addClass('on');

        mobileList.removeClass('on');
        mobileList.eq($(this).index()).addClass('on');
    })

    //새로운 소식
    let news = document.querySelector('.news');
    let newsItem = document.querySelectorAll('.news .list .item');
    
    let newTop = news.offsetTop;

    window.addEventListener('scroll', () => {
        let scrollBar = window.scrollY;
        //console.log(scrollBar);

        if(newTop <= scrollBar) {
            newsItem.forEach((item, index) => {
                item.classList.add('on' + index, 'active');
            })
        } else if (scrollBar === 0) {
            newsItem.forEach((item, index) => {
                item.classList.remove('on' + index, 'active');
            })
        }
    })// news
})/* script end */
