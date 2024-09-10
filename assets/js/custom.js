$(document).ready(function() {
    $('.navbar-nav .nav-link').on('click', function() {
      if ($('.navbar-toggler').is(':visible')) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.portfolio-wrapper');
    const scrollLeftBtn = document.querySelector('.scroll-btn-left');
    const scrollRightBtn = document.querySelector('.scroll-btn-right');
    
    const scrollAmount = 220; // Adjust based on item width

    scrollLeftBtn.addEventListener('click', () => {
      wrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      wrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
