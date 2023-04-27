var navMobile = document.querySelector('.nav-mobile');
var navMenu = document.querySelector('.nav-menu');

navMobile.addEventListener('click', function() {
var $this = this;

$this.classList.toggle('nav-open');
navMenu.classList.toggle('open-menu');
});