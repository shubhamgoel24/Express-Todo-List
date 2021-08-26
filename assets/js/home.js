$("#del").click(function(){
    var listitems=$("input:checked");
    var delarry = [];
    $.each(listitems,function(i,x){
        delarry.push(x.id);
    });
    var arrStr = encodeURIComponent(JSON.stringify(delarry));
    window.location = '/delete-task/?id=' + arrStr;
});