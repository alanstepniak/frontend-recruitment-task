let btn = document.getElementsByTagName("button")[0];
let ovl = document.getElementsByClassName("dialogOverlay")[0];
let x = document.getElementsByClassName("close")[0];
let counter = document.getElementsByClassName("counter")[0];
let reset = document.getElementsByClassName("reset")[0];

document.getElementsByClassName('dialogBox')[0].addEventListener('click', function (e) {
    e.stopPropagation()
})

customAlert = () => {
    let dialogOverlay = document.getElementsByClassName('dialogOverlay')[0];
    let dialogBox = document.getElementsByClassName('dialogBox')[0];
    dialogOverlay.style.display = "flex";
    dialogBox.style.display = "inline-block";
    let newCounterValue = parseInt(counter.innerHTML) + 1;
    counter.innerHTML = newCounterValue
    resetShow()

    localStorage.setItem('counter', newCounterValue);
}

closeAlert = () => {
    let dialogOverlay = document.getElementsByClassName('dialogOverlay')[0];
    let dialogBox = document.getElementsByClassName('dialogBox')[0];
    dialogOverlay.style.display = "none";
    dialogBox.style.display = "none";
}

resetShow = () => {
    if (parseInt(counter.innerHTML) > 5) {
        return (
            reset.style.display = "block"
        );
    }
}

resetValue = () => {
    counter.innerHTML = 0;
    reset.style.display = "none"
}

btn.addEventListener("click", customAlert);
ovl.addEventListener("click", closeAlert);
x.addEventListener("click", closeAlert);
reset.addEventListener("click", resetValue);

window.onload = () => {
    counter.innerHTML = localStorage.getItem('counter') || 0;
}







