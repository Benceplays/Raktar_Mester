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

async function addUser() {
  const response = await fetch('/adduser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.getElementById('regusername').value,
      email: document.getElementById('regemail').value,
      password: document.getElementById('regpassword').value,
    }),
  });

  const data = await response.json();
  console.log(data);
}

async function LoginAttempt() {
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.getElementById('username').value,
      password: document.getElementById('password').value,
    }),
  });

  const data = await response.json();
  console.log(data);
}