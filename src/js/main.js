
let btn = document.getElementsByTagName("button")[0];
let ovl = document.getElementById("dialogOverlay");
let x = document.getElementById("close");
let counter = document.getElementById("counter");
let reset = document.getElementById("reset");

document.getElementById('dialogBox').addEventListener('click', function (e) {
    e.stopPropagation()
})

customAlert = () => {
    let dialogOverlay = document.getElementById('dialogOverlay');
    let dialogBox = document.getElementById('dialogBox');
    dialogOverlay.style.display = "block";
    dialogBox.style.display = "inline-block";
    let newCounterValue = parseInt(counter.innerHTML) + 1;
    counter.innerHTML = newCounterValue
    resetShow()

    localStorage.setItem('counter', newCounterValue);
}

closeAlert = () => {
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
    counter.innerHTML = localStorage.getItem('counter');
}







