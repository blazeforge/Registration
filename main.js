var n=document.getElementById("name"),c=document.getElementById("contact"),a=document.getElementById("academics"),co=document.getElementById("course"),p=document.getElementById("payment");
var inp=document.getElementsByTagName("input"),lst=document.getElementsByTagName("li");
var pr=document.getElementById("pv"),ne=document.getElementById("nx"),sub=document.getElementById("sub");
console.log("Kunal Upadhyay");
function nxt() {
    if (window.getComputedStyle(n,null).display == "block" && inp[0].checkValidity() && inp[1].checkValidity()) {
        c.style.display = "block";
        n.style.display = "none";
        pr.disabled=false;
        
        lst[0].classList.remove("act");
        lst[0].classList.add("fld");
        lst[1].classList.add("act");
    }
    else if (window.getComputedStyle(c,null).display == "block" && inp[2].checkValidity() && inp[3].checkValidity()){
        a.style.display = "block";
        c.style.display = "none";
        lst[1].classList.remove("act");
        lst[1].classList.add("fld");
        lst[2].classList.add("act");
    }
    else if (window.getComputedStyle(a,null).display == "block" && inp[4].checkValidity() && inp[5].checkValidity() && inp[6].checkValidity()){
        co.style.display = "block";
        a.style.display = "none";

        lst[2].classList.remove("act");
        lst[2].classList.add("fld");
        lst[3].classList.add("act");
    }
    else if (window.getComputedStyle(co,null).display == "block"){
        p.style.display = "block";
        co.style.display = "none";

        ne.style.display = "none";
        sub.style.display="flex";

        lst[3].classList.remove("act");
        lst[3].classList.add("fld");
        lst[4].classList.add("act");
    }
}

function prv() {
    if (window.getComputedStyle(c,null).display == "block") {
        n.style.display = "block";
        c.style.display = "none";
        pr.disabled=true;
        lst[1].classList.remove("act");
        lst[0].classList.add("act");
    }
    else if (window.getComputedStyle(a,null).display == "block"){
        c.style.display = "block";
        a.style.display = "none";
        lst[2].classList.remove("act");
        lst[1].classList.add("act");
    }
    else if (window.getComputedStyle(co,null).display == "block"){
        a.style.display = "block";
        co.style.display = "none";
        lst[3].classList.remove("act");
        lst[2].classList.add("act");
    }
    else if (window.getComputedStyle(p,null).display == "block"){
        co.style.display = "block";
        p.style.display = "none";

        ne.style.display = "block";
        sub.style.display="none";

        lst[4].classList.remove("act");
        lst[3].classList.add("act");
    }
}