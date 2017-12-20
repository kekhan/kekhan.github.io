
var myRequest= new XMLHttpRequest();
function getRandomQuote(){
    var myRequest= new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === XMLHttpRequest.DONE){
            if(myRequest.status < 400){
                var str = JSON.parse(myRequest.responseText);
                var quote = str.value;
                quoteButton(quote);

                
            }
        }
    };
    var url = 'https://api.chucknorris.io/jokes/random';
    myRequest.open('GET',url,true);
    myRequest.send(null);
}


function tweetIt(){
    var url = "https://twitter.com/intent/tweet";
    var text = document.getElementById("message").innerHTML;
    var hashtags ="#";
    var via ="userName";
    window.open(url+"?text="+text+";hashtags"+hashtags+";via"+via,"","width=500,height =300");

}


function quoteButton(quote){
    var color = ['#5E0D24','#75173A','#A1254C','#D4CFCA','#040408'];
    var fontcolor = ['#D00E51','#007AAA','#FDB400','#FF9A00','#FF9A00'];
    
    var element= document.getElementById("message");
    element.innerHTML= quote;
    element.style.color=fontcolor[Math.floor(Math.random()*color.length)];;
    var box = document.getElementById('box');
    box.style.background=color[Math.floor(Math.random()*color.length)];
    var innerbox = document.getElementsByClassName('well')[0];
    innerbox.style.background=color[Math.floor(Math.random()*color.length)];

}
