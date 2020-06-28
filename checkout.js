let btnCheckout = document.getElementById("checkout");
btnCheckout.addEventListener("click", checkout);

function checkout() {
    setTimeout(() => {
        location.replace("./checkout.html");
    }, 500);
}

let btnBackToVilla = document.getElementById("back-to-villa");
btnBackToVilla.addEventListener("click", backToVilla);
function backToVilla() {
    setTimeout(() => {
        location.replace("./list-villa.html");
    }, 500);
}
