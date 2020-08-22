function returnRandomNumber() {
    let step1 = 9999 - 1000 + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + 1000;
    return result
}

document.querySelector('.generate-btn').addEventListener('click' , function() {
    document.getElementById('GeneratedNumber').value = returnRandomNumber();
})

function mainValue(x){
    const previousValue = document.getElementById('PinNumberDisplay').value;
    document.getElementById('PinNumberDisplay').value = previousValue + x;
    
}

document.getElementById('submitBtn').addEventListener('click' , function(){
    const GeneratedNumber = parseFloat(document.getElementById('GeneratedNumber').value);
    const InputNumber = parseFloat(document.getElementById('PinNumberDisplay').value);

    if(GeneratedNumber === InputNumber) {
        document.getElementById('notifyRight').style.display = 'block';
        document.getElementById('notifyWrong').style.display = 'none';
    }
    else{
        document.getElementById('notifyWrong').style.display = 'block';
        document.getElementById('notifyRight').style.display = 'none';
    }
})

document.getElementById('clear').addEventListener('click' , function(){
    document.getElementById('PinNumberDisplay').value = null;
})