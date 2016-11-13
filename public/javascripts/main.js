$(document).ready(function() {
  $('select').material_select();
});

function submitWord(){

   var word = $('#newword').val();

   //$.post(url, data, callback)
   $.post('/insertWord', {word: word}, function(){
     location.reload(true);
   });
}

function submitSentence(){

   var sentence = $('#newsentence').val();

   //$.post(url, data, callback)
   $.post('/insertSentence', {sentence: sentence}, function(){
     location.reload(true);
   });
}

function deleteitem(id){
   //$.post(url, data, callback)
   $.post('/delete', {id: id}, function(){
     location.reload(true);
   });
}


function update(id, done){
   var checkboxes = $('input[type=checkbox]');
   for (var i=0; i<checkboxes.length; i++){
     checkboxes[i].setAttribute("disabled", "disabled");
   }
   //$.post(url, data, callback)
   $.post('/update', {id: id, done: !done}, function(){
     location.reload(true);
   });
}

//Update dropdown box name
function txtUpdate(id){
  $('')
}
