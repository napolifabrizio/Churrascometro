// carnes - 400 gr por pessoa / +6 horas 650 gr
// cerveja - 1200 ml por pessoa / +6 horas 2000 ml
// refrigerante e agua - 1000 ml por pessoa / +6 horas 1500 ml

// não-adultos valem por 0,5


//comidas 
let carne = document.getElementById('carne')
let frango = document.getElementById('frango')
let coracao = document.getElementById('coracao')
let pao = document.getElementById('pao')
let linguica = document.getElementById('linguica')

//bebidas
let agua = document.getElementById('h20')
let refri = document.getElementById('refri')
let cerva = document.getElementById('cerva')

//inputs
let adultos = document.getElementById('adultos')
let NAOadultos = document.getElementById('naoAdultos')
let duracao = document.getElementById('duracao')

//button
let calc = document.getElementById('calcular')

calc.addEventListener('click', churras)

function churras(){
    if(duracao.value<=6){
        carne.innerHTML = (parseInt(adultos.value * 188) + parseInt((NAOadultos.value*94)))/1000
        frango.innerHTML = (parseInt((adultos.value * 53)) + parseInt((NAOadultos.value*27)))/1000
        coracao.innerHTML = (parseInt((adultos.value * 53)) + parseInt((NAOadultos.value*27)))/1000
        pao.innerHTML = parseInt((adultos.value * 53)) + parseInt((NAOadultos.value*27))
        linguica.innerHTML = (parseInt((adultos.value * 53)) + parseInt((NAOadultos.value*27)))/1000

        cerva.innerHTML = (adultos.value * 1200)/1000
        refri.innerHTML = (parseInt(adultos.value * 334) + parseInt(NAOadultos.value * 166))/1000
        agua.innerHTML = (parseInt(adultos.value * 334) + parseInt(NAOadultos.value * 166))/1000

    }else{


        carne.innerHTML = (parseInt(adultos.value * 330) + parseInt((NAOadultos.value*165)))/1000
        frango.innerHTML = (parseInt((adultos.value * 80)) + parseInt((NAOadultos.value*40)))/1000
        coracao.innerHTML = (parseInt((adultos.value * 80)) + parseInt((NAOadultos.value*40)))/1000
        pao.innerHTML = parseInt((adultos.value * 80)) + parseInt((NAOadultos.value*40))
        linguica.innerHTML = (parseInt((adultos.value * 80)) + parseInt((NAOadultos.value*40)))/1000

        cerva.innerHTML = (adultos.value * 2000)/1000
        refri.innerHTML = (parseInt(adultos.value * 500) + parseInt(NAOadultos.value * 250))/1000
        agua.innerHTML = (parseInt(adultos.value * 500) + parseInt(NAOadultos.value * 250))/1000
    }
}