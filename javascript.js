// template_9na30hz
// service_jmnsl3i
// fkEzjp-UwKVb_Vr9G

let isModalOpen = false;

let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;

  if (contrastToggle) {
  document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible" 


    emailjs
    .sendForm(
       'service_jmnsl3i',
        'template_9na30hz',
        event.target,
       'fkEzjp-UwKVb_Vr9G'
    ).then(() => {
       loading.classList.remove("modal__overlay--visible")
  success.classList += " modal__overlay--visible"
       console.log('It worked 1')
   }).catch(() =>{
loading.classList.remove("modal__overlay--visible")
    alert("The email service is temperarily unavailable. Please contact me directly on travantmedia@gmail.com");
   })


setTimeout(() => {
 
    console.log('it worked 1')
}, 1000);


}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}