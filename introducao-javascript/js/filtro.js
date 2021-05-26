var campoFiltro = document.querySelector("#filtrar-tabela");

//escuta o evento de digitação no campo
campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

if (this.value.length > 0) {
	console.log("tem algo digitado!")


    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        //expressão regular pra buscar por parte do texto:
        var expressao = new RegExp(this.value, "i");

        //deixando a pesquisa dos não buscados invisiveis:
        if(!expressao.test(nome)){
        	paciente.classList.add("invisivel");
        }else{
        	paciente.classList.remove("invisivel");
        }
    }
   }else{
   	//ao apagar as letras mostra a lista normal:
   		for (var i = 0; i < pacientes.length; i++) {
        		var paciente = pacientes[i];
        		paciente.classList.remove("invisivel");

        	}
   } 
});