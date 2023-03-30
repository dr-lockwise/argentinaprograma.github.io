//// Body Splash!
window.addEventListener('load', function() {
  var splash = document.getElementById('splash');
  setTimeout(function() {
    splash.classList.add('hidden');
  }, 2000);
});


// Boton de enviar
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

// Navbar
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar-fixed');
  var scrolled = window.scrollY;
  if (scrolled >= 200) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});
