// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth scrolling
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1,
    infinite: false,
});

// Request animation frame loop for Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Check if 'nana' exists on the page and add the event listener
const nana = document.getElementById('nana');
if (nana) {
    nana.addEventListener('click', function() {
        const target = document.getElementById('nana');
        lenis.scrollTo(target, {
            offset: 0,
            immediate: false,
            duration: 1.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        });
    });
}

// Check if 'men' exists on the page and add the event listener
const men = document.getElementById('men');
if (men) {
    men.addEventListener('click', function() {
        const target = document.getElementById('intro');
        lenis.scrollTo(target, {
            offset: 0,
            immediate: false,
            duration: 2.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        });
    });
}




gsap.registerPlugin(ScrollTrigger);

// Create a GSAP animation for the .oddblock1 element
gsap.to(".bigtex", {
  opacity: 0,
  filter: "blur(5px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".bigtex",
    start: "top ", // When the top of the container hits the bottom of the viewport
    end: "bottom 50%", // When the top of the container hits the bottom of the viewport
// When the bottom of the container hits the top of the viewport
    scrub: true, // Smooth scrubbing
  }
});


function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }


  function isMobileOrTablet() {
    return isTouchDevice() || window.innerWidth <= 1024; 
  }


  if (!isMobileOrTablet()) {
    Shery.imageEffect(".img", {
      style: 3, 
      config: {
        "uFrequencyX": { "value": 20.61, "range": [0, 100] },
        "uFrequencyY": { "value": 15.27, "range": [0, 100] },
        "uFrequencyZ": { "value": 9.16, "range": [0, 100] },
        "geoVertex": { "range": [1, 64], "value": 20.24 },
        "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 0.9375 },
        "ignoreShapeAspect": { "value": true },
        "shapePosition": { "value": { "x": 0, "y": 0 } },
        "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
        "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
        "shapeRadius": { "value": 0, "range": [0, 2] },
        "currentScroll": { "value": 0 },
        "scrollLerp": { "value": 0.07 },
        "gooey": { "value": false },
        "infiniteGooey": { "value": false },
        "growSize": { "value": 4, "range": [1, 15] },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1.5, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 },
        "masker": { "value": true },
        "maskVal": { "value": 1.12, "range": [1, 5] },
        "scrollType": { "value": 1 },
        "noEffectGooey": { "value": true },
        "onMouse": { "value": 0 },
        "noise_speed": { "value": 0.2, "range": [0, 10] },
        "metaball": { "value": 0.2, "range": [0, 2] },
        "discard_threshold": { "value": 0.5, "range": [0, 1] },
        "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] },
        "noise_scale": { "value": 10, "range": [0, 100] },
        "a": { "value": 2, "range": [0, 30] },
        "b": { "value": 0.7, "range": [-1, 1] }
      }
    });
  }



  window.onload = function() {
    var words = ["Ńdá","Olá", "I'm", "Treasure"];
    var index = 0;
    var element = document.getElementById("yeah");

    function changeText() {
        element.style.opacity = 0; // Start fade-out

        setTimeout(function() {
            if (index < words.length) {
                element.innerHTML = words[index];
                index++;
                element.style.opacity = 1; // Start fade-in
            }
        }, 250); // Wait for fade-out to complete
    }

    function startTextChange() {
        changeText();
        setInterval(function() {
            if (index < words.length) {
                changeText();
            }
        }, 1000); // Change text every 2 seconds
    }

    startTextChange();
};

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('index.html')) {
      const items = document.querySelectorAll('.items .item');
      const firstItem = document.querySelector('.items .first');
      const itemsContainer = document.querySelector('.items');
    
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          items.forEach(el => el.style.opacity = '0.3');
          item.style.opacity = '1';
        });
      });
    
      itemsContainer.addEventListener('mouseleave', () => {
        items.forEach(el => el.style.opacity = '0.3');
        firstItem.style.opacity = '1';
      });
    }
  });






  
  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith('index.html')) {
      const items = document.querySelectorAll('.item');
      const images = document.querySelectorAll('.job img');
      const defaultImage = document.querySelector('.job .first');
  
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          images.forEach(img => img.style.opacity = '0');
          const imgToShow = document.querySelector(`.job .${item.classList[1]}`);
          imgToShow.style.opacity = '1';
        });
  
        item.addEventListener('mouseleave', () => {
          images.forEach(img => img.style.opacity = '0');
          defaultImage.style.opacity = '1';
        });
      });
    }
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const coverove = document.getElementById('coverove');
  
    if (!sessionStorage.getItem('hasVisited')) {
      // First visit, add the animation delay
      coverove.style.animationDelay = '5s';
      // Set flag in session storage
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      // Subsequent visits, no animation delay
      coverove.style.animationDelay = '0s';
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  // Select all elements with the class .container__heading
  document.querySelectorAll('.container__heading').forEach(container => {
    // Apply the GSAP animation to each container's heading lines
    gsap.to(container.querySelectorAll('.heading__line span'), {
      y: "0",
      filter: "blur(0px)",
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "top 80%", // Trigger when top of container is 80% from the top of the viewport
        toggleActions: "play none none none", // Play animation when entering the viewport
      }
    });
  });


  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }


  function isMobileOrTablet() {
    return isTouchDevice() || window.innerWidth <= 1024; 
  }


  if (!isMobileOrTablet()) {
    Shery.imageEffect(".rightimage", {
  style: 3 /*OR 5 for different variant */,
  
  config:{"uFrequencyX":{"value":20.61,"range":[0,100]},"uFrequencyY":{"value":15.27,"range":[0,100]},"uFrequencyZ":{"value":9.16,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.24},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9375},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]}}

  });
}


function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }


  function isMobileOrTablet() {
    return isTouchDevice() || window.innerWidth <= 1024; 
  }


  if (!isMobileOrTablet()) {
    Shery.imageEffect(".nextinner", {
        style: 3,

        config:{"uFrequencyX":{"value":1.53,"range":[0,100]},"uFrequencyY":{"value":6.11,"range":[0,100]},"uFrequencyZ":{"value":9.16,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.24},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.138472580095242},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]}}


});
  }


  document.querySelectorAll('.hovered').forEach(span => {
    span.addEventListener('mouseenter', function() {
        // Find the currently active span
        let activeSpan = document.querySelector('.active');
        if (activeSpan && activeSpan !== this) {
            activeSpan.classList.remove('active');
            activeSpan.classList.add('hovered');
        }
        // Add active class to the hovered span
        this.classList.add('active');
        this.classList.remove('hovered');

        // Show the corresponding image by changing opacity
        let imgClass = this.getAttribute('data-img');
        document.querySelectorAll('.inthere img').forEach(img => {
            img.style.opacity = '0'; // Hide all images
        });
        document.querySelector(`.inthere .${imgClass}`).style.opacity = '1'; // Show the correct image
    });
});

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }


  function isMobileOrTablet() {
    return isTouchDevice() || window.innerWidth <= 1024; 
  }


  if (!isMobileOrTablet()) {
    Shery.imageEffect(".jana", {
  style: 3 /*OR 5 for different variant */,
  
  config:{"uFrequencyX":{"value":20.61,"range":[0,100]},"uFrequencyY":{"value":15.27,"range":[0,100]},"uFrequencyZ":{"value":9.16,"range":[0,100]},"geoVertex":{"range":[1,64],"value":20.24},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9375},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"a":{"value":2,"range":[0,30]},"b":{"value":0.7,"range":[-1,1]}}

  });
}


document.querySelectorAll('.hovere').forEach(span => {
    span.addEventListener('mouseenter', function() {
        // Find the currently active span
        let activeSpan = document.querySelector('.actived');
        if (activeSpan && activeSpan !== this) {
            activeSpan.classList.remove('actived');
            activeSpan.classList.add('hovere');
        }
        // Add active class to the hovered span
        this.classList.add('actived');
        this.classList.remove('hovere');
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.pathname.endsWith('about.html')) {
      const items = document.querySelectorAll('.items .item');
      const firstItem = document.querySelector('.items .second');
      const itemsContainer = document.querySelector('.items');
    
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          items.forEach(el => el.style.opacity = '0.3');
          item.style.opacity = '1';
        });
      });
    
      itemsContainer.addEventListener('mouseleave', () => {
        items.forEach(el => el.style.opacity = '0.3');
        firstItem.style.opacity = '1';
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuContent = document.getElementById('menuContent');
    const menuItems = document.querySelectorAll('.item');
    const body = document.body;
    let scrollPosition = 0;
  
    function closeMenu() {
      menuOverlay.classList.remove('show');
      menuContent.classList.remove('show');
      body.classList.remove('no-scroll');
      body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }
  
    menuButton.addEventListener('click', function() {
      if (menuOverlay.classList.contains('show')) {
        closeMenu();
      } else {
        scrollPosition = window.pageYOffset;
        menuOverlay.classList.add('show');
        menuContent.classList.add('show');
        body.classList.add('no-scroll');
        body.style.top = `-${scrollPosition}px`;
      }
    });
  
    menuOverlay.addEventListener('click', function(event) {
      if (event.target === menuOverlay) {
        closeMenu();
      }
    });
  
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        closeMenu();
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith('about.html')) {
      const items = document.querySelectorAll('.item');
      const images = document.querySelectorAll('.job img');
      const defaultImage = document.querySelector('.job .second');
  
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          images.forEach(img => img.style.opacity = '0');
          const imgToShow = document.querySelector(`.job .${item.classList[1]}`);
          imgToShow.style.opacity = '1';
        });
  
        item.addEventListener('mouseleave', () => {
          images.forEach(img => img.style.opacity = '0');
          defaultImage.style.opacity = '1';
        });
      });
    }
  });
  


  