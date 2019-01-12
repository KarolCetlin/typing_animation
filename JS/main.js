const txt = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    "qwewqewqe amet consectetur, adipisicin sdadad g elit."
];

class Typing {
    constructor(selector, actualTxt, time) {
        this.actualSelector = selector;
        this.actualTxt = actualTxt;
        this.time = time;
        this.indexText = 0;
    }

    addLetter() {
        this.actualSelector.textContent += this.actualTxt[this.indexText];
        this.indexText++;

        if (this.indexText == this.actualTxt.length) {
            clearInterval(this.interval);
        }
    }

    runner() {
        const self = this;
        this.interval = setInterval(function () {
            self.addLetter();
        }, this.time);
    }
}

class Starter extends Typing {
    constructor(selector, actualTxt, time) {
        super(selector, actualTxt, time);
        this.runner();
    }
}

const spnText1 = document.querySelector(".text");
const spnText2 = document.querySelector(".text2");

const SLIDER1 = new Starter(spnText1, txt[0], 40);
const SLIDER2 = new Starter(spnText2, txt[1], 40);