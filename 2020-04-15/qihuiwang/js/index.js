var items=document.getElementsByClassName("item");
    
function F(index){
    var navs=items[index].children[0];
    console.log(navs)
    var drops=items[index].children[1];
    if(items[index].children.length>1){
    navs.onmouseenter=function(){
        console.log('ss')
        navs.children[0].style.color='red'
        navs.style.backgroundColor='white';
         drops.style.display='block'
         drops.onmouseleave=function(){
            console.log('ss')
            navs.style.backgroundColor='lightgrey';
             drops.style.display='none'
            
        }
    }
    navs.onmouseleave=function(){
        navs.style.backgroundColor='lightgrey';
        drops.style.display='none';
        navs.children[0].style.color='#767676'
        drops.onmouseenter=function(){
            console.log('ss')
            navs.style.backgroundColor='white';
             drops.style.display='block'
            
        }
        }
    }else{
        navs.onmouseenter=function(){
            navs.children[0].style.color='red'
        }
        navs.onmouseleave=function(){
            navs.children[0].style.color='#767676'
        }
    }
   
}

for(var i=0;i<items.length;i++){
    if(i==1){
        i++
    }
    F(i)
}