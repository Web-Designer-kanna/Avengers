var fade_left = {
    distance: '150px',
    origin: 'left',
    opacity: null,
    duration:1500,
    easing:'ease',
  };
  var fade_right = {
    distance: '150px',
    origin: 'right',
    opacity: null,
    duration:2000,
    easing:'ease',
  };

  
  ScrollReveal().reveal('.fade-left', fade_left);
  ScrollReveal().reveal('.fade-right', fade_right);
  