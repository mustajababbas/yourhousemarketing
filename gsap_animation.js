
	    jQuery( document ).ready(function() {
    

      gsap.registerPlugin(ScrollTrigger);

			
      ScrollTrigger.create({
        trigger: ".main-svg-container",
        animation: gsap.fromTo(".svg-container", {scale: 1 }, { scale:150 }),
        pin: false,
        duration: 10000,
        start: "0% top",
        end: "100% bottom",
        scrub: 2, // I like the 1 sec delay, set to true for exact anime on scroll
        markers: false,
      });
			
			
	 
	      const textScrollAnim = () => {
        // document.body.style.overflow = "auto";
        // document.scrollingElement.scrollTo(0, 0);
        // gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

        gsap.utils.toArray(".txt1").forEach((section, index) => {
          const w = section.querySelector(".wrapper");
          let [x, xEnd] = index % 2 ? ["10%", (w.scrollWidth - section.offsetWidth - 1000) * -1] : [w.scrollWidth * -4, 0];
          //   x = x / 2;
          //   console.log(x);
          console.log(xEnd);
          console.log(x);

          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: ".scroll-banner",
                duration: 100,
                scrub: 1,
              },
            }
          );
        });
      };
      textScrollAnim();
      const textScrollAnim2 = () => {
        // document.body.style.overflow = "auto";
        // document.scrollingElement.scrollTo(0, 0);
        // gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });

        gsap.utils.toArray(".txt2").forEach((section, index) => {
          const w = section.querySelector(".wrapper");
          let [x, xEnd] = index % 1 ? ["-10%", (w.scrollWidth - section.offsetWidth - 1000) * -1] : [w.scrollWidth * 4, 0];
          //   x = x / 2;
          //   console.log(x);
          console.log(xEnd);
          console.log(x);
          

          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: ".scroll-banner",
                duration: 100,
                scrub: 1,
              },
            }
          );
        });
      };
      textScrollAnim2();
	    });
	    
	    const buttons = document.querySelectorAll('#cus-btn');
buttons.forEach((button) => {
  let target = button.querySelector('.elementor-button-text');
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty('--x', `${ x }px`)
    target.style.setProperty('--y', `${ y }px`)
  }
  button.addEventListener('mousemove', (e) => {
    handleMove(e);
  });
  button.addEventListener('touchmove', (e) => {
    handleMove(e.changedTouches[0]);
  });
});




    