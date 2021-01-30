//context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//window
let width = canvas.width;
let height = canvas.height;
let scale = 200;
let time = 15;
let turn = 'x';
let slot = [];

//click
canvas.addEventListener('mousedown', click);

function click(e) {
    //pos
    let mouseX = e.layerX;
    let mouseY = e.layerY;

    //click
    //a
    if (mouseX >= 20 && mouseX <= 190) {
        if (mouseY >= 20 && mouseY <= 190) {

            if (turn == 'x' && slot[0] == undefined) {
                xTurn(40, 40);
                turn = 'o';
                slot[0] = 'x';
            } else if (turn == 'o' && slot[0] == undefined) {
                oTurn(40, 40);
                turn = 'x';
                slot[0] = 'o';
            }
        }
    }
    //b
    if (mouseX >= 210 && mouseX <= 390) {
        if (mouseY >= 20 && mouseY <= 190) {

            if (turn == 'x' && slot[1] == undefined) {
                xTurn(235, 40);
                turn = 'o';
                slot[1] = 'x';
            } else if (turn == 'o' && slot[1] == undefined) {
                oTurn(235, 40);
                turn = 'x';
                slot[1] = 'o';
            }
        }
    }
    //b
    if (mouseX >= 410 && mouseX <= 580) {
        if (mouseY >= 20 && mouseY <= 190) {

            if (turn == 'x' && slot[2] == undefined) {
                xTurn(430, 40);
                turn = 'o';
                slot[2] = 'x';
            } else if (turn == 'o' && slot[2] == undefined) {
                oTurn(430, 40);
                turn = 'x';
                slot[2] = 'o';
            }
        }
    }
    //d
    if (mouseX >= 20 && mouseX <= 190) {
        if (mouseY >= 210 && mouseY <= 390) {

            if (turn == 'x' && slot[3] == undefined) {
                xTurn(40, 235);
                turn = 'o';
                slot[3] = 'x';
            } else if (turn == 'o' && slot[3] == undefined) {
                oTurn(40, 235);
                turn = 'x';
                slot[3] = 'o';
            }
        }
    }
    //e
    if (mouseX >= 210 && mouseX <= 390) {
        if (mouseY >= 210 && mouseY <= 390) {

            if (turn == 'x' && slot[4] == undefined) {
                xTurn(235, 235);
                turn = 'o';
                slot[4] = 'x';
            } else if (turn == 'o' && slot[4] == undefined) {
                oTurn(235, 235);
                turn = 'x';
                slot[4] = 'o';
            }
        }
    }
    //f
    if (mouseX >= 410 && mouseX <= 580) {
        if (mouseY >= 210 && mouseY <= 390) {

            if (turn == 'x' && slot[5] == undefined) {
                xTurn(430, 235);
                turn = 'o';
                slot[5] = 'x';
            } else if (turn == 'o' && slot[5] == undefined) {
                oTurn(430, 235);
                turn = 'x';
                slot[5] = 'o';
            }
        }
    }
    //g
    if (mouseX >= 20 && mouseX <= 190) {
        if (mouseY >= 410 && mouseY <= 580) {

            if (turn == 'x' && slot[6] == undefined) {
                xTurn(40, 430);
                turn = 'o';
                slot[6] = 'x';
            } else if (turn == 'o' && slot[6] == undefined) {
                oTurn(40, 430);
                turn = 'x';
                slot[6] = 'o';
            }
        }
    }
    //h
    if (mouseX >= 210 && mouseX <= 390) {
        if (mouseY >= 410 && mouseY <= 580) {

            if (turn == 'x' && slot[7] == undefined) {
                xTurn(235, 430);
                turn = 'o';
                slot[7] = 'x';
            } else if (turn == 'o' && slot[7] == undefined) {
                oTurn(235, 430);
                turn = 'x';
                slot[7] = 'o';
            }
        }
    }
    //i
    if (mouseX >= 410 && mouseX <= 580) {
        if (mouseY >= 410 && mouseY <= 580) {

            if (turn == 'x' && slot[8] == undefined) {
                xTurn(430, 430);
                turn = 'o';
                slot[8] = 'x';
            } else if (turn == 'o' && slot[8] == undefined) {
                oTurn(430, 430);
                turn = 'x';
                slot[8] = 'o';
            }
        }
    }
}

function clear() {
    ctx.fillStyle = '#5ca3be';
    ctx.fillRect(0, 0, width, height);
};

