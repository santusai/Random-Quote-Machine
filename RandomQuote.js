function generateQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      dataType: "jsonp",
       
      success: function( response ) {
        $("#quote").html("<p id='quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
       
      $("#twit").attr("href", ("https://twitter.com/intent/tweet?text=" + json.quoteText + " by " + json.quoteAuthor +"&hashtags=famousQuotes"));
      
}
     });
}

$(function() {
  generateQuote();
});
