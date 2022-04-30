
function generateAlert() {
    alert("Hello, world!");
    changeFontSize(24);
}

function changeFontSize(size) {
    let theText = document.getElementById("theText");
    theText.style.fontSize = size+"pt";
}

function stylesOn() {
    let style = document.getElementById("theText").style;
    style.fontWeight = "bold";
    style.color = "blue";
    style.textDecoration = "underline";
}

function stylesOff() {
    let style = document.getElementById("theText").style;
    style.fontWeight = "normal";
    style.color = "black";
    style.textDecoration = "none";
}

function upperMoo() {
    let theText = document.getElementById("theText");
    let val = theText.value.toUpperCase();

    sentences = val.split(".");
    for (let i=0; i < sentences.length-1; i++) {
        let sent = sentences[i];
        sent = sent.split(" ");
        sent[sent.length - 1] = sent[sent.length - 1] + "-Moo";
        sent = sent.join(" ");
        sentences[i] = sent;
    }
    val = sentences.join(".");

    theText.value = val;
}
