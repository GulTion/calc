var i = 0,
    dot = 0;

function opennav() {
    return 0 == i ? (document.getElementById("nav").style.width = "250px", i = 1) : 1 == i ? (document.getElementById("nav").style.width = "0px", i = 0) : void 0
}

function getHistory() {
    return document.getElementById("history").innerHTML
}

function printHistory(t) {
    document.getElementById("history").innerHTML = t
}

function getFormated(t) {
    return Number(t).toLocaleString("en")
}

function getNumber(t) {
    return Number(t.replace(/,/g, ""))
}

function getData() {
    return document.getElementById("data").innerHTML
}

function printData(t) {
    document.getElementById("data").innerHTML = getFormated(t)
}
for (var operator = document.getElementsByClassName("operator"), a = 0; a < operator.length; a++) operator[a].addEventListener("click", (function () {
    if ("clearall" == this.id && (printData("0"), printHistory("")), "clear" == this.id && printData("0"), "del" == this.id) {
        var output = getNumber(getData()).toString();
        output && (output = output.substr(0, output.length - 1), printData(output))
    }
    if ("equal" == this.id && (printData(eval((getHistory() + getData()).replace(/,/g, ""))), printHistory("")), "*" == this.id || "+" == this.id || "-" == this.id || "/" == this.id) {
        var output = getData(),
            history = getHistory();
        printHistory(history + output + " " + this.id + " "), printData("")
    }
    if ("." == this.id) return dot = 1;
    "mod" == this.id && printData(-1 * getNumber(getData()))
}));
for (var numbers = document.getElementsByClassName("nums"), a = 0; a < numbers.length; a++) numbers[a].addEventListener("click", (function () {
    var t = getNumber(getData());
    if (1 == dot) return printData(t = (t = getData().toString()) + "." + this.innerHTML), dot = 0;
    printData(t += this.innerHTML)
}));
for (var funs = document.getElementsByClassName("fun"), a = 0; a < funs.length; a++) funs[a].addEventListener("click", (function () {
    "per" == this.id && printData(getNumber(getData()) / 100), "sqrt" == this.id && printData(Math.pow(getNumber(getData()), .5)), "sq" == this.id && printData(Math.pow(getNumber(getData()), 2)), "upn" == this.id && printData(1 / getNumber(getData()))
}));
for (var items = document.getElementsByClassName("item"), a = 0; a < items.length; a++) items[a].addEventListener("click", (function () {
    var t = this.className.toString();
    "wei" == t.substr(5, t.length) && alert(t.substr(5, t.length))
}));