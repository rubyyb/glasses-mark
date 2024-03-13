$(function(){
    let filterTitle = $('.glasses_text .filter .filter_title a');
    let filterList = $('.glasses_text .filter .list');
    
    filterTitle.click(function(){
        //alert();
        filterList.toggleClass('on');
    })
})
