$(document).ready(function() {
  var menu = $('.main-menu > li');

  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act')
  });
  // $('.main-menu>li').on('focusin', function() {
  //   $(this).find('.sub-menu').addClass('menu-act')
  // })
  // $('.sub-menu li:last-child a').on('focusout', function() {
  //   $(this).parents('.sub-menu').removeClass('menu-act')
  // })
  menu.focusin(function() {
      $(this).siblings().find('.sub-menu').removeClass('menu-act');
      $(this).find('.sub-menu').addClass('menu-act');
    })
    // $('.box').click(function() {
    //   $(this).toggleClass('box-act');
    // })
});