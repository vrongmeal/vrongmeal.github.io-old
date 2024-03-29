function changePage(prev, next, callback) {
  prev.animate({ opacity: 0 }, 300, "linear", function() {
    $(this).hide();
    next.show();
    next.animate({ opacity: 1 }, 300, "linear", callback);
  });
}

function animateCloseBtn(alpha) {
  $(".close-btn").animate({ opacity: alpha }, 300, "linear");
}

function closePages(e) {
  e.preventDefault();
  changePage($("#about-page"), $("#landing"), function() {
    animateCloseBtn(0);
  });
  changePage($("#contact-page"), $("#landing"), function() {
    animateCloseBtn(0);
  });
}

$(function() {
  $("#about").click(function(e) {
    e.preventDefault();
    changePage($("#landing"), $("#about-page"), function() {
      animateCloseBtn(1);
    });
  });
  $("#contact").click(function(e) {
    e.preventDefault();
    changePage($("#landing"), $("#contact-page"), function() {
      animateCloseBtn(1);
    });
  });
  $(".close-btn").click(closePages);
  Mousetrap.bind("esc", closePages);
});
