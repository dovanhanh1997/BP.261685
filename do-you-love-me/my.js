function clickYes() {
    alert('Good choice')
}
function clickNo() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);

    document.getElementById("target").style.left = x + "px";
    document.getElementById("target").style.top = y + "px";
}