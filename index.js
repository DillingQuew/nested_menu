$(document).ready(function() {
  let state = [];
  let title = [];
  const back = $('.button-back');

  $('.menu').on('click', "span", function() {

    // console.log(title)
    if (!back.hasClass('button-back--active')) {
      back.addClass('button-back--active');
    }

    $(this).next('.submenu').css('left', "0%");
    state.push($(this).next('.submenu'));
    title_text = $(this).next('.submenu').data('title')
    title.push(title_text);
    back.text(title_text);
    // console.log(title);
    console.log(title);
  })
  $('.button-back').on('click', function() {
   
    if (!!state.length) {
   
      state[state.length-1].css('left', "100%");
      state.splice([state.length-1], 1);
      if (state.length == 0) {
        back.removeClass('button-back--active');
      }
    }
    if (!!title.length) {
      back.text(title[title.length-2]);
      title.splice([title.length-1], 1);
    }
    console.log(title);
  })
});
