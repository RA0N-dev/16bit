var gameMode = `byte`;
var opData = 0;
var operandData = 0;
var valueData = 0;
var inputData = 0;
var gameScore = 0;
var darkMode = false;

document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
        case 48:  key(`0`);    break; // 0
        case 96:  key(`0`);    break; // 0
        case 49:  key(`1`);    break; // 1
        case 97:  key(`1`);    break; // 1
        case 50:  key(`2`);    break; // 2
        case 98:  key(`2`);    break; // 2
        case 51:  key(`3`);    break; // 3
        case 99:  key(`3`);    break; // 3
        case 52:  key(`4`);    break; // 4
        case 100: key(`4`);    break; // 4
        case 53:  key(`5`);    break; // 5
        case 101: key(`5`);    break; // 5
        case 54:  key(`6`);    break; // 6
        case 102: key(`6`);    break; // 6
        case 55:  key(`7`);    break; // 7
        case 103: key(`7`);    break; // 7
        case 56:  key(`8`);    break; // 8
        case 104: key(`8`);    break; // 8
        case 57:  key(`9`);    break; // 9
        case 105: key(`9`);    break; // 9
        case 65:  key(`a`);    break; // a
        case 66:  key(`b`);    break; // b
        case 67:  key(`c`);    break; // c
        case 68:  key(`d`);    break; // d
        case 69:  key(`e`);    break; // e
        case 70:  key(`f`);    break; // f

        case 82:  reGame(); break; // r
        case 8:   backspace(); break; // backspace

        default: break;
    }
});

function reGame(){
    gameScore = 0;
    gameSet();
}

function key(keyData){
    let temp = inputData.toString(16);
    let keyDataLen = temp.length;
    if(keyDataLen < 8){
        inputData *= 16;
        switch (keyData) {
            case `0`: inputData += 0;  break;
            case `1`: inputData += 1;  break;
            case `2`: inputData += 2;  break;
            case `3`: inputData += 3;  break;
            case `4`: inputData += 4;  break;
            case `5`: inputData += 5;  break;
            case `6`: inputData += 6;  break;
            case `7`: inputData += 7;  break;
            case `8`: inputData += 8;  break;
            case `9`: inputData += 9;  break;
            case `a`: inputData += 10; break;
            case `b`: inputData += 11; break;
            case `c`: inputData += 12; break;
            case `d`: inputData += 13; break;
            case `e`: inputData += 14; break;
            case `f`: inputData += 15; break;
            default: break;
        }
    }
    inputChange(`0x` + hexForward(inputData));
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hexForward(numData) {
    let hex = numData.toString(16);
    if(hex.length < 8){
        let temp = ""
        for(let i = 0; i < 8-hex.length; i++){
            temp += `0`;
        }
        return temp + hex
    }
    return hex;
}

function binForward(numData) {
    let bin = numData.toString(2);
    if(bin.length < modeSizeChack()){
        let temp = ""
        for(let i = 0; i < modeSizeChack()-bin.length; i++){
            temp += `0`;
        }
        return temp + bin
    }

    return bin;
}

function displayModeChange(){
    let element = document.getElementById("displayModeButton");
    if(darkMode == false){
        darkMode = true;
        document.body.classList.add("dark");
        element.innerText = "*"
        let inputText = document.getElementById("inputValue");
        inputText.style.color = (darkMode)?`#ffffff`:`#000000`;
    }
    else{
        darkMode = false;
        document.body.classList.remove("dark");
        element.innerText = "○"
        let inputText = document.getElementById("inputValue");
        inputText.style.color = (darkMode)?`#ffffff`:`#000000`;
    }
}

function sharing() {
    var text = "";

    text += "Score : 0x" + gameScore.toString(16) + "\n";
    text += "play mode : " + gameMode.toString() + "\n";

    text +="\n" + "16bit.app";

    var twitter_url =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text);

    window.open(twitter_url, "_blank");
}

function modeChange(modeData){
    switch (modeData) {
        case `byte`:  gameMode = `byte`;  break;
        case `word`:  gameMode = `word`;  break;
        case `dword`: gameMode = `dword`; break;

        default: break;
    }
    reGame();
}

function modeChack(){
    switch (gameMode) {
        case `byte`:  return 255; break;
        case `word`:  return 65535; break;
        case `dword`: return 4294967295; break;
    
        default: break;
    }
}

function modeSizeChack(){
    switch (gameMode) {
        case `byte`:  return 8; break;
        case `word`:  return 16; break;
        case `dword`: return 32; break;
    
        default: break;
    }
}

function operatorChange(opData) {
    let element = document.getElementById(`operator`);
    switch (opData) {
        case 1: element.innerText =`or`; break;
        case 2: element.innerText =`xor`; break;
        case 3: element.innerText =`and`; break;
        //case 4: element.innerText =`nand`; break;
        //case 5: element.innerText =`not`; break;
        default: break;
    }
}

function operandChange(numData) {
    let element = document.getElementById(`operand`);
    element.innerText = numData
}
function valueChange(numData) {
    let element = document.getElementById(`value`);
    element.innerText = numData
}
function operandSupporterChange(numData){
    let element = document.getElementById(`operandBit`);
    element.innerText = numData
}
function valueSupporterChange(numData){
    let element = document.getElementById(`valueBit`);
    element.innerText = numData
}

function inputChange(numData) {
    let element = document.getElementById(`inputValue`);
    element.innerText = numData
}

function inputChack(){

    let passed = false;
    switch (opData) {
        case 1: if((operandData | valueData) == inputData){passed = true;} break;
        case 2: if((operandData ^ valueData) == inputData){passed = true;}  break;
        case 3: if((operandData & valueData) == inputData){passed = true;}  break;
        //case 4: if((~-(operandData | valueData))*-1 == inputData){passed = true;}  break;
        //case 5: if((~-operandData) == inputData){passed = true;}  break;
    
        default: break;
    }
    if(passed){
        let addScore = 0;
        switch (gameMode) {
            case `byte`:  addScore = 2; break;
            case `word`:  addScore = 4; break;
            case `dword`: addScore = 8; break;

            default: break;
        }
        let element = document.getElementById("inputValue");
        let tempColor = element.style.color;
        element.style.color = "#00ff00";
        setTimeout(function(){element.style.color = (darkMode)?`#ffffff`:`#000000`;;},150);
        gameScore += addScore;
        gameSet();
    }
    else{
        let element = document.getElementById("inputValue");
        element.style.color = "#ff0000";
        setTimeout(function(){element.style.color = (darkMode)?`#ffffff`:`#000000`;;},150);
    }

}

function scoreWrite(){
    let element = document.getElementById('score');
    element.innerText = (`score : 0x` + gameScore.toString(16))
}

function backspace(){
    inputData /= 16;
    inputData = Math.floor(inputData);
    inputChange(`0x` + hexForward(inputData));
}

function gameSet(){
    opData = rand(1, 3);
    operandData = rand(0, modeChack());
    valueData = rand(0, modeChack());
    inputData = 0;
    scoreWrite();
    operatorChange(opData);
    operandChange(`0x` + hexForward(operandData));
    //if(opData != 5){
        valueChange( `0x` + hexForward(valueData));
    //}
    //else{
    //    valueChange(``);
    //}
    operandSupporterChange(binForward(operandData));
    valueSupporterChange(binForward(valueData));

    inputChange(`0x` + hexForward(inputData));
}
