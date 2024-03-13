$(function(){
    let filterTitle = $('.premium_text .filter .filter_title a');
    let filterList = $('.premium_text .filter .list');
    
    filterTitle.click(function(){
        //alert();
        filterList.toggleClass('on');
    })
})
