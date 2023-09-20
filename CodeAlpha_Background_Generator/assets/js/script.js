var c1=document.querySelector(".first__color");
var c2=document.querySelector(".second__color");
var b=document.querySelector("body");
var h3=document.querySelector("h3");


function bckgnd(){

	b.style.background=	"linear-gradient(to right,"+c1.value+","+c2.value+")";
	h3.textContent= b.style.background+";";
}

c1.addEventListener("input",bckgnd);
c2.addEventListener("input",bckgnd);
