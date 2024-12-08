const container =document.getElementById("container");
const Rbtn=document.getElementById("register");
const Lbtn=document.getElementById("log-in");

Rbtn.addEventListener("click", () =>{
    container.classList.add("active");
});
Lbtn.addEventListener("click", () =>{
    container.classList.remove("active");
});




function tap() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var z=document.getElementById("icn");
    if(z.className=="fa-solid fa-eye-slash"){
        z.className="fa-solid fa-eye";
    }
    else if(z.className=="fa-solid fa-eye"){
        z.className="fa-solid fa-eye-slash";
    }
  }
function taps() {
    var x = document.getElementById("pas");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var y=document.getElementById("ic");
    if(y.className=="fa-solid fa-eye-slash"){
        y.className="fa-solid fa-eye";
    }
    else if(y.className=="fa-solid fa-eye"){
        y.className="fa-solid fa-eye-slash";
    }
  }


