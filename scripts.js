/*
function mario(){ // AINDA NAO FOI CHAMADA
    console.log('to aqui dentro')
}
mario() // assim que eu chamo a função 
*/

let chave = "1c5290d7373be124ad3a22f111d0ed76"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src ="https://www.openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}



async /*avisar q vai acessar um serivdor*/ function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" +
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )

    .then(resposta => resposta.json())

    colocarNaTela(dados)

}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

