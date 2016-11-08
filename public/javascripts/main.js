function submit(){

   var title = $('#newtitle').val();
   var description = $('#newdescription').val();
 
   //$.post(url, data, callback)
   $.post('/insert', {title: title, description: description}, function(){
     location.reload(true);
   });
}
