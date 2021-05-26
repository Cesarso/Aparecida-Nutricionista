/*console.log("Fui carregado de um arquivo externo!");*/
			var titulo = document.querySelector(".titulo");
			console.log(titulo);
			/*vai imprimir: <h1>Aparecida Nutrição</h1>*/
			console.log(titulo.textContent);
			/*Vai imprimir o conteúdo: Aparecida Nutrição*/
			titulo.textContent = "Aparecida Nutricionista";
			/*Trocando o conteúdo de titulo*/


/*Calculando o IMC:*/

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	
var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValida = true;
var alturaEhValida = true;




if (peso <= 0 || peso >= 1000) {
	console.log("Peso Inválido");
	pesoEhValida = false;
	tdImc.textContent = "Peso inválido!";
	/*importante! manipular estilo css com classes */
	paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3.00) {
	console.log("Altura Inválido");
	alturaEhValida = false;
	tdImc.textContent = "Altura inválida!";
	paciente.classList.add("paciente-invalido");

}

if (alturaEhValida && pesoEhValida) {
	var imc = peso / (altura * altura);
	/*toFixed para casas decimais*/
	tdImc.textContent = imc.toFixed(2);
}

}


function validaPeso(peso) {
	if (peso>=0 && peso <1000) {
		return true;
	}else{
		return false;
	}
	// body...
}

function validaAltura(altura) {
	if (altura>=0 && altura<=3.0) {
		return true;
	}else{
		return false;
	}
	// body...
}


//exportando o calculo para a funçao:

function calculaImc(peso, altura) {
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

	






		