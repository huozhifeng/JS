
var oTab = document.getElementById('tab');

var oLis = oTab.getElementsByTagName('li');

var oDivs = oTab.getElementsByTagName('div');
for(var i=0;i<oLis.length;i++){
    oLis[i].shenfenzheng=i;
    oLis[i].onmouseover= function () {
        for(var j=0;j<oLis.length;j++){
            oLis[j].className="";
            oDivs[j].className=""
        }
        this.className="active";
        oDivs[this.shenfenzheng].className="active"
    }
}

/*function tab(n){
    for(var i=0;i<oDivs.length;i++){
        oDivs[i].className='';
        oLis[i].className='';

    }
    oLis[n].className = 'active';
    oDivs[n].className = 'active';

}
for(var i=0;i<oDivs.length;i++){
    oLis[i].zhufeng=i;
    oLis[i].onclick = function(){
        tab(this.zhufeng);
    }
}*/














