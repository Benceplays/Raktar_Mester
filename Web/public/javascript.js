function registration_show() {
    let ritems = document.getElementsByClassName("registration_Items");
    for (let i = 0; i < ritems.length; i++) {
        ritems[i].style.display = "block";
    }
    let litems = document.getElementsByClassName("login_Items");
    for (let i = 0; i < litems.length; i++) {
        litems[i].style.display = "none";
    }
}
function login_show() {
    let ritems = document.getElementsByClassName("registration_Items");
    for (let i = 0; i < ritems.length; i++) {
        ritems[i].style.display = "none";
    }
    let litems = document.getElementsByClassName("login_Items");
    for (let i = 0; i < litems.length; i++) {
        litems[i].style.display = "block";
    }
}