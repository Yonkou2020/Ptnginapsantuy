let button = document.querySelector('.button');

button.addEventListener('click', getData)


async function getData(){
    try{
        
        let email = document.querySelector('#email').value;
        let passWord = document.querySelector('#password').value;

        let users = {
            email,
            passWord
        }

        let url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/users';

        let response = await fetch(url);
        let result = await response.json();
        console.log(result)


        let registeredUsers = result.filter(arr =>{
            return arr.email === email
            
        })
        console.log(registeredUsers)
        if(registeredUsers.length > 0){
            Swal.fire({
                title: 'You Already Registered',
                text: `Welcome ${registeredUsers[0].fullName}`,
                icon: 'success',
                confirmButtonText: 'Continue'
              })
              setTimeout(function(){
                location.replace('./index.html')
            }, 4000);
            }
        else{
          
              Swal.fire({
                title: 'Please Register',
                text: `We Will Redirect You To SignUp Page`,
                icon: 'error',
                confirmButtonText: 'Continue'
              })
              setTimeout(function(){
                location.replace('./signup.html')
            }, 4000);
            }

               
                //  }))
    }
    catch(error){
        console.error(error)
    }
}