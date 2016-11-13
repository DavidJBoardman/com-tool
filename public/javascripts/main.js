$(document).ready(function() {
  $('select').material_select();
  // Initialize collapse button
  $(".button-collapse").sideNav();
});

function submit(){

   var title = $('#newtitle').val();
   var description = $('#newdescription').val();

   //$.post(url, data, callback)
   $.post('/insert', {title: title, description: description}, function(){
     location.reload(true);
   });
}


function deleteitem(id){
   //$.post(url, data, callback)
   $.post('/delete', {id: id}, function(){
     location.reload(true);
   });
}


//Update dropdown box name
function txtUpdate(id){
  $('')
}
