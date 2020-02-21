
function clicou(params) {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"))
    // alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.globo.com/")
    // window.location.href = "https://www.globo.com/"
}

function trocar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    console.log("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

var validar = 0;
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    return validar;
}

var idade = prompt("Qual sua idade")
console.log(validaIdade(idade));
 */

/*
alert(soma(5, 10))
alert(setReplace("Vai Japão", "Japão", "Brasil"))
 */

/*
var d = new Date();
alert("Hoje é " + d.getDay() + "/" + (d.getMonth()+1));

var lista = ["Alemanha", "Inglaterra", "Escócia"];
lista.push("Polônia");
lista.pop("Inglaterra");

var lista  = [nome: "rosa" , "cravo" , "tulipa", "margarida"]
console.log(lista[2]);
 */
/*
var count

for (count = 0; count <= 5; count++) {
    console.log(count);
}
 */
/* while (count <= 5) {
    console.log(count);
    count++
} */

/*
var idade = prompt("Qual a sua idade?")

do {
    if (idade >= 18) {
        console.log("maior de idade")
    } else {
        console.log("menor de idade")
    }

} while (idade < 18);
 */

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"pêra", cor:"verde"}]
console.log(frutas[1].nome)

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)

var lista = ["maça", "pêra", "laranja"]
lista.push("uva")
lista.push("uva")
lista.pop()
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString()[0])
console.log(lista.join(" | "))
 */
// var nome = "Maxwell";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão melhor time do mundo!";
// alert(nome + " tem " + idade + " anos.");
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toLocaleLowerCase());
// console.log(frase.toLocaleUpperCase());