//selecionando o botao

var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function() {
	console.log("Buscando Pacientes...");

	//método para requisição dos dados:
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function () {
		//exibe no console os dados em txt original
		//console.log(xhr.responseText);

		//span em caso de erro:
		var erroAjax = document.querySelector("#erro-ajax");
		if (xhr.status == 200) {

			erroAjax.classList.add("invisivel");
            //guardando o text string na var resposta:
			var resposta = xhr.responseText;

            //convertendo json para devolver um objeto js
			var pacientes = JSON.parse(resposta);

            //função pra colocar dados na tabela:
			pacientes.forEach(function(paciente) {
				adicionaPacienteNaTabela(paciente);
            });
        } else {

            erroAjax.classList.remove("invisivel");
        }
			
		
	});

	xhr.send();

});