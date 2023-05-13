
var gameMode = `WORD`

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
        case 65:  key(`A`); break; // A
        case 66:  key(`B`); break; // B
        case 67:  key(`C`); break; // C
        case 68:  key(`D`); break; // D
        case 69:  key(`E`); break; // E
        case 70:  key(`F`); break; // F

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
        case `A`: break;
        case `B`: break;
        case `C`: break;
        case `D`: break;
        case `E`: break;
        case `F`: break;
    
        default: break;
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function modeChange(modeData){
    switch (modeData) {
        case `WORD`:  gameMode = `WORD`;  break;
        case `DWORD`: gameMode = `DWORD`; break;
        case `QWORD`: gameMode = `QWORD`; break;

        default: break;
    }
}

function operatorChange(opData) {
    let element = document.getElementById(`operator`);
    switch (opData) {
        case 1: element.innerText =`OR`; break;
        case 2: element.innerText =`XOR`; break;
        case 3: element.innerText =`AND`; break;
        case 4: element.innerText =`NAND`; break;
        case 5: element.innerText =`NOT`; break;
        default: break;
    }
}

function operandChange(numData) {
    
}
function valueChange(numData) {
    
}

function gameSet(){
    operatorChange(rand(1, 5));
}

