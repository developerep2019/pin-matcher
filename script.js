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

//Submit Btn Interaction
document.getElementById('submitBtn').addEventListener('click' , function(){
    const GeneratedNumber = parseFloat(document.getElementById('GeneratedNumber').value);
    const Input = document.getElementById('PinNumberDisplay').value;
    const InputNumber = parseFloat(document.getElementById('PinNumberDisplay').value);
    if(Input == '') {
        alert("Please Give Me a Valid Number. I Can't Take a Empty Number")
    }
    else{
        if(GeneratedNumber === InputNumber) {
            document.getElementById('notifyRight').style.display = 'block';
            document.getElementById('notifyWrong').style.display = 'none';
        }
        else{
            document.getElementById('notifyWrong').style.display = 'block';
            document.getElementById('notifyRight').style.display = 'none';
    
            // How Many Tries Left Calculator
            const chanceLeft = document.getElementById('chanceLeft').innerText;
            const chanceLeftToNumber = parseFloat(chanceLeft);
            if(chanceLeftToNumber <= 3 && chanceLeftToNumber > 1) {
                document.getElementById('chanceLeft').innerText = chanceLeftToNumber - 1;
            }
            else if(chanceLeftToNumber == 1){
                const submitBtnBlock = document.getElementById('submitBtn');
                submitBtnBlock.setAttribute('disabled' , 'disabled');
                submitBtnBlock.style.backgroundColor = '#dc3545';
                document.getElementById('chanceLeft').innerText = 0;
            }
        }
    }
})

//Making the PinNumberDisplay input Empty
document.getElementById('clear').addEventListener('click' , function(){
    document.getElementById('PinNumberDisplay').value = null;
})

//Last Item Left Function
function removeLastNumFromInput(){
    const removeLastNum = document.getElementById('PinNumberDisplay').value;
    const convertToString = removeLastNum.toString(removeLastNum.length);
    const deleteLastNum = convertToString.slice(0, -1);
    document.getElementById('PinNumberDisplay').value = deleteLastNum;
}