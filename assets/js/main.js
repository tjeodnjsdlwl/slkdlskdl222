

const lenis = new Lenis({})

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

/**
 * 
 * mouse
 * 
 */
$(document).mousemove(function(e) {
  gsap.to('.cursor', {
    x: e.clientX,
    y: e.clientY
  });
});






$('.sc-work .item').hover(function(){
  $('.cursor').toggleClass('on');
});

$('#gnb .link, #footer .group-contact .link').hover(function(){
  $('.cursor').toggleClass('active');
});

setTimeout(function() {
  $('.cursor').addClass('show');
}, 2000);


let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr > lastScroll) {
    $('#header .inner').addClass('hide');
  } else {
    $('#header .inner').removeClass('hide');
  }
  lastScroll = curr;
})

lenis.stop()



// var startCount = {var: 0};

// gsap.to(startCount, {
//   var: 1000, duration: 3, ease:"none",
//   onUpdate: changeNumber,
//   scrollTrigger: {
//     trigger: "#number",
//   },
// })

// function changeNumber() {
//   number.innerHTML = (startCount.var).toFixed();
// }




// const loadTl = gsap.timeline({
//   onComplete:function(){
//     $('.sc-intro .loading').remove();
//   }
// })
// loadTl.to('.sc-intro .loading', {backgroundColor: '#f4f4f4'});
// loadTl.to('.sc-intro .loading .bar',{
//   scaleX: 0,
//   stagger:0.03,
 

//   onComplete:function(){
//     lenis.start();
//     $('.sc-intro .loading').css('z-index', '0');
//   }
// })
// loadTl.to('.sc-intro .loading', {backgroundColor: 'transparent'});







$('#gnb .item').click(function(){
  $(this).addClass('on').siblings().removeClass('on');
})

const introDesc = new SplitType('.sc-intro .col-left .text-area p', { types: 'words, chars', });





const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro",
    start: "0% 0%",
    end: "100% 0%",
    scrub: 0,
    // markers:true,
  },
})
introTl.to('.sc-intro .img-area img',{yPercent:-5})
// introTl.to('.sc-intro .text-line .text-wrap:nth-child(1)', { xPercent: 100} , 'a')
// introTl.to('.sc-intro .text-line .text-wrap:nth-child(2)', { xPercent: -100} , 'a')

/**
 * 
 * load
 * 
 */
window.addEventListener('load', function() {

  gsap.to(".loading #num", {
    duration: 1, // 애니메이션 지속 시간 (초)
    innerHTML: 100, // 최종 값
    roundProps: "innerHTML", // 값 반올림
    ease: "power1.inOut", // 이징 효과
    onComplete:function(){
      gsap.to('.loading',{autoAlpha:0})
      introMotion.play();
      lenis.start();
    }
  });
  

  introMotion = gsap.timeline({
    paused:true,
  })
  introMotion.to('.sc-intro .word .char', {
    stagger: 0.02,
    transform: 'translateY(0)'
  },'a');
  introMotion.to('.sc-intro .text-line .text', {
    transform: 'translateY(0)'
  },'a');

});

// const aboutTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc-about",
//     start: "0% 100%",
//     scrub: 0.8,
//     markers:true,
//   },
// })
// aboutTl.to('.sc-about .word .char', { transform: 'translateY(0)'})

ScrollTrigger.create({
  trigger: ".sc-about",
   start: "0% 100%",
   end: "100% 100%",
   scrub: 0.1,
  //  markers:true,
  onLeaveBack: function () {
    gsap.to('.sc-about .word .char', { transform: 'translateY(100%)'})
  },
  onEnter: function () {
    gsap.to('.sc-about .word .char', { transform: 'translateY(0)'})
  }
})

// const workTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc-work .inner",
//     start: "0% 100%",
//     end: "100% 100%",
//     scrub: 0.8,
//     // markers:true,
//   },
// })
// workTl.to('.sc-work .word .char', { 
//   transform: 'translateY(0)',
//   stagger: 0.1, 
// });

ScrollTrigger.create({
  trigger: ".sc-work",
  start: "0% 0%",
  end: "100% 50%",
  toggleClass:{targets:"#main",className:"dark"}
})




ScrollTrigger.create({
  trigger: ".sc-work .inner",
  start: "0% 100%",
  end: "100% 100%",
  scrub: 0.8,

  onLeaveBack: function () {
    gsap.to('.sc-work .word .char', { 
      transform: 'translateY(100%)',
      stagger: 0.1, 
    })
  },
  onEnter: function () {
    gsap.to('.sc-work .word .char', { 
      transform: 'translateY(0)',
      stagger: 0.1, 
    })
  }
})

/**
 * 
 * dark
 * 
 */

// ScrollTrigger.create({
//   trigger: `#footer`,
//   start: "0% 10%",
//   end: "100% 10%",
//   // markers: true, 
//   onEnter: function () {
//     $('#gnb .list').addClass('dark');
//   },
//   onLeaveBack: function () {
//     $('#gnb .list').removeClass('dark');
//   }
// })

// const contactTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#footer .group-title",
//     start: "100% 100%",
//     // end: "100% 100%",
//     scrub: 0.8,
//     // markers:true,
//   },
// });
// contactTl.to('#footer .headline .word .char', { 
//   transform: 'translateY(0)',
//   stagger: 0.1, 
// });

// ScrollTrigger.create({
//   trigger: "#footer .group-title",
//     start: "100% 100%",
//     end: "100% 100%",
//     scrub: 0.8,
//     // markers:true,

//   onLeaveBack: function () {
//     gsap.to.to('#footer .headline .word .char', { 
//       transform: 'translateY(100%)',
//       stagger: 0.1, 
//     })
//   },
//   onEnter: function () {
//     gsap.to('#footer .headline .word .char', { 
//       transform: 'translateY(0)',
//       stagger: 0.1, 
//     })
//   }
// })


ScrollTrigger.create({
  trigger: "#wrapper",
  start: "0% 0%",
  end: "100% 100%",
  onUpdate:function(self){
    $('.progress').html(Math.round(self.progress*100)+'%')

  }
})

$('[data-target]').each(function(){
  idx=$(this).data('target');
  ScrollTrigger.create({
    trigger: $(this),
    start: "0% 0%",
    end: "100% 0%",
    markers:true,
    toggleClass:{
      targets:$('#gnb .item').eq(idx),
      className:"on"
    }
    // onEnter:function(){
      // $('#gnb .item:nth-child(2)').addClass('on')
    // }
  })

})


// const introTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc-intro",
//     start: "10% 0%",
//     end: "100% 10%",
//     scrub: 0.8,
//     // markers:true,
//   },
// })
