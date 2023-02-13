	/*Para descobrir se o campo de input está preenchido vamos usar um novo comando:
	
	'let nomeDaVariavel = document.forms["nomeDoFormulário"]["nomeDoInput"].value;'
	
	document.forms[""].value encontra o formulário através de seu nome e retorna o
	valor de preenchimento. Se o valor for vazio, não foi preenchido.
	*/

	if (validaCod == "") {
		alert("O código deve ser preenchido");
		return false;
	}

function validarForm() {

	let validaCod	= document.forms["cadastrar"]["codigo"].value;
	let validaData	= document.forms["cadastrar"]["data"].value;
	let validaTit	= document.forms["cadastrar"]["titulo"].value;
	let validaDir	= document.forms["cadastrar"]["diretor"].value;
	let validaAtor	= document.forms["cadastrar"]["ator"].value;
	let validaImdb	= document.forms["cadastrar"]["imdb"].value;
	let validaRad	= document.forms["cadastrar"]["radio"].value;

	//comentar as validações abaixo após adicionar required nos inputs
	/*if (validaCod == "") {
		alert("O código deve ser preenchido");
		return false;
	}
	if (validaData == "") {
		alert("A data deve ser preenchida");
		return false;
	}
	if (validaTit == "") {
		alert("O título deve ser preenchido");
		return false;
	}
	if (validaDir == "") {
		alert("O diretor deve ser preenchido");
		return false;
	}
	if (validaAtor == "") {
		alert("O nome do ator/atriz deve ser preenchido");
		return false;
	}
	if (validaImdb == "") {
		alert("A nota IMDb deve ser preenchida");
		return false;
	}
	if (validaRad == "") {
		alert("O gênero deve ser marcado");
		return false;
	} */
}

function insere(){

}

function insere(){

	let cod		= document.forms["cadastrar"]["codigo"].value;
	let tit		= document.forms["cadastrar"]["titulo"].value;
	let dir		= document.forms["cadastrar"]["diretor"].value;
	let data	= document.forms["cadastrar"]["data"].value;
	let rad		= document.forms["cadastrar"]["radio"].value;
	let ator	= document.forms["cadastrar"]["ator"].value;
	let imdb	= document.forms["cadastrar"]["imdb"].value;

	let inserir = window.document.getElementById("inserirTabela");
	//utilizando tamplate strings (template literais) para adicionar as linhas com crase
	inserir.innerHTML = `<th scope="row">${cod}</td>`;
	inserir.innerHTML += `<td>${tit}</td>`;
	inserir.innerHTML += `<td>${dir}</td>`;
	inserir.innerHTML += `<td>${data}</td>`;
	inserir.innerHTML += `<td>${rad}</td>`;
	inserir.innerHTML += `<td>${ator}</td>`;
	inserir.innerHTML += `<td>${imdb}</td>`;
}