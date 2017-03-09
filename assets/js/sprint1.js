  document.getElementById("enviar").onclick = function(){
    var correcta = 0;
    var p1 = document.getElementsByName("rb1");
    var p2 = document.getElementsByName("rb2");
    var p3 = document.getElementsByName("rb3");

    if(p1[0].checked == false && p1[1].checked == false && p1[2].checked == false ){
      alert ("Responder la pregunta 1")
    }
    else if(p2[0].checked == false && p2[1].checked == false && p2[2].checked == false ){
      alert ("Responder la pregunta 2")
    }
    else if(p3[0].checked == false && p3[1].checked == false && p3[2].checked == false ){
      alert ("Responder la pregunta 3")
    }
    else {
  		if(p1[0].checked){correcta++}
  		if(p2[2].checked){correcta++}
  		if(p3[2].checked){correcta++}
     	document.getElementById("quiz1").innerHTML ="Tienes " +correcta + " correcta(s)";
    }
  }
