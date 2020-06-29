let header = document.querySelector('nav');
let signInBtn = document.getElementById('signIn');
let signUpBtn = document.getElementById('signUp');
let logOut = document.querySelector('.log-out');
function logout(){
    localStorage.clear();
    location.reload()
}

window.onload = checkHeader();

let myVar;
let wholeBody = document.createElement('div');
let loader = document.createElement('div');
let navi = document.querySelector('.whole-body');
wholeBody.setAttribute('class', 'whole');
loader.setAttribute('id', 'loader');

let userLogin = localStorage.getItem('user');

let button1 = document.querySelector('#btn-transparant');
button1.addEventListener('click', backDrop);

function checkHeader() {
    let userLogin = JSON.parse(localStorage.getItem('user'));

    if (userLogin) {
        signInBtn.style.display = 'none';
        signUpBtn.style.display = 'none';

        let name = document.createTextNode(userLogin.fullName);
        console.log(name);
        let nameSpan = document.createElement('span');
        nameSpan.appendChild(name);

        let logoutBtn = document.createElement('button');
        logoutBtn.classList.add('btn');
        logoutBtn.classList.add('btn-primary');
        let logoutText = document.createTextNode('Logout');
        logoutBtn.appendChild(logoutText);

        header.appendChild(nameSpan);
        header.appendChild(logoutBtn);
        logoutBtn.addEventListener('click', logout)
    }

      
}

function myFunction() {
    myVar = setTimeout(backDrop, 3000);
}

function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('myDiv').style.display = 'block';
    document.querySelector('.whole').style.display = 'block';
}

{
    /* <div class="whole"><div id="loader"></div></div>
     */
}

function backDrop() {
    wholeBody.appendChild(loader);
    console.log(wholeBody);
    navi.appendChild(wholeBody);
    setTimeout(() => {
        location.replace('./list-villa.html');
    }, 2000);
}