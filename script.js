function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function navAnimation(){
    var nav = document.querySelector("nav");

nav.addEventListener("mouseenter",function(){
   let tl = gsap.timeline();

   tl.to("#nav-bottom",{
    height:"23vh"
   })

   tl.to(".nav-part2 h5",{
      display:"block"
   })

   tl.to(".nav-part2 h5 span",{
        y:0,
        // duration:0.2,
        stagger:{
            amount:0.6
        }
   })
})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span",{
        y:25,
        //  transform: `translate(25px)`,
         // duration:0.2,
         stagger:{
             amount:0.2
         }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
 })
}

function page1SVG(){
    let h1Pen = document.querySelector("#page1 h1 svg");

    setTimeout(function () {
      h1Pen.style.transform = "rotate(0deg) scale(1)";
    }, 8700)
    
    h1Pen.addEventListener("mouseover", function () {
      h1Pen.style.transform = "rotate(-30deg) scale(0.85)";
    });
    
    h1Pen.addEventListener("mouseleave", function () {
      h1Pen.style.transform = "rotate(0deg) scale(1)";
    });
}
function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function(elem){
    
        // console.log("hello");
       
        elem.addEventListener("mouseenter",function(){
            // console.log(elem.childNodes[3]);
            // elem.childNodes[3].style.opacity = 1
    
            
    
    
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
    
        })
        elem.addEventListener("mouseleave",function(){
            //  elem.childNodes[3].style.opacity = 0;
             gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
    
        })
        elem.addEventListener("mousemove",function(dets){
            // elem -> div (container , section , or a rectangle)
            // console.log(elem.getBoundingClientRect().y);
    
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-60,
                y:dets.y-elem.getBoundingClientRect().y-160
            })
        })
    })
}

function page3video(){
    var page3center = document.querySelector(".page3-center");
var video = document.querySelector("#page3 video");
console.log(video);
page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click",function(){
    video.pause();
    gsap.to(video,{
        transform:"scaleX(0) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}

function videoAni(){
    var sections = document.querySelectorAll(".sec-right");
sections.forEach(function(elem){
    // console.log( elem.childNodes[3]);
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity =1;
        elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity =0;
        elem.childNodes[3].load();
    })
})
}

function scrollAni(){
    gsap.from("#btn8-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part2",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btn8-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part3",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btn8-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btn8-part4",
            scroller:"#main",
            // markers:true,
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
}
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
 

let container = document.querySelector("#main");
let cursor = document.querySelector("#Cursor");

container.addEventListener("mousemove", function (details) {
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
});
let Page1 = document.querySelector("#page1");
let nav = document.querySelector("nav");

Page1.addEventListener("mouseenter", function () {
  cursor.style.display = "flex";
  nav.style.height = "7.25vw";
})

Page1.addEventListener("mouseleave", function () {
  cursor.style.display = "none";
  nav.style.height = "6vw";

})

page1SVG();
navButton();

// loadingAnimation();

// locomotiveAnimation()
// navAnimation();
// page2Animation();
// page3video();
// videoAni();
// scrollAni();