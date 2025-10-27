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
function new_item_show() { 
    event.preventDefault();
    document.getElementById("newItemDiv").style.display = "block";
    const randomId = Math.floor(Math.random() * 1000000);
    document.getElementById("newItemId").value = randomId;/*Később kategória alapján kezdődő sorszám generálás*/
}
function new_item_hide() { document.getElementById("newItemDiv").style.display = "none"; }