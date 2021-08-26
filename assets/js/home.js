$("#del").click(function(){
    var listitems=$("input:checked");
    $.each(listitems,function(i,x){
        console.log(x.id);
        window.location = '/delete-task/?id=' + x.id;
    });
});