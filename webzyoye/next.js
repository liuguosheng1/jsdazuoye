var i1=document.getElementById('i1');
var i3=document.getElementById('i3');
var i4=document.getElementById('i4');
var numbers=parseInt(i4.value);
i4.onchange=function(){
	numbers=parseInt(i4.value);
	if(numbers>5){
		i4.value=5;
		i4.innerHTML="5";
		console.log(i4);
	}
}
i1.onclick=function(){
	i3.style.cursor="pointer";
	if(numbers<2){
		i1.style.cursor="not-allowed";
	}else{
		numbers--;
		i4.value=numbers;
		i4.innerHTML=numbers;
	}
}
i3.onclick=function(){
	i1.style.cursor="pointer";
	if(numbers>=5){
		i3.style.cursor="not-allowed";
	}else{
		numbers++;
		i4.value=numbers;
		i4.innerHTML=numbers;
		i3.style.cursor="pointer";
	}
}
var i01=document.getElementById('001');
var i02=document.getElementById('002');
var i03=document.getElementById('003');
i01.style.border="1px solid #ff0853";
i01.style.backgroundImage="url('../img/duigou.png')";
i01.style.backgroundRepeat="no-repeat";
i01.style.backgroundPosition="45px 17px";
i01.onclick=function(){
	i01.style.border="1px solid #ff0853";
	i01.style.backgroundImage="url('../img/duigou.png')";
	i01.style.backgroundRepeat="no-repeat";
	i02.style.border="none";
	i02.style.backgroundImage="none";
	i03.innerHTML="'150ml'";
	i01.style.backgroundPosition="45px 17px";
}
i02.onclick=function(){
	i02.style.border="1px solid #ff0853";
	i02.style.backgroundImage="url('../img/duigou.png')";
	i02.style.backgroundRepeat="no-repeat";
	i01.style.border="none";
	i01.style.backgroundImage="none";
	i03.innerHTML="'200ml'";
	i02.style.backgroundPosition="45px 17px";
}
var button=document.getElementById('button');
var button3=document.getElementById('button3');
var button5=document.getElementById('button5');
var button11=document.getElementById('button11');
button3.onclick=function(){
	button.style.display="none";
}
button5.onclick=function(){
	button.style.display="none";
}
button11.onclick=function(){
	button.style.display="block";
}
//切换图片与放大镜
var z1=document.getElementById('z1');
var z2=document.getElementById('z2');
var z3=document.getElementById('z3');
var z4=document.getElementById('z4');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var tu=document.getElementById('tu');
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box'); 
z1.onclick=function(){
	if(z2.style.border='none'){
		z2.style.border='2px solid #ff9003';
		z3.style.border='none';	
		tu.src="../img/pp0.jpeg";
		Bimg.src="../img/pp0.jpeg";
	}
}
z2.onmouseover=function(){
	z2.style.border='2px solid #ff9003';
	z3.style.border='none';	
	tu.src="../img/pp0.jpeg";
	Bimg.src="../img/pp0.jpeg";
}
z3.onmouseover=function(){
	z3.style.border='2px solid #ff9003';
	z2.style.border='none';
	tu.src="../img/pp1.jpeg";
	Bimg.src="../img/pp1.jpeg";
}
z4.onclick=function(){
	if(z3.style.border='none'){
		z3.style.border='2px solid #ff9003';
		z2.style.border='none';
		tu.src="../img/pp1.jpeg";
		Bimg.src="../img/pp1.jpeg";
	}
}
img1.onmouseover=function(){
    slider.style.display='block';
	img2.style.display='block';
	box.style.width="818px";
}
img1.onmouseout=function(){
    slider.style.display='none';
	img2.style.display='none';
	box.style.width="408px";
}
img1.onmousemove=function(ev){
	var ev=ev||event;
	var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
	var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;
	oL=oL>oMaxw?oMaxw:oL<0?0:oL;
	oT=oT>oMaxh?oMaxh:oT<0?0:oT;
	slider.style.left = oL+'px';
	slider.style.top = oT+'px';
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';
	Bimg.style.width="816px";
	Bimg.style.height="816px";
}

