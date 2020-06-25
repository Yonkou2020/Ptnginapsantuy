let button = document.querySelector('.button');

button.addEventListener('click', postData)


async function postData() {
    try {
        let fullName = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let passWord = document.querySelector('#password').value;

        let users = {
            fullName,
            email,
            passWord
        }

        let url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/users';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        }
        let response = await fetch(url, options);
        let result = await response.json();
        getAlert()
        setTimeout(function(){
            location.replace('./index-welcome.html')
        }, 4000);
        
        
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}

 
function getAlert(){
    Swal.fire({
    title: 'Your Email Has Been Registered !',
    text: 'Thank You',
    icon: 'success',
    confirmButtonText: 'Continue'
  })
}

