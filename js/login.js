let button = document.querySelector(".button");
let enter = document.querySelector(".section-form")

enter.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        getData()
      }
});
button.addEventListener("click", getData);


async function getData() {
    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if (email.length === 0) {
            Swal.fire({
                title: "Email Cant Be Blank ",
                text: `Log in to your Email`,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else if (password.length === 0) {
            Swal.fire({
                title: "Wrong Password ",
                text: ``,
                icon: "error",
                confirmButtonText: "Continue",
            });
        } else {
            let users = {
                email,
                password,
            };

            let url = "https://5ef168f21faf160016b4d5c9.mockapi.io/api/users";

            let response = await fetch(url);
            let result = await response.json();
           
            let registeredUsers = result.filter((arr) => {
                return arr.email === email;
            });

            localStorage.setItem('Users', registeredUsers[0].fullName)
            
        
            if (registeredUsers.length > 0 && registeredUsers[0].password === password) {
                Swal.fire({
                    title: `Welcome Back ${registeredUsers[0].fullName}`,
                    text: ``,
                    icon: "success",
                    confirmButtonText: "Continue",
                });
                setTimeout(function () {
                    location.replace("./index.html");
                }, 4000);
            } 
            else if(registeredUsers.length > 0 && password !== registeredUsers[0].password || password == undefined ){
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


function getDataEnter(e) {
    if (e.key === 'Enter') {
      getData()
    }
}