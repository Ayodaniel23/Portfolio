  $(document).ready(function() {
    // Close the navbar on click for mobile view
    $('.navbar-nav .nav-link').on('click', function() {
      if ($('.navbar-toggler').is(':visible')) {
        $('.navbar-collapse').collapse('hide');
      }
    });

    // Smooth horizontal scrolling for the portfolio section
    const wrapper = document.querySelector('.portfolio-container');
    const scrollLeftBtn = document.querySelector('.scroll-arrow.left');
    const scrollRightBtn = document.querySelector('.scroll-arrow.right');

    const scrollAmount = 300; // Adjust based on item width

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
