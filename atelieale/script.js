//   Muda o nome do usuario para o nome do login  //
let nomeUsuario = document.querySelector('.nomeUsuario');
nomeUsuario.textContent = localStorage.getItem('nome');

if (!localStorage.getItem('nome')) {
    nomeUsuario.textContent = 'usuario'
}
// quando o botão é apertado //
function pegaValor() {
    //armazenha os valores do inputs no localStorege //
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;
    localStorage.setItem('nome', nome);
    localStorage.setItem('Email', email);
    localStorage.setItem('senha', senha);
    alert('Login finalizado com sucesso');
}
function pegaValorProduto() {

    let quantidadeProduto = document.getElementById('quantidade').value;
    let cor = document.getElementById('cor');
    let corValor = cor.options[cor.selectedIndex].text;
    let pedrinha = document.getElementById('pedrinha');
    let pedrinhaValor = pedrinha.options[pedrinha.selectedIndex].text;

    localStorage.setItem('quantidade', quantidadeProduto);
    localStorage.setItem('cor', corValor);
    localStorage.setItem('pedrinha', pedrinhaValor);
    localStorage.setItem('produto', 'visivel');

    alert('Seu produto foi adicionado ao carrinho');

    
}

//altera a quantidade e o valor total do carrinho//
let quantidadeCarrinho = document.querySelector('.quantidade');
let total = document.querySelector('.valorTotal');
let produtoCarrinho = document.getElementById('produtoCarrinho');

total.textContent = "R$" + (localStorage.getItem('quantidade')*20) + ",00";
quantidadeCarrinho.textContent = localStorage.getItem('quantidade');

//deixa visivel e invisivel o produtono carrinho 

if(localStorage.getItem('produto') == 'visivel'){
    produtoCarrinho.style.visibility = "visible";
}else{
    produtoCarrinho.style.visibility = "hidden";
}
function retirar(){
    location.reload();
    localStorage.setItem('produto', 'invisivel')

}
function finalizar(){
    let confirmar = confirm("deseja finalizar a sua compra?");
    if (confirmar == true){
        console.log('ok')
        alert('Seu pedido já esta cendo enviado');
    }
}





