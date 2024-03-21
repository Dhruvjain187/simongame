let gameseq = [];
let userseq = [];

let btns = ["first", "second", "third", "fourth"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("user");

    setTimeout(function () {
        btn.classList.remove("user");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerHTML = `Level ${level}`;

    // random btn flash
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];

    let randbtn = document.querySelector(`.${randCol}`);

    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randbtn);
    gameseq.push(randCol);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkAns(idx) {

    if (userseq[idx] === gameseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start`;
        console.log(`your score was ${level}`);

        let obj = document.querySelector("body");
        obj.style.backgroundColor = "red";

        setTimeout(function () {
            obj.style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

function btnPress() {
    let btn = this;
    console.log(btn);
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    // console.log(userseq);
    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".boxes");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}