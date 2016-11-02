function comment_template(id)//returns a js code unique for each page
{   
  var js_data=`
    //get the submit element on this page by referencing it with given item_id
    submit_btn=document.getElementById('sub_id_${id}');
    //use send_req_and_get_res when page is loaded and when submit_btn is clicked
    submit_btn.onclick=function ()
      {
        send_req_and_get_res();
      }   
      
      //*******************************************************************************************************************************************************************
      //think!
     send_req_and_get_res();//when page is loaded
     //function that sends request,with data as null when page is loaded,catches resopse and render's on current page
    function send_req_and_get_res()
    {
      var request=new XMLHttpRequest();
      request.onreadystatechange= function()
      {
        //*******************************************************************************************************************************************************************
        //Loading
        if (request.readyState===XMLHttpRequest.DONE)
        {
          if (request.status === 200)
          {//take comments from the request and parse them into array 
            var comment=JSON.parse(request.responseText);
            var new_list="";
            //creating a string to render in the inner html of ol on this article page
            for (var i=comment.length-1;i>=0;i--)    //storing in reverse to show the most recent comment at the top
             {
                new_list+="<li>"+comment[i]+"</li>";
              };
            var old_list=document.getElementById('ol_id_${id}');
            if (new_list!=="")
            {
            old_list.innerHTML=new_list;
            }
          }
        }
      };
      //making request
      input=document.getElementById('in_id_${id}');
      data=input.value;
      //sending request to page with id=current_id
      request.open('GET','http://localhost:8080/ui/${id}/comments?comment='+data,true);
      //request.open('GET','http://ceidloc.imad.hasura-app.io/ui/${id}/comments?comment='+data,true);
      request.send(null);
    };
    `

  return js_data;
    
}



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
 
 var submit=document.getElementById('sub');
 submit.onclick=function(){
   
  var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list +='<li>'+names[i]+'</li>';
                    
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
  
