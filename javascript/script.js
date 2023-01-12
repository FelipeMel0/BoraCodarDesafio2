"use strict"

function mudarEstaticoParaRotacao() {

    document.getElementById("sofa").src = "../img/sofaRotacao.gif"
    document.getElementById("divIcone").innerHTML = "<img id='iconeCancelar' onclick='mudarRotacaoParaEstatico()' src='../img/iconeCancelar.png' alt='Ícone de cancelar'>"

}

function mudarRotacaoParaEstatico() {

    document.getElementById("sofa").src = "../img/sofaEstatico.png"
    document.getElementById("divIcone").innerHTML = "<img id='iconeRotacao' onclick='mudarEstaticoParaRotacao()' src='../img/iconeRotacao.png' alt='Ícone de rotação'>"
    
}
