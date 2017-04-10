$(document).ready(()=>{
  console.log("JS is ready")
    $("#typed").typed({
        strings: ["a web developer.", "a web designer.", "Sky."],
        typeSpeed: 30,
        callback: function(){
            lift();
        }
    });
    function lift(){
        $(".head-text").addClass("lift-text");
    }
  var x = $(".intro-one").offset();
  var controller = new ScrollMagic.Controller();
  var wipeAnimation = new TimelineMax()
     .to("#slide-container", 1, {x: "-75%"})
  new ScrollMagic.Scene({
    triggerElement: "#pin-container",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setPin("#pin-container")
    .setTween(wipeAnimation)
    .addTo(controller);

  var horizontal = new ScrollMagic.Scene({
    offset: 50,
    duration: 300,
  })
    .addTo(controller);

});
