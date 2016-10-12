var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
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
 
 var submit=document.getElementById('subs');
 submit.onclick=function(){
   
  var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var para=request.responseText;
                para=JSON.parse(para);
                    
                }
                
                var p=document.getElementById('para');
                document.getElementById("para").innerHTML += '<p>'
            }
        }
    };
                
                 request.open('GET','http://dharunmaverick.imad.hasura-app.io/subs?='+para,true);
    request.send(null);
            };
  
