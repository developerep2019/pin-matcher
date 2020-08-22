//Random Number Generator 
function returnRandomNumber() {
    const howManyCombinations = 9999 - 1000 + 1;
    const NumberGenerated = Math.random() * howManyCombinations;
    let result = Math.floor(NumberGenerated) + 1000;
    return result
}

document.querySelector('.generate-btn').addEventListener('click' , function() {
    document.getElementById('GeneratedNumber').value = returnRandomNumber();
})

//Getting Number for Checking in PinNumberDisplay Input Tag
function getNumberFromBtn(passingNumber){
    const previousValue = document.getElementById('PinNumberDisplay').value;
    document.getElementById('PinNumberDisplay').value = previousValue + passingNumber;
    
}

//Main Checking Interaction
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

//Making the PinNumberDisplay input Empty
document.getElementById('clear').addEventListener('click' , function(){
    document.getElementById('PinNumberDisplay').value = null;
})