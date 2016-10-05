console.log('Loaded!');
var element=document.getElementById('sam');
element.innerHTML='this is console page for imad done by dharun :) ';

var img=document.getElementById('img')
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
    img.onclick=function(){
    var interval=setInterval(moveRight,10);
};