let counter = 0

function appendEllement(elleement){
    document.getElementById('input').value += elleement
    if (elleement == "="){ 
        calculate() 
    }
}

function calculate() {
    let inputPlace = document.getElementById('input').value
    inputPlace = inputPlace.slice(0, -1)
    try {
        returnValue = eval(inputPlace).toString();
        document.getElementById('input').value = returnValue
        addHistory(`${inputPlace} = ${returnValue}`)

    } catch (error) {
        console.error('Ошибка вычисления:', error);
        document.getElementById('input').value = 'Ошибка';
    }
}

function checkEllement(){
    const obj = document.getElementById('input').value.toString()
    if (obj.includes('=')){
        calculate()
    }
}

function clearDisplay(){
    document.getElementById('input').value = ''
}

function addHistory(ellement){
    counter ++
    if (counter == 14){
        document.getElementById('history').innerHTML = ''
        counter = 0
    } 
    const newEllement = document.createElement('div')
    newEllement.textContent = ellement
    document.getElementById('history').append(newEllement)
}