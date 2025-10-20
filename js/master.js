$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// --------------------------------------------------------------

$(document).ready(function () {

    var menu = $('.credit-ac');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.credit-ac').addClass('sticky');
        } else {
            $('.credit-ac').removeClass('sticky');
        }
    }
    document.onscroll = scroll;
    
});
// --------------------------------------------------------------


// --------------------------------------------------------------

(function($){
$(document).ready(function(){
    $('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });
})(jQuery);

// --------------------------------------------------------------

$(function () {
    $(".btn-ac-menu, .close-menu").click(function () {
    if (!$(".btn-ac-menu, .menu-mb, .close-menu, body").hasClass('in')) {
        $(".btn-ac-menu, .menu-mb, .close-menu, body").addClass('in');
    }
    else {
        $(".btn-ac-menu, .menu-mb, .close-menu, body").removeClass('in');
    }
    })
});

// --------------------------------------------------------------

//t.getElementById("demo");
// var fee = document.getElementById("ETHFee");
// output.innerHTML = slider.value;
// var gas_limit = 50000;
// var gwei_to_eth = 1 / 1000000000;
// slider.oninput = function() {
//   CalculateFee();
// }
// function CalculateFee(){
//     var feeValue = parseInt(slider.value) * gas_limit * gwei_to_eth;
//     output.innerHTML = slider.value;
//     fee.innerHTML = feeValue.toFixed(5);
// }

// --------------------------------------------------------------

$(document).ready(init);
function init(jQuery) {
  CurrentYear();  
  initTableSorter();
}
function CurrentYear() {
  var thisYear = new Date().getFullYear()
  $("#currentYear").text(thisYear);
}
// Table Sorter
//$(document).ready(initTableSorter);

// --------------------------------------------------------------
  
function initTableSorter() {
  // call the tablesorter plugin
  $("[data-sort=table]").tablesorter({
    // Sort on the second column, in ascending order
    sortList: [[1,0]]
  });
}

// --------------------------------------------------------------

// --------------------------------------------------------------
jQuery("#best-sale-slider, #new-product-slider, #flash-sale, #similar-product").owlCarousel({
      autoplay: true,
      rewind: true, /* use rewind if you don't want loop */
      margin: 10,
      /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsive: {
        0: {
          items: 2 },
        650: {
          items: 3 },
        800: {
          items: 4 },
        992: {
          items: 3 },
        1024: {
          items: 4 },
        1400: {
          items: 5 },
        }
    }
);

// --------------------------------------------------------------


// --------------------------------------------------------------

