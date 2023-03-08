
function addhiddevVissibility() {
    var x = document.getElementById("id-hidegroub");
    x.style.visibility = "hidden";
  }
  
  function myFunction() {
    var x = document.getElementById("id-hidegroub");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      document.getElementById("id-son-background").style.height = "150vh";
      document.getElementById("id-aboat-back").style.top = "120vh";
      x.classList.add("animate__backInDown");
    } else {
      x.style.visibility = "hidden";
      document.getElementById("id-son-background").style.height = "100vh";
      document.getElementById("id-aboat-back").style.top = "70vh";
    }
  }

  
  function categoreyall() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.visibility ="visible";
        b.style.visibility ="visible";
        d.style.visibility ="visible";
        c.style.visibility ="visible";
       }
  }
  function categoreyall() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="inline";
        b.style.display ="inline";
        d.style.display ="inline";
        c.style.display ="inline";
       }
  }
  function idcategoreyface() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="inline";
        b.style.display ="none";
        d.style.display ="none";
        c.style.display ="none";
       }
  }
  function idcategoreyhair() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="inline";
        d.style.display ="none";
        c.style.display ="none";
       }
  }
  function idcategoreyfacekids() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="none";
        d.style.display ="inline";
        c.style.display ="none";
       }
  }
  function idcategoreyhairkids() {
    var a = document.getElementById("idcategorey-face"),
        b = document.getElementById("idcategorey-hair"),
        c = document.getElementById("idcategorey-face-kids"),
        d = document.getElementById("idcategorey-hair-kids");
    if(true){
        a.style.display ="none";
        b.style.display ="none";
        d.style.display ="none";
        c.style.display ="inline";
       }
  }

  window.addEventListener('load', addhiddevVissibility);
