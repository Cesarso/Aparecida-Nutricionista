var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	// muda o comportamento do botão
    event.preventDefault();

     
     var form = document.querySelector("#form-adiciona");
     var paciente = obtemPacienteDoFormulario(form);

/*melhoramos o codigo através da function:obtemPacienteDoFormulario
     //acessando os campos e extraindo o valor do form:
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
*/



    //variavel do tipo tr criar a tabela:


    //erro na tela
  	//var pacienteTr = montaTr(paciente);
    //substituida na função

  	var erros = validaPaciente(paciente);

  	if (erros.length > 0) {
  		//criando um array com listas de erro na li
  		exibeMensagensDeErro(erros);
  		return;
  	}

  	//antes de criar o paciente testa se passar desse if
  	//se não sai dessa função! 
  	
	

	//inserir a tr dentro do html no <tbody>:
	//var tabela = document.querySelector("#tabela-pacientes");
  //substituida na função 

	//falando para tabela colocar dentro dela a tr que criamos com js coloque como filha:
	//um elemento dentro do outro:
	//tabela.appendChild(pacienteTr);
  //substituida na função


  //chamando a função que joga dados na tabela:
  adicionaPacienteNaTabela(paciente);

	//limpando os dados da tabela:

	form.reset();
	var mensagensDeErro = document.querySelector("mensagens-erro");
	mensagensDeErro.innerHTML = "";

});


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obtemPacienteDoFormulario(form) {
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}
//Para cada uma delas, chamaremos a função montaTd().
//o td criado, deve ser adicionado como o conteúdo de texto o dado, além de uma classe.
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}