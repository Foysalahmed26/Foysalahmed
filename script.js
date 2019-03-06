jQuery(document).ready(function () {
    jQuery(".select").mixItUp();
});
$('#preloader').delay(100).fadeOut('fast');
/*ScrollTop*/
jQuery(document).ready(function () {
    jQuery(".arrow-scroll").click(function () {
        jQuery("html").animate({'scrollTop':'0'},1000);
        return false;
    });

    jQuery(window).scroll(function () {
        var utd = jQuery(window).scrollTop();
        if(utd > 200){
            jQuery(".arrow-scroll").fadeIn(1000);
        }
        else{
            jQuery(".arrow-scroll").hide();
        }
    });
    return false;
});








                                     /*Mobile menu Start*/
function myFunction(x) {
    x.classList.toggle("change");
}
/*Mobile menu End*/
$(document).ready(function(){
    $('.mobiles').click(function () {
        $('#navbarnav').toggle(1000);
        return false
    });
});
/*Mobile menu end*/
                                     /*Slider part start*/
$(document).ready(function(){
  $('.slider').owlCarousel({
      items:    1,
      autoPlay:false,
      transitionStyle:'backSlide',
      stopOnHover : true,
      pagination:false,
      navigation: true,
      navigationText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
      'itemsDesktop' :1,
      'itemsDesktopSmall':1,
      'itemsTablet':1,
      'itemsMobile':1,
      'itemsMobileSmall':1
       });
    });
                                     /*Slider part end*/


$(document).ready(function(){
    $('.contact-button').click(function () {
        $('.contact-button,.arrow-down,.contact-text').fadeOut(300);
        return false
    });
});





$(document).ready(function(){
    $('.btns').click(function () {
        $('#register').show(1000);

    });
});







/*Lightbox*/
$('.lightbox').click(function() {
    var title = $(this).attr('title');
    var src = $(this).children('img').attr("src").replace('/240/140/', '/480/280/');
    // Change the line above to modify the src according to your naming convention for larger images.
    // You could even change it to source a data attrib ;)

    var alt = $(this).children('img').attr("alt") || "";
    var $img = $('<img class="center-block img-responsive" alt="' + alt + '" src="' + src + '">');
    $('.modal-title').html(title);
    $('.modal-body').html('<p>Loading...</p>');
    $('#lightbox').modal({
        show: true
    });
    $img.load(function() {
        $('.modal-body').html($img);
    })
});



/*Contact part*/
/**********

 This Pen uses no libraries except fonts and should
 work on all modern browsers

 The answers are stored in the `questions` array
 with the key `answer`.

 inspired by XavierCoulombeM
 https://dribbble.com/shots/2510592-Simple-register-form

 **********/

var questions = [
    {question:"What's your name?"},
    {question:"What's your address?"},
    {question:"What's your email?", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    {question:"Create your password", type: "password"}
]

/*
 do something after the questions have been answered
 */
var onComplete = function() {

        var h1 = document.createElement('h1')
        h1.appendChild(document.createTextNode('Thanks ' + questions[0].answer + ' for checking this pen out!'))
        setTimeout(function() {
            register.parentElement.appendChild(h1)
            setTimeout(function() { h1.style.opacity = 1 }, 50)
        }, 1000)

    }

    ;(function(questions, onComplete) {

    var tTime = 100 // transition transform time from #register in ms
    var wTime = 200 // transition width time from #register in ms
    var eTime = 1000 // transition width time from inputLabel in ms

    // init
    // --------------
    if (questions.length == 0) return

    var position = 0

    putQuestion()

    forwardButton.addEventListener('click', validate)
    inputField.addEventListener('keyup', function(e) {
        transform(0, 0) // ie hack to redraw
        if (e.keyCode == 13) validate()
    })

    previousButton.addEventListener('click', function(e) {
        if (position === 0) return
        position -= 1
        hideCurrent(putQuestion)
    })


    // functions
    // --------------

    // load the next question
    function putQuestion() {
        inputLabel.innerHTML = questions[position].question
        inputField.type = questions[position].type || 'text'
        inputField.value = questions[position].answer || ''
        inputField.focus()

        // set the progress of the background
        progress.style.width = position * 100 / questions.length + '%'

        previousButton.className = position ? 'fas fa-arrow-left' : 'fas fa-user'

        showCurrent()

    }

    // when submitting the current question
    function validate() {

        var validateCore = function() {
            return inputField.value.match(questions[position].pattern || /.+/)
        }

        if (!questions[position].validate) questions[position].validate = validateCore

        // check if the pattern matches
        if (!questions[position].validate()) wrong(inputField.focus.bind(inputField))
        else ok(function() {

            // execute the custom end function or the default value set
            if (questions[position].done) questions[position].done()
            else questions[position].answer = inputField.value

            ++position

            // if there is a new question, hide current and load next
            if (questions[position]) hideCurrent(putQuestion)
            else hideCurrent(function() {
                // remove the box if there is no next question
                register.className = 'close'
                progress.style.width = '100%'

                onComplete()

            })

        })

    }


    // helper
    // --------------

    function hideCurrent(callback) {
        inputContainer.style.opacity = 0
        inputLabel.style.marginLeft = 0
        inputProgress.style.width = 0
        inputProgress.style.transition = 'none'
        inputContainer.style.border = null
        setTimeout(callback, wTime)
    }

    function showCurrent(callback) {
        inputContainer.style.opacity = 1
        inputProgress.style.transition = ''
        inputProgress.style.width = '100%'
        setTimeout(callback, wTime)
    }

    function transform(x, y) {
        register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
    }

    function ok(callback) {
        register.className = ''
        setTimeout(transform, tTime * 0, 0, 10)
        setTimeout(transform, tTime * 1, 0, 0)
        setTimeout(callback, tTime * 2)
    }

    function wrong(callback) {
        register.className = 'wrong'
        for (var i = 0; i < 6; i++) // shaking motion
            setTimeout(transform, tTime * i, (i % 2 * 2 - 1) * 20, 0)
        setTimeout(transform, tTime * 6, 0, 0)
        setTimeout(callback, tTime * 7)
    }

}(questions, onComplete))






