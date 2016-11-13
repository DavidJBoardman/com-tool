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


// list sort
var mylist = $('.savedWords');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

// dropdown sort
var mylist = $('.savedWords');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });

//Update dropdown box name
function txtUpdate(id){
  $('')
}
