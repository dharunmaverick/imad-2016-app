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
 
 var submit=document.getElementById('sub');
 submit.onclick=function(){
   
  var request=new XMLhttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    lit='<li>'+names[i]+'</li>';
                    
                }
                
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
                var nameInput=document.getElementById('name');
                var name=nameInput.value;
                 request.open('GET','http://dharunmaverick.imad.hasura-app.io/sub?name='+name,true);
    request.send(null);
            };
  
