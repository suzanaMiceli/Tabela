var campoFiltro = document.querySelector("#filtrar-tabela");
var botaoFiltro = document.querySelector("#ordernar");
// adc um evento de nput, depois vamos dizer que se o valor do input for >0 ele vai trzaer o nome, cado contrário ele vai adc uma classe que deixa invisível


campoFiltro.addEventListener("input", function () {
    console.log(this.value);
    var pessoas = document.querySelectorAll(".pessoa");

    if (this.value.length > 0){
        for (var i = 0; i < pessoas.length; i++){
            var pessoa = pessoas[i];
            var tdNome = pessoa.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i"); //é uma expressao que busca maiúsculo e minúsculo
            
            if (!expressao.test(nome)){ //aqui testamos 
                pessoa.classList.add("invisivel");
            } else {
                pessoa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pessoas.length; i++) {// Aqui removemos a classe invisível
            var pessoa = pessoas[i];
            pessoa.classList.remove("invisivel");
        }
    }
});

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabela");
  switching = true;
  //config direção
  dir = "asc"; 
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    /*loop pela tabela menos nos headrs */
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;
      /*pegue elementos de comparação*/
      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*verificar se eles fizeram a troca*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //se sim, ele torna verdadeiro
          shouldSwitch= true;
          break;
        }
    } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        
          shouldSwitch = true;
          break;
        }
      }
    }
      if (shouldSwitch) {
        
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //sempre que uma troca é feita, ela pula 1:
      switchcount ++;      
    } else {
      /*se nunhuma troca foi feita e a dir é asc,
      troque a dir por "desc" e volte ao loop*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function Filtra() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tabela");
  switching = true;
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
    }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}