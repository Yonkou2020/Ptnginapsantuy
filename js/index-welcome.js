let myVar;
let wholeBody = document.createElement('div');
let loader = document.createElement('div');
let navi = document.querySelector('.whole-body');
wholeBody.setAttribute('class', 'whole');
loader.setAttribute('id', 'loader');

let button1 = document.querySelector('#btn-transparant');
button1.addEventListener('click', backDrop)

function myFunction() {
  myVar = setTimeout(backDrop, 3000);
  
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.querySelector('.whole').style.display = 'block';
}

{/* <div class="whole"><div id="loader"></div></div>
 */}



function backDrop(){
    wholeBody.appendChild(loader);
    console.log(wholeBody)
    navi.appendChild(wholeBody)
    setTimeout(() => {
        location.replace('./list-villa.html');
     }, 2000);  
}

