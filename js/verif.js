let button = document.querySelector(".button");

button.addEventListener("click", getData);

async function getData() {
    try {
        let email = document.querySelector("#email").value;
        let passWord = document.querySelector("#password").value;

        if (email.length === 0) {
            Swal.fire({
                title: "Email Cant Be Blank ",
                text: `Log in to your Email`,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else if (passWord.length === 0) {
            Swal.fire({
                title: "Wrong Password ",
                text: ``,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else {
            let users = {
                email,
                passWord,
            };

            let url = "https://5ef168f21faf160016b4d5c9.mockapi.io/api/users";

            let response = await fetch(url);
            let result = await response.json();

            let registeredUsers = result.filter((arr) => {
                return arr.email === email;
            });

            if (
                registeredUsers.length > 0 &&
                registeredUsers[0].passWord === passWord
            ) {
                Swal.fire({
                    title: "You Already Registered",
                    text: `Welcome ${registeredUsers[0].fullName}`,
                    icon: "success",
                    confirmButtonText: "Continue",
                });
                setTimeout(function () {
                    location.replace("./fitrucheckout1.html");
                }, 4000);
            } else if (
                (registeredUsers.length > 0 &&
                    passWord !== registeredUsers[0].passWord) ||
                passWord == undefined
            ) {
                Swal.fire({
                    title: "Wrong Password",
                    text: `Try Again`,
                    icon: "error",
                    confirmButtonText: "Continue",
                });
            } else {
                Swal.fire({
                    title: "You Dont Have Account",
                    text: `We Will Redirect You To SignUp Page`,
                    icon: "error",
                    confirmButtonText: "Continue",
                });
                setTimeout(function () {
                    location.replace("./signup.html");
                }, 4000);
            }

            //  }))
        }
    } catch (error) {
        console.error(error);
    }
}
