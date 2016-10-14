
window.onload=function(){
    var clock=document.getElementsByClassName("clock")[0];
//创建刻度
    createMark();
    function createMark(){
        for(var i=0;i<60;i++){
            if(i%5==0){
                var w=4,h=10;
            }
            else{
                var w=2,h=6;
            }
            var div=document.createElement("div");
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:#000;position:absolute;top:0;left:0";
            div.style.transform="translate("+(200-w)/2+"px,0) rotate("+i*6+"deg)";
            div.style.transformOrigin="center 100px";
            clock.appendChild(div);

        }
    }
//创建指针             宽度 高度 颜色 角度
    var time=new Date();
    var h=createPointer(40,6,"#000",time.getHours()*30-90+(time.getMinutes()*6)/12);
    var m=createPointer(60,4,"#000",time.getMinutes()*6-90);
    var s=createPointer(80,2,"#000",time.getSeconds()*6-90);
    setInterval(function(){
        var time=new Date();console.log(time)
        h.style.transform="translate(100px,"+(200-6)/2+"px) rotate("+(time.getHours()*30-90+(time.getMinutes()*6)/12)+"deg)";
        m.style.transform="translate(100px,"+(200-4)/2+"px) rotate("+(time.getMinutes()*6-90)+"deg)";
        s.style.transform="translate(100px,"+(200-2)/2+"px) rotate("+(time.getSeconds()*6-90)+"deg)";
    },1000);
    function createPointer(w,h,c,a){
        var div=document.createElement("div");
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";transform:translate(100px,"+(200-h)/2+"px) rotate("+a+"deg);transform-origin:left center;position:absolute;left:0;top:0";
        clock.appendChild(div);
        return div;
    }
}
