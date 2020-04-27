var main4_img = document.getElementById("main4-img");
var top_lb = document.getElementById('top-lb')
var left = document.getElementById("left");
var right = document.getElementById("right");

var x = 0;
var flag = true;
left.onclick=function(){
    console.log('ddd')
    if(flag){
        flag=false;
        x--;

        if(x<0){
            top_lb.style.marginLeft=-1350+'px';
            main4_img.style.transition = "all 0s";
            main4_img.style.marginLeft =-1024*3+"px";
            setTimeout(function(){
                main4_img.style.transition = "all .5s";
                main4_img.style.marginLeft =-1024*2+"px";
                x=2;
            },16.7)
        }else{
            main4_img.style.marginLeft=-1024*x + "px";
        }
    }
}
right.onclick=function(){
    console.log("点击了");
    if(flag){
        flag=false;
        x++;
        main4_img.style.marginLeft=-1024*x +"px";
        top_lb.style.marginLeft=0+'px';
    }
}
main4_img.addEventListener("transitionend",function(){
    if(x==3){
        main4_img.style.transition="all 0s";
        main4_img.style.marginLeft=0;
        x=0;
        setTimeout(function(){
            main4_img.style.transition="all .5s"
        },16.7)
    }
    flag=true;
})
