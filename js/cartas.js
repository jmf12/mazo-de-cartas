document.querySelector("#registrar").addEventListener("click", function () {
    guardarCarta();
    pintarTabla();
});

$(".btncarta").click(function () {
    var datos = localStorage.getItem("datos");

    datos = JSON.parse(datos);

    for (let item of datos) {
        if (item.numero == this.dataset.carta) {
            item.cantidad++;
        }
    }

    localStorage.setItem("datos", JSON.stringify(datos));
    pintarTabla();
});

function guardarCarta() {
    var numero = document.querySelector("#numero").value;
    var carta = document.querySelector("#carta").value;
    var datos = localStorage.getItem("datos");

    datos = JSON.parse(datos);

    var dato = { numero: numero, carta: carta, cantidad: "0" };

    datos.push(dato);
    localStorage.setItem("datos", JSON.stringify(datos));
}

function cargarJSON() {
	const nuevoIngreso = localStorage.getItem('nuevo') == "true";
    if (nuevoIngreso) {
		var miObjeto = [
			{ numero: "1", carta: "as", cantidad: 2 },
			{ numero: "2", carta: "2 de diamantes", cantidad: 3 },
		];
		localStorage.setItem("datos", JSON.stringify(miObjeto));
		localStorage.setItem('nuevo',false);
	}else {
		var datos = localStorage.getItem("datos");
		localStorage.setItem("datos", (datos));
	}
}

function pintarTabla() {
    var datos = localStorage.getItem("datos");

    let res = document.querySelector("#listado");
    res.innerHTML = "";

    console.log("objetoObtenido: ", JSON.parse(datos));
    datos = JSON.parse(datos);

    for (let item of datos) {
        res.innerHTML += `<tr>
  				<td>${item.numero}</td>
  				<td>${item.carta}</td>
  				<td>${item.cantidad}</td>
			</tr>`;
    }
}

function leerJSON() {
    $.getJSON("../data/datos.json", function (datos) {
        console.log(datos);
    });
}
leerJSON();
cargarJSON();
pintarTabla();
