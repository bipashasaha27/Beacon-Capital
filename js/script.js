$('.testimonial-for').slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-nav'
});

$('.testimonial-nav').slick({
  slidesToShow: 5,
  asNavFor: '.testimonial-for',
  centerMode: true,
  centerPadding:'0px',
  focusOnSelect: true,
  arrows: true
});
