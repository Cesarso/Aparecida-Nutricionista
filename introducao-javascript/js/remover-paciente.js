
//elemento Pai é a table
/*
var tabela = document.querySelector("table");

//parentNode é a linha 'pai' para ser excluida
//event.target indica qual elemento sofre a ação
tabela.addEventListener("dblclick",function(event){
	//some devagar
    event.target.parentNode.classList.add("fadeOut");



    setTimeout(function(){
    	event.target.parentNode.remove();

    },500);



});*/


var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }
});

/*pacientes.forEach(function (paciente) {
	//escultar o duplo clique no elemento
	paciente.addEventListener("dblclick", function () {
	 	this.remove();
	});
});

*/
