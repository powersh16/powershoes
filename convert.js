 var jquery=require("jquery");
 var endpoint = 'convert';
var access_key = 'API_KEY';


// define from currency, to currency, and amount
from = 'DZD';
to = "EUR";
amount = 30;

// execute the conversion using the "convert" endpoint:

  var   url="http://api.exchangeratesapi.io/v1/convert?access_key=API_KEY&from=DZD&to=EUR&amount="+amount;
   
       

  $.getJSON(url,function(data){
      console.log(data);
  })
  
 
