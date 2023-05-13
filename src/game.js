var gameMode = `word`

document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
        case 48:  key(`0`); break; // 0
        case 96:  key(`0`); break; // 0
        case 49:  key(`1`); break; // 1
        case 97:  key(`1`); break; // 1
        case 50:  key(`2`); break; // 2
        case 98:  key(`2`); break; // 2
        case 51:  key(`3`); break; // 3
        case 99:  key(`3`); break; // 3
        case 52:  key(`4`); break; // 4
        case 100: key(`4`); break; // 4
        case 53:  key(`5`); break; // 5
        case 101: key(`5`); break; // 5
        case 54:  key(`6`); break; // 6
        case 102: key(`6`); break; // 6
        case 55:  key(`7`); break; // 7
        case 103: key(`7`); break; // 7
        case 56:  key(`8`); break; // 8
        case 104: key(`8`); break; // 8
        case 57:  key(`9`); break; // 9
        case 105: key(`9`); break; // 9
        case 65:  key(`a`); break; // a
        case 66:  key(`b`); break; // b
        case 67:  key(`c`); break; // c
        case 68:  key(`d`); break; // d
        case 69:  key(`e`); break; // e
        case 70:  key(`f`); break; // f

        default: break;
    }
});

function key(keyData){
    switch (keyData) {
        case `0`: break;
        case `1`: break;
        case `2`: break;
        case `3`: break;
        case `4`: break;
        case `5`: break;
        case `6`: break;
        case `7`: break;
        case `8`: break;
        case `9`: break;
        case `a`: break;
        case `b`: break;
        case `c`: break;
        case `d`: break;
        case `e`: break;
        case `f`: break;
    
        default: break;
    }
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
function hexReverse(hexData) {
    let num = hexData.parseInt(hex, 16);
    return num;
}

function modeChange(modeData){
    switch (modeData) {
        case `word`:  gameMode = `word`;  break;
        case `dword`: gameMode = `dword`; break;
        case `qword`: gameMode = `qword`; break;

        default: break;
    }
}

function operatorChange(opData) {
    let element = document.getElementById(`operator`);
    switch (opData) {
        case 1: element.innerText =`or`; break;
        case 2: element.innerText =`xor`; break;
        case 3: element.innerText =`and`; break;
        case 4: element.innerText =`nand`; break;
        case 5: element.innerText =`not`; break;
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

function inputChack(params) {
    
}

function gameSet(){
    let opData = rand(1, 5);
    let operandData = rand(0, 4294967296);
    let valueData = rand(0, 4294967296);
    operatorChange(opData);
    operandChange(`0x` + hexForward(operandData));
    valueChange( `0x` + hexForward(valueData));
}

