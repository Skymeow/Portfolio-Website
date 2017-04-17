$(document).ready(()=>{
  console.log("JS is ready")
    $("#typed").typed({
        strings: ["a web developer.", "a web designer.", "Sky."],
        typeSpeed: 30,
        startDelay: 1000,
        callback: function(){
            lift();
        }
    })


   setTimeout

    function lift(){
        $(".head-text").addClass("lift-text");
    }

  var x = $(".intro-three").offset();
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
     .to("#slide-container", 1, {x: "-80%"})
  new ScrollMagic.Scene({
    triggerElement: "#pin-container",
    triggerHook: "onLeave",
    duration: "600%"
  })
    .setPin("#pin-container")
    .setTween(wipeAnimation)
    .addTo(controller);

  // var horizontal = new ScrollMagic.Scene({
  //   offset: 50,
  //   duration: 300,
  // })
  //   .addTo(controller);

});
