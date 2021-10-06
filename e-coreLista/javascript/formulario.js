var botaoAdicionar = document.getElementById("adicionar-pessoa");
var formulario = document.getElementById("form-adiciona");
var tdClassificacao = document.querySelectorAll(".info-classificacao");




botaoAdicionar.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("fui clicado");
	var pessoaTabela = obtemPessoaDoFormulario(formulario);
	adicionaPessoaNaTabela(pessoaTabela);

	var pessoas = document.querySelectorAll(".pessoa");
	var tdIdade = document.querySelectorAll(".info-idade");
	console.log(pessoas);
	console.log(tdIdade);
	
	for (var i = 0; i < pessoas.length; i++) {
	console.log(pessoas);
	
	var idade = Number(tdIdade[i].textContent);
	var classificaIdade = document.querySelectorAll(".info-classificacao")[i];
	classificaIdade.innerHTML = Verifica(idade);
	}
	
});


obtemPessoaDoFormulario = (formulario) => {
 
	var pessoa = {
		nome: formulario.nome.value,
		idade: formulario.idade.value,
		classificacao: ""
	}
	return pessoa;
};


montaTr = (pessoa) => {

	var pessoaTr = document.createElement("tr");
	pessoaTr.classList.add("pessoa");
	

	pessoaTr.appendChild(montaTd(pessoa.nome, "info-nome"));
	pessoaTr.appendChild(montaTd(pessoa.idade, "info-idade"));
	pessoaTr.appendChild(montaTd(pessoa.classificacao, "info-classificacao"))
	
	return pessoaTr;
};

adicionaPessoaNaTabela = (pessoa) => {
    var tabela = document.getElementById("tabela-pessoas");
	var pessoaTr = montaTr(pessoa);
	tabela.appendChild(pessoaTr);

};

montaTd = (dado, classe)=>{
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
};




 Verifica = (idade) => {
	console.log(idade)
	if (idade<= 12) { return "Criança" }
	
	else if (idade <= 19) { return "Adolescente"}
	else if (idade <= 64)  { return "Adulto" }
	else if (idade > 64) { return "Idoso" }
	
	
}






