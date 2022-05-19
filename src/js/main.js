
let btn = document.getElementsByTagName("button")[0];
let ovl = document.getElementById("dialogOverlay");

customAlert = () => {
    let dialogOverlay = document.getElementById('dialogOverlay');
    let dialogBox = document.getElementById('dialogBox');
    dialogOverlay.style.display = "block";
    dialogBox.style.display = "block";
}

closeAlert = () => {
    dialogOverlay.style.display = "none";
    dialogBox.style.display = "none";
}

btn.addEventListener("click", customAlert);
ovl.addEventListener("click", closeAlert);
