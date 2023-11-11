function videoconAnimation(){
    var videocon = document.querySelector("#vid-container")
    var playbtn = document.querySelector(".play")



    videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
    scale:1,
    opacity:0.8
   })
   })

    videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale:0,
        opacity:0
    })
    })

    videocon.addEventListener("mousemove", function(dets){
    // gsap.to(playbtn, {
    //     left:dets.x -1,
    //     top:dets.y -8,
    //     duration: 0.2
    //}) 

    const circleRadius = playbtn.clientWidth /2 ;

    gsap.to(playbtn, {
        left: dets.clientX - circleRadius,
        top: dets.clientY - circleRadius,
        
    })
    
     })
} 
videoconAnimation();


gsap.from("#page1 h1", {
    y:130,
    opacity:0,
    delay: 0.5,
    stagger:0.2
})


