$(document).ready(function() {
  var menu = $('.main-menu > li');
  var tab = $('.notice-heading, .pds-heading')
  var list = $('.related-list')
  var last = $('related-list li:last-chile a')

  // 메인메뉴
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

  // 탭메뉴
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-act').siblings().removeClass('board-act');
  })

  list.focusin(function() {
    $(this).addClass('list-open')
  })
  list.focusin(function() {
    $(this).parents('.related-list').removeClass('list-open')
  })

});