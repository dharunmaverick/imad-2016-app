var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLhttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('counters');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://dharunmaverick.imad.hasura-app.io/count',true);
    request.send(null);
            };
 

