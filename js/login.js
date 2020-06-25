let button = document.querySelector('.button');

button.addEventListener('click', function(){
    Swal.fire({
        title: 'Your Email Has Been Registered !',
        text: 'Thank You',
        icon: 'success',
        confirmButtonText: 'Continue'
      })
})