function border() {
    //left
    ctx.fillStyle = '#508da5';
    ctx.fillRect(0, 0, 20, height);

    //rigth
    ctx.fillStyle = '#508da5';
    ctx.fillRect(580, 0, width, height);

    //center left
    ctx.fillStyle = '#508da5';
    ctx.fillRect(190, 0, 20, height);

    //center rigth
    ctx.fillStyle = '#508da5';
    ctx.fillRect(390, 0, 20, height);

    //top
    ctx.fillStyle = '#508da5';
    ctx.fillRect(0, 0, width, 20);

    //button
    ctx.fillStyle = '#508da5';
    ctx.fillRect(0, 580, width, 20);

    //center top
    ctx.fillStyle = '#508da5';
    ctx.fillRect(0, 190, width, 20);

    //center buttom
    ctx.fillStyle = '#508da5';
    ctx.fillRect(0, 390, width, 20);
};

function xTurn(posX, posY) {

    ctx.fillStyle = 'red';

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX + i, posY + i, 10, 10);
    }

    posX = posX + 120;

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX - i, posY + i, 10, 10);
    }
};

function oTurn(posX, posY) {
    ctx.fillStyle = 'green';

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX + i, posY, 10, 10);
    }

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX, posY + i, 10, 10);
    }

    posX = posX + 120;

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX, posY + i, 10, 10);
    }

    posX = posX - 120;
    posY = posY + 120;

    for (i = 0; i < 120; i++) {
        ctx.fillRect(posX + i, posY, 10, 10);
    }
};

function currentTurn() {
    if (turn == 'x') {
        document.getElementById("turn").innerHTML = 'Turn X';
    }else if (turn == 'o') {
        document.getElementById("turn").innerHTML = 'Turn O';
    }else if (turn == 'xWon') {
        document.getElementById("turn").innerHTML = 'X Won';
        turn = 'o';
        reser();
    }else if (turn == 'oWon') {
        document.getElementById("turn").innerHTML = 'O Won';
        turn = 'x';
        reser();
    }else if (turn == 'draw') {
        reser();
        turn = 'x';
    }
};

function collisionRules() {
    //xWon
    if (slot[0] == 'x' && slot[1] == 'x' && slot[2] == 'x') {
        turn = 'xWon';
    }else if (slot[3] == 'x' && slot[4] == 'x' && slot[5] == 'x') {
        turn = 'xWon';
    }else if (slot[6] == 'x' && slot[7] == 'x' && slot[8] == 'x') {
        turn = 'xWon';
    }else if (slot[0] == 'x' && slot[3] == 'x' && slot[6] == 'x') {
        turn = 'xWon';
    }else if (slot[1] == 'x' && slot[4] == 'x' && slot[7] == 'x') {
        turn = 'xWon';
    }else if (slot[2] == 'x' && slot[5] == 'x' && slot[8] == 'x') {
        turn = 'xWon';
    }else if (slot[0] == 'x' && slot[4] == 'x' && slot[8] == 'x') {
        turn = 'xWon';
    }else if (slot[2] == 'x' && slot[4] == 'x' && slot[6] == 'x') {
        turn = 'xWon';
    }else if (slot[0] == 'o' && slot[1] == 'o' && slot[2] == 'o') {
        turn = 'oWon';
    }else if (slot[3] == 'o' && slot[4] == 'o' && slot[5] == 'o') {
        turn = 'oWon';
    }else if (slot[6] == 'o' && slot[7] == 'o' && slot[8] == 'o') {
        turn = 'oWon';
    }else if (slot[0] == 'o' && slot[3] == 'o' && slot[6] == 'o') {
        turn = 'oWon';
    }else if (slot[1] == 'o' && slot[4] == 'o' && slot[7] == 'o') {
        turn = 'oWon';
    }else if (slot[2] == 'o' && slot[5] == 'o' && slot[8] == 'o') {
        turn = 'oWon';
    }else if (slot[0] == 'o' && slot[4] == 'o' && slot[8] == 'o') {
        turn = 'oWon';
    }else if (slot[2] == 'o' && slot[4] == 'o' && slot[6] == 'o') {
        turn = 'oWon';
    }else if (slot[0] != undefined && slot[1] != undefined && slot[2] != undefined && slot[3] != undefined && slot[4] != undefined && slot[5] != undefined && slot[6] != undefined && slot[7] != undefined && slot[8] != undefined) {
        turn = 'draw';
    }
}

function reser() {
    clear();
    for (i = 0; i < 9; i++) {
        slot[i] = undefined;
    }
}

//function
function update() {
    collisionRules();
    currentTurn();
    border();

    setTimeout(update, 1000 / time);
};

update();
