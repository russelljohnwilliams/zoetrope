var donutCount = 10;
var spotCount = 13;
var rodCount = 8;
var confettiCount = donutCount + spotCount + rodCount;
var windowWidth = jQuery( window ).width();
var windowHeight = jQuery( window ).height();
var height;
var width;
var size ;
var border = 50;
var color;
var logo;
var nav;
var stickyNav
var stickyLogo
var clone = 'false';
  
jQuery(document).ready(function () {
 size = (jQuery(window).width() - border) / 4;
 starConfetti();
 starHoverEffect();
 startHTMLStyling();
 startPixels();
 stickyLogo = jQuery("#site-logo").offset().top;
 stickyNav = jQuery("#navigation-button").offset().top;
});

jQuery(window).resize(function(){
  size = (jQuery(window).width() - border)  / 4
  createHoverOverPostEffect(jQuery(".script-post"));
  setImageCSS(jQuery(".script-post"), size);
  createHoverOverImageEffect(jQuery(".page-print .wp-block-image"), 4);
})

jQuery(window).scroll(function() {  
    if (jQuery(window).scrollTop() < stickyLogo && clone == 'true') {
        jQuery('.delete').remove();
      clone = "false"
    }
    else if (jQuery(window).scrollTop() > stickyLogo && clone == 'false'){
        jQuery("#site-logo").clone().appendTo(".site-branding").addClass('delete');
      clone = "true"
    }  
});

jQuery(window).scroll(function() {  
    if (jQuery(window).scrollTop() > stickyNav) {
        jQuery("#navigation-button").addClass('fixed');
    }
    else {
        jQuery("#navigation-button").removeClass('fixed');
    }  
});


//  - - - - splits header into two separate words so that second word can be re-styled - - - - 

jQuery(document).ready(function(){
  var title = jQuery('.site-title a');
  var text = title.text().split(' ');
  var last = text.pop();
  title.html([text, ' <span class="last-word">', last, '</span>'].join(''));

  setTimeout(function(){title.parent().fadeIn('slow'); }, 1000);
});

//  - - - - posts - - - - 

jQuery(document).ready(function(){
  jQuery(".script-post").click(function(){
    window.location = jQuery(this).find("a").attr("href"); 
    return false;
  });
});



function setImageCSS(post, size, filter, mode){
  jQuery(post).find('img').css({'filter': filter, 'height': size+'px', 'width': size+'px'});
}

//  - - - - creates hover over posts to change text and image styling - - - - 



function createHoverOverPostEffect(post, divisible){
  jQuery(document).ready(function(){
    size = (jQuery(window).width() - border) / divisible;
    setImageCSS(post, size)
    if (windowWidth > 600){

      post.mouseover(function(){
        jQuery(this).find('.script-post-thumbnail').addClass('vignette');
        size = (jQuery(window).width() - border) / divisible + 20
        setImageCSS(this, size, "none");
        jQuery(this).find('a').css({'color': 'white'});
      });
      post.mouseout(function(){
        size = (jQuery(window).width() - border) / divisible
        setImageCSS(this, size, "grayscale(1)");
        jQuery(this).find('a').css({'color': 'black'});
        jQuery(this).find('.script-post-thumbnail').removeClass('vignette');
      });
    }
  });

}
//  - - - - creates hover over images to change text and image styling - - - - 

function setFigcaptionCSS(post, addClass, opacity){
  jQuery(post).find('figcaption').addClass(addClass).css({'opacity': opacity});
}

function createHoverOverImageEffect(post, divisible){
  if (windowWidth > 600){
    size = (jQuery(window).width()) / divisible;

    setImageCSS(post, size);
    post.find('img').css({'height': height+'px', 'width': height+'px'});
    color = post.css('background-color');
    post.mouseover(function(){
      size = (jQuery(window).width()) / divisible + 12
      setImageCSS(this, size, "none");
      color = jQuery(this).css('background-color');
      jQuery(this).css({'background-color': 'white'});
      setImageCSS(this, size, "grayscale(0)");
      setFigcaptionCSS(this, 'figcaption-show', 1);
    });
    post.mouseout(function(){
      size = (jQuery(window).width()) / divisible
      setImageCSS(this, size, "none");
      jQuery(this).css({'background-color': color});
      setImageCSS(this, size, "grayscale(1)");
      setFigcaptionCSS(this, 'figcaption-show', 0);
    });
  }
}

// Function to open up a layer which upon to show an image

jQuery(function() {
  jQuery('figcaption').click(function(event){
    if (windowWidth > 600){
      var post = jQuery(this).parent();
      post.find('img').removeAttr('style');
      var clone = post.clone().removeClass('wp-block-image').addClass('lightbox').prependTo('.entry-content').hide().fadeIn();
      var button = jQuery('<div class="close-button"><div class="line-1"></div><div class="line-2"></div></div>').appendTo(clone);
      jQuery('.lightbox .figcaption-show').removeClass('figcaption-show').addClass('figcaption-clone');
      closeTheLightbox();
    }
  });
});

// function to close layer that shows image

function closeTheLightbox(){
  jQuery('.close-button').click(function(event){
    var post = jQuery(this).parent().fadeOut('slow', jQuery(this).parent().remove());
  });
}

//  - - - - front page confetti - - - - 

function makeConfetti(count, shape){
  for (i = 0; i < count; i++) {
    var x = randomNumberWindowWidth();
    var y = randomNumberWindowHeight();
    var z = rotateConfetti();
    var setShapeID = shape + i;
    jQuery('#confetti').append('<div class="' + shape + ' confettiShape" id="' + setShapeID + '"></div>');
    jQuery('#' + setShapeID + '').css({'top': y, 'left': x, 'transform': 'rotate(' + z + 'deg)'});
    animate(setShapeID);
  }
}

//  - - - - front page confetti - - - - 





function randomNumberWindowWidth(){
  return Math.floor(Math.random() * windowWidth + 1);
}

function randomNumberWindowHeight(){
  return Math.floor(Math.random() * windowHeight + 1);
}

function rotateConfetti(){
  return Math.floor(Math.random() * 360 + 1);  
}

function animate(shapeID){
  var x = randomNumberWindowWidth();
  var y = randomNumberWindowHeight();
  // jQuery('#' + shapeID + '').animate({'left': x, 'top': y}, 1000000, 'linear');
};

// jQuery(function() {
//   jQuery('#confetti-wrapper').prepend('<div id="navigation-area" class="closed"><div class="nav-list"></div></div>');
// })

// jQuery(function() {
//   jQuery('#confetti-wrapper').append('<div id="border"></div>');
// })


//  - - - - navigation menu- - - - 

// jQuery(function() {
//   for (i = 1; i <= 3; i++){
//     jQuery('#navigation-button').prepend('<div class="bar bar' + i + '"></div>')
//   }
// })

// jQuery(function(){
//   jQuery('#navigation-button').click(function(){
//     jQuery("#primary-menu").toggleClass("open");
//     jQuery('#navigation-button').toggleClass("change");
//   });
// })

//  - - - creates parallax on scroll - - -

function parallax(object, speed){
  jQuery(window).scroll(function(){
    var win = jQuery(window);
    var obj = jQuery(object.parent());
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height();
    var objectEndPosition = (obj.offset().top + obj.outerHeight());
    var trueFalse = (visibleArea >= objectEndPosition && scrollPosition <= objectEndPosition ? true : false);
    if (trueFalse == true){
      var doc = jQuery(document).scrollTop();
      var objTop = jQuery(obj).position().top;
      object.css({"top" : (doc / (-speed )) });
    }
  });
};

// - - - make pixelated edging - - -

function randomNumber(num1, num2){
  return Math.floor(Math.random() * ((num1-num2)+1) + num2);
}

function makePixels(location, num1, num2, i, pixelCount){
  var pixelWrapper = jQuery('<div class="pixel-wrapper" id="pixel-wrapper-'+i+'"></div>')
  // .css({'height': windowWidth / 50, "width": windowWidth});
  jQuery(location).append(pixelWrapper);
  populate(pixelWrapper, num1, num2, pixelCount);
}

