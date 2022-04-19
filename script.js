

function ch(){

    let adultos = document.getElementsByTagName('input')[0]
    let crianças = document.getElementsByTagName('input')[1]
    let duração = document.getElementsByTagName('input')[2]
    
    let carne = document.getElementsByTagName('p')[0]
    let cerveja = document.getElementsByTagName('p')[1]
    let refri = document.getElementsByTagName('p')[2]
    
    if(duração.value > 6){
        carne.innerText = parseInt(Math.ceil(adultos.value / 1.5)) + parseInt(Math.ceil(crianças.value / 3)) + ' Kg de carne'
        cerveja.innerText = adultos.value * 5 + ' Latas de cerveja'

        refri.innerText = parseInt(Math.ceil(parseInt(crianças.value) * (750/2000))) +parseInt(Math.ceil(adultos.value * (250/2000))) + ' Garrafas de refrigerante e água 2L'

    }else{
        carne.innerText = parseInt(Math.ceil(adultos.value / 2.5)) + parseInt(Math.ceil(crianças.value / 4)) + ' Kg de carne'
        cerveja.innerText = adultos.value * 3 + ' Latas de cerveja'

        refri.innerText = parseInt(Math.ceil(crianças.value * (500/2000))) + parseInt(Math.ceil(adultos.value * (125/2000))) + ' Garrafas de refrigerante e água 2L'
    }

    
}