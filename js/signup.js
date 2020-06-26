let button = document.querySelector(".button");

button.addEventListener("click", postData);

async function postData() {
    try {
        let fullName = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let passWord = document.querySelector("#password").value;

        let users = {
            fullName,
            email,
            passWord,
        };
        // tambahan dari putra
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
            // tambahan kedua
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
                location.replace("./index.html");
            }, 4000);
        }
    } catch (error) {
        console.error(error);
    }
}

function getAlert() {
    Swal.fire({
        title: "Your Email Has Been Registered !",
        text: "Thank You",
        icon: "success",
        confirmButtonText: "Continue",
    });
}