function populate(location, num1, num2, pixelCount){
  var pixelsize = (windowWidth / pixelCount);

  for (i = 0; i < pixelCount; i++){
    var setPixelID = 'pixel' + i;
    var pixels = jQuery('<div class="pixel" id="' + setPixelID + '"></div>').css({"opacity": "0."+randomNumber(num1, num2) });
    jQuery(location).append(pixels);
  }
}

//  - - - colours the html on from page - - -

function styleHTML(char){
  var reChar
  var css = 'bracket'
  if (char == "<")
    {reChar = "&lt;";
  css = "bracket"}
  else if( char == ">")
    {reChar = "&gt;";
  css = "bracket"}
  else if(char == '/')
    { reChar = '/';
  css = "slash";
}
jQuery("p:contains('"+char+"')").each(function () {
  jQuery(this).html(jQuery(this).html().replace(reChar, "<span class='"+css+"'>"+char+"</span>"));
});
}

// typewriter

var captionLength = 0;
var caption = '';
var cursor = 'type';
var captionElement ='';
var navigationTextArray = [];
var navigationElemArray = [];
var int = '0';
jQuery(document).ready(function() {
  cycleThroughMenuItems();
});

function cycleThroughMenuItems(){
  jQuery('#primary-menu li a').each(function(){
    navigationTextArray.push(jQuery(this).text());
    navigationElemArray.push(jQuery(this));
    jQuery(this).text("");
  });
  createMenuButton();
}

function createMenuButton(){
  jQuery('#navigation-button').click(function(){
    createNavigationLinks()
  });
}

function createNavigationLinks(){
  if (cursor == "delete"){
    captionElement = navigationElemArray[int-1];
    caption ='// ' + navigationTextArray[int-1];
    captionLength = caption.length;
    erase();
    int --;
    console.log("booooosh")
    jQuery('.menu-button-txt').text('open navigation')
  } 
  else{
    addCursor(navigationElemArray[int])
    captionElement = navigationElemArray[int];
    caption ='// ' + navigationTextArray[int];
    type();
    int ++;
    console.log("baaaaaash")

    jQuery('.menu-button-txt').text('close navigation')
  };
}

function type() {
  captionElement.html(caption.substr(0, captionLength++));
  if(captionLength < caption.length+1){
    setTimeout('type()', 70);
  }else if(captionLength == caption.length+1 && navigationElemArray.length > int){
    removeCursor(navigationElemArray[int-1])
    captionLength = 0;
    createNavigationLinks();
  }else{
    cursor = "delete";
    captionLength = 0;
    caption = '';
  }
}

function erase() {
  captionElement.html(caption.substr(0, captionLength--));
  if(int == 0 && captionLength < 0){
    captionLength = 0;
    caption = '';
    cursor = "type";
  }else if(captionLength == -1){
    removeCursor(navigationElemArray[int])
    captionLength = caption.length;
    createNavigationLinks();
  }else{
    setTimeout('erase()', 70);
  };
}

function removeCursor(elem){
  elem.css({"border-right": "0"})
}

function addCursor(elem){
  elem.css({"border-right": "8px solid #EB5F66"})
}

function starConfetti(){
  makeConfetti(donutCount, "donut");
  makeConfetti(spotCount, "spot");
  makeConfetti(rodCount, "rod");
  makeConfetti(spotCount, "spotblur");
  makeConfetti(rodCount, "rodblur");
}

function starHoverEffect(){
 createHoverOverPostEffect(jQuery(".script-post"), 4);
 createHoverOverImageEffect(jQuery(".page-print .wp-block-image"), 4); 
}

function startHTMLStyling(){
 styleHTML('/');
 styleHTML('<'); 
 styleHTML('>'); 
}

function startPixels(){
 makePixels('#second-section', 3, 0, 1, 40);
 makePixels('#second-section', 6, 3, 2, 50);
 makePixels('#second-section', 9, 6, 3, 50); 
}


