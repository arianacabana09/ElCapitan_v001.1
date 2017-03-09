//Ingresar nombre de usuario
var myParam = location.search.split('nombre=')[1];
        var saludo = document.getElementById("nom");
        if (myParam == undefined) {
            var nom = prompt('¿Cual es tu nombre?');

            while(nom=="" || nom==null)
            {
              nom = prompt("Ingrese su nombre por favor");
            }
            saludo.textContent = nom;
        } else {
            saludo.textContent = myParam;
        }
        document.getElementById("coders").addEventListener('click',function() {
        this.href += "?nombre="+saludo.textContent;
      })
//habilitar myDropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
