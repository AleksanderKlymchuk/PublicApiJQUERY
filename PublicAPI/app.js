(function($){
url="http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=cy5ymms7n9shrwptazp6cq4s";
var k="?apikey=cy5ymms7n9shrwptazp6cq4s";
$.ajax({
        url:url,
        dataType:"jsonp",
        //jsonpCallBack:"CallBack"
        success:calllback,
        error:function(e)
        {
             console.log(e.message)
        }
}).then(function(){
  $('.add-on').on("click",function(){
      $.ajax({
         url:"http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=cy5ymms7n9shrwptazp6cq4s&q='"+$(this).prev().val()+"'",
         dataType:"jsonp",
         success:calllback,
         error:function(e){
          console.log(e.message)
         }
})
  })
 })
function calllback(json){
 $('tbody tr').remove()
 $.each(json.movies,function(key, value){
})
 $.each(json.movies,function(key, value){
  td=("<tr><td><img src='"+value.posters.thumbnail+k+"'></td><td>"+value.title+"</td><td>"+value.year+"</td><td><a href='"+value.links.self+k+"'>Read more</td></tr>")
  $("tbody").append(td)
 })
}
})(jQuery);



