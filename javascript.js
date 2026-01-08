// template_9na30hz
// service_jmnsl3i
// fkEzjp-UwKVb_Vr9G

function contact(event) {
    event.preventDefault();
  //  emailjs
   // .sendForm(
   //     'service_jmnsl3i',
   //     'template_9na30hz',
   //     event.target,
   //    'fkEzjp-UwKVb_Vr9G'
  //  ).then(() => {
  //      console.log('this worked')
  //  })
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
setTimeout(() => {
  loading.classList.remove("modal__overlay--visible")
  success.classList += " modal__overlay--visible"
    console.log('it worked 1')
}, 1000);


}