let input_altura = document.getElementById("Altura");
let input_peso = document.getElementById("Peso");
let input_jovem = document.getElementById("Jovem");
let input_idoso = document.getElementById("Idoso");
let botao = document.getElementById("botao-calculo");
let imagem = document.getElementById("Imagem");
let resultado = document.getElementById("resultado");
let classificacao = document.getElementById("classificacao");

botao.addEventListener("click", calcular);

function Jovem () {
    if (IMC < 18.5){
        classificacao.innerHTML = "Classificação: Magreza";
        imagem.src = "img/Magreza.png";
    } else if (IMC < 24.9) {
        classificacao.innerHTML = "Classificação: Peso Ideal";
        imagem.src = "img/Peso_Ideal-IMC.png"
    } else if (IMC < 29.9){
        classificacao.innerHTML = "Classificação: Sobrepeso";
        imagem.src = "img/Sobrepeso-IMC.png"
        console.log("Hele")
    } else if (IMC < 39.9){
        classificacao.innerHTML = "Classificação: Obesidade";
        imagem.src = "img/Obesidade-IMC.png"
    } else if (IMC >= 40){
        classificacao.innerHTML = "Classificação: Obesidade Grave";
        imagem.src = "img/Obesidade_Grave-IMC.png"
    } else {
        classificacao.innerHTML = "Classificação: ";
        imagem.src = "";
    }
}

function Idoso () {
    if (IMC <= 22){
        classificacao.innerHTML = "Classificação: Magreza";
        imagem.src = "img/Magreza.png";
    } else if (IMC < 27){
        classificacao.innerHTML = "Classificação: Peso Ideal";
        console.log("Ideal")
        imagem.src = "img/Peso_Ideal-IMC.png"
    } else if (IMC > 27){
        classificacao.innerHTML = "Classificação: Sobrepeso";
        imagem.src = "img/Sobrepeso-IMC.png"
        console.log("Sobrepeso")
    } else {
        classificacao.innerHTML = "Classificação: "
        imagem.src = ""
    }
}

function calcular(){
    //Conversão
    altura = parseFloat(input_altura.value) 
    peso = parseFloat(input_peso.value)


    IMC = (peso / altura**2).toFixed(2)
    resultado.innerHTML = "Resultado: " + IMC;

    if (input_jovem.checked){
        Jovem()
    } else if (input_idoso.checked){
        Idoso()
    }
}
