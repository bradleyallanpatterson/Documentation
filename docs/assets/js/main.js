// Submenu toggle
window.onload = function(){
  const elAside = document.querySelector('.mobile-toggle--aside');
  const elAsideAlt = document.querySelector('.mobile-toggle--aside-alt');
  const navAside = document.querySelector('.interior-aside');

  if(elAside) {
    elAside.addEventListener('click', (e) => {
      e.preventDefault();
      navAside.classList.toggle('is-open');
      elAside.classList.toggle('has-open-nav');
    });
  }

  if (elAsideAlt) {
    elAsideAlt.addEventListener('click', (e) => {
      e.preventDefault();
      navAside.classList.toggle('is-open');
      elAside.classList.toggle('has-open-nav');
    });
  }

// Mobile menu toggle
  const el = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.main-nav');
  const header = document.querySelector('.header');

  el.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('is-visible');
    el.classList.toggle('has-open-nav');
    header.classList.toggle('has-open-nav');
  });
};