		
gsap.registerPlugin(ScrollTrigger);


 gsap.to(".counter", {
	duration: .5,
	delay: 3.5,
	opacity: 0,
	 display: "none",
					ease: "power4.inOut",
});



gsap.from(".welcome", {
	duration: 1,
	y: 150,
  ease: "power4.out",
  delay: 4,
  skewY: 7,
  stagger: {
    amount: 0.3}
});

gsap.to(".line-container", {
	duration: 1,
	delay: 5,
	y: '-1000%',
				ease: "power4.inOut",
});


		gsap.to(".bar", {
			duration: 1,
			delay: 5,
			height: 0,
			ease: "power4.inOut",

		}); 

gsap.to(".overlay", {
	duration: 1,
	delay: 6,
	opacity: 0,
	 display: "none",
					ease: "power4.inOut",
});




/* main */


		
		gsap.from(".title", 1.5, {
			delay: 5.6,
			y: 300,
			skewY: 10,
			stagger: {
				amount: 0.2,
			},
			ease: "power4.inOut",
		});

gsap.from("#intro", 1, {
			delay: 6.4,
						y: 200,
	opacity: 0,
			ease: "power4.inOut",
		});

gsap.from("#scroll", 1, {
			delay: 6.6,
			y: 200,
	opacity: 0,
			ease: "power4.inOut",
		});


ScrollTrigger.matchMedia({
  '(min-width: 0px)': function () {
    gsap.from(".li-01", {
      scrollTrigger: {
        trigger: '#two',
        start: '30% center',
        end: '35% 45%',
		  scrub: true,

      },
	

x: '-100%', opacity: 0,		ease: "power1.inOut"
    })
	 
	gsap.from(".li-02", {
      scrollTrigger: {
        trigger: '#two',
        start: '30% center',
        end: '35% 45%',
		  scrub: true,

     
      },
x: '100%',opacity: 0, 		ease: "power1.inOut"

    })
	  
	  gsap.from(".li-03", {
      scrollTrigger: {
        trigger: '#two',
        start: '30% center',
        end: '35% 45%',
		  scrub: true,
      },
	

x: '-100%',
		  opacity: 0,		ease: "power1.inOut"


    })
  }
});
	
gsap.defaults({ease: "none", duration: 2});

// create a sequence that moves 3 of the panels in from different directions 
const tl = gsap.timeline();
tl.from(".pic", {stagger: {
				amount: 11,
			},yPercent: 200});



ScrollTrigger.create({
  animation: tl,
  trigger: "#three",
  start: "top top",
  end: "+=2300", 
  scrub: true,
  pin: true,
	pinSpacing: false,
  anticipatePin: 1
});


 gsap.from(".three-sub", {
      scrollTrigger: {
        trigger: '#three',
        start: '20% center',
        end: '40% 45%',
      },
delay: 0,
			y: 300,
			skewY: 10,
			stagger: {
				amount: 0.5,
			},
			ease: "power4.inOut",
    });

gsap.from(".four-sub", {
      scrollTrigger: {
        trigger: '#four',
      },
			xPercent: 200,
			ease: "power4.inOut",
    });




  


		