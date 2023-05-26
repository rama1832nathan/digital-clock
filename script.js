const clock=document.querySelector('.container');

function Clock(){
    var time=new Date();
    var hh=time.getHours();
    var mm=time.getMinutes();
    var ss=time.getSeconds();
    var txt = hh >= 12 ? "PM" : "AM";
    console.log(time);
    var txt="AM";
    if(hh>12){
        hh=hh-12;
        txt="PM";
    }
    else if(hh==0){
        hh=12;
        txt="AM";
    }
    hh=hh<10?'0'+hh:hh;
    mm=mm<10?'0'+mm:mm;
    ss=ss<10?'0'+ss:ss;

    
    
    const h=document.querySelectorAll('.h');
    const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
hh=hh.toString();
h[0].innerHTML=hh[0];
h[1].innerHTML=hh[1];

mm=mm.toString();
m[0].innerHTML=mm[0];
m[1].innerHTML=mm[1];

ss=ss.toString();
s[0].innerHTML=ss[0];
s[1].innerHTML=ss[1];

const txtElement = document.querySelector('.txt');
txtElement.innerHTML = txt;
    
}
Clock();
setInterval(Clock,1000);

