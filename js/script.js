
/* $(".ask").on("click", function (e) {
  $(this).toggleClass("active").next().stop().slideToggle(400)
  $(".answer").not($(this).next()).slideUp(450)
  $(".ask").not(this).removeClass("active")
  e.preventDefault()
})

$("button[data-filter]").click(function () {
  $("div[data-filter]").stop().slideUp(500)
  let color = $(this).attr("data-filter")
  $(`div[data-filter= ${color}]`).stop().slideDown(500)
  if (color == "all") {
    $("div[data-filter]").stop().slideDown(500)

  }
  $(this).addClass("active")
  $("button").not(this).removeClass("active")

})
function typing(element) {
  let inner = $(element).html()
  let letterCount = 0
  let fullText = ""
  let setinterval = setInterval(() => {
    fullText = fullText + inner[letterCount]
    $(element).html(fullText)
    letterCount++
    if (fullText == inner) {
      clearInterval(setinterval)
      setTimeout(() => {
        typing(element)
      }, 230);
    }

  }, 100);
}
typing('h1')


$(".js-modal-show").click(function (e) {
  e.preventDefault()
  $(".modal").fadeIn(300)
  $(".modal .close").click(function () {
    $(".modal").fadeOut(300)
  })
  $("button").click(function () {
    location.reload()
  })
  $(".modal").click(function (e) {
    if (e.target == this) {
      $(".modal").fadeOut(300)
    }

  })
})
$(".nav").css({
  position: "fixed",
  top: $(window).height() - $(".nav").outerHeight(),
  width: "100%",
  zIndex: 999
})

$(window).on("scroll", function () {
  let editPosition = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop()
  if (editPosition > 0) {
    $(".nav").css({
      top: editPosition
    })

  } else {
    editPosition = 0
  }
  $(".nav").css({
    top: editPosition
  })

})



let arr = ["Hidden", "Read More"]
let counter = 0
$('.read-more').click(function () {
  $('.text-hidden').toggleClass("hidden").animate(1800)
  $(this).html(arr[counter])
  counter++
  if (counter == arr.length) {
    counter = 0
  }

})
 */


/* $(".ask").click(function (e) {
  $(this).toggleClass("active").next().stop().slideToggle(300)
  $(".answer").not($(this).next()).stop().slideUp(300)
  $(".ask").not(this).removeClass("active")
  e.preventDefault()
  
  
}) */

$(".ask").click(function (e) {
  $(this).toggleClass("active").next().stop().slideToggle(450)
  $(".answer").not($(this).next()).slideUp(450)
  $(".ask").not(this).removeClass("active")
  e.preventDefault()
})


$("button[data-filter]").click(function () {
  $("div[data-filter]").stop().slideUp(450)
  let color = $(this).attr("data-filter")
  $(`div[data-filter= ${color}]`).stop().slideDown(450)
  if (color == "all") {
    $("div[data-filter]").stop().slideDown(450)
  }
  $(this).addClass("active")
  $("button[data-filter]").not(this).removeClass("active")

})




function typing(element) {
  let inner = $(element).html()
  let fulltext = ""
  let counter = 0
  let interval = setInterval(() => {
    fulltext += inner[counter]
    counter++
    $(element).html(fulltext)
    if(inner == fulltext) {
      clearInterval(interval)
      setTimeout(() => {
        typing(element)
      }, 300);
    }
  }, 100);

}
typing("h1")

let arr = ["Hidden", "Read More"]
let counter = 0
$(".read-more").click(function () {
  $(".text-hidden").toggleClass("hidden")
  $(this).html(arr[counter])
  counter++
  if (counter == arr.length) {
    counter = 0
  }

})

$(".js-modal-show").click(function (e) {
  e.preventDefault()
  $(".modal").fadeIn(400)
  $(".close").click(function () {
    $(".modal").fadeOut(400)
  })
  $(".btn-dark").click(function () {
    location.reload()
    $(".modal").fadeOut(400)
  })

  $(".modal").click(function (e) {
    console.log(e);
    if (e.target == this)
      $(".modal").fadeOut(400)
  })


})

$(".nav").css({
  position: "fixed",
  width: "100%",
  zIndex: 999,
  top: $(window).height() - $(".nav").outerHeight()
})

$(window).on("scroll", function () {
  let editPosition = $(window).height() - $(".nav").outerHeight() - $(window).scrollTop()
  if (editPosition > 0) {
    $(".nav").css({
      top: editPosition
    })
  }
  else {
    $(".nav").css({
      top: 0
    })
  }
})

$(".js-sroll-to-id").click(function (e) {
  e.preventDefault()
  let attr = $(this).attr("href")
  let elTop = $(attr).offset().top
  $("html").animate({
    scrollTop: elTop - $(".nav").outerHeight()
  }, 800)
})




$(".js-btn-top").click(function (e) {
  e.preventDefault()
  $("html").animate({
    scrollTop: 0
  }, 600)
})

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 130) {
    $(".js-btn-top").addClass("show")
  }
  else {
    $(".js-btn-top").removeClass("show")
  }
})
