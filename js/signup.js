let button = document.querySelector(".button");
let enter = document.querySelector(".section-form")
let input = document.querySelector("#password");
let span = document.querySelector(".span");
input.addEventListener("input", getter);
button.addEventListener("click", postData);
enter.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        postData()
      }
});

async function postData() {
    try {
        let fullName = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (email.length === 0) {
            Swal.fire({
                title: "Email Cant Be Blank ",
                text: ``,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else if (fullName.length === 0) {
            Swal.fire({
                title: "Please Enter a Name ",
                text: ``,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else if (passWord.length === 0) {
            Swal.fire({
                title: "Password Required",
                text: ``,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else {
            let users = {
                fullName,
                email,
                password,
            };

            let url = "https://5ef168f21faf160016b4d5c9.mockapi.io/api/users";

            let response = await fetch(url);
            let result = await response.json();
            console.log(result);

            let registeredUsers = result.filter((arr) => {
                return arr.email === email;
            });
            console.log(registeredUsers);
            if (registeredUsers.length > 0) {
                Swal.fire({
                    title: "You Already Registered Before",
                    text: `Log in to your Email`,
                    icon: "success",
                    confirmButtonText: "Continue",
                });
                setTimeout(function () {
                    location.replace("./login.html");
                }, 4000);
            } else {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(users),
                };
                let response = await fetch(url, options);
                let result = await response.json();
                getAlert();
                setTimeout(function () {
                    location.replace("./login.html");
                }, 4000);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function getAlert() {
    Swal.fire({
        title: "Your Email Successful Registered !",
        text: "Please Activate Your Account",
        icon: "success",
        confirmButtonText: "Continue",
    });
}

function getter(event) {
    let x = event.target.value;
    if (x.length < 5) {
        span.style.color = "red";
        span.textContent = "Weak";
    } else if (x.length >= 6 && x.length <= 12) {
        span.style.color = "orange";
        span.textContent = "Good";
    } else if (x.length > 12) {
        span.style.color = "green";
        span.textContent = "Strong";
    }
}
