window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition < windowHeight) {
    document.body.style.backgroundColor = "#000000";
  } else if (scrollPosition < windowHeight * 2) {
    document.body.style.backgroundColor = "#ccfbf1";
  } else if (scrollPosition < windowHeight * 3) {
    document.body.style.backgroundColor = "#fde047";
  } else if (scrollPosition < windowHeight * 4) {
    document.body.style.backgroundColor = "#a78bfa";
  } else if (scrollPosition < windowHeight * 5) {
    document.body.style.backgroundColor = "#bef264";
  } else if (scrollPosition < windowHeight * 6) {
    document.body.style.backgroundColor = "#1e1b4b";
  }
    else if (scrollPosition < windowHeight * 7) {
    document.body.style.backgroundColor = "#083344";
  } 
  else if (scrollPosition < windowHeight * 8) {
    document.body.style.backgroundColor = "#000000";
  }


});




window.addEventListener("scroll", function () {
  var windowScroll = window.pageYOffset;
  var $horizontalWrapper = document.getElementById("horizontal-wrapper");
  $horizontalWrapper.className = '';

  switch (true) {
    case (windowScroll >= ($horizontalWrapper.offsetTop + $horizontalWrapper.offsetHeight - window.innerHeight)):
      $horizontalWrapper.classList.add('post-sticky');
      break;
    case (windowScroll >= $horizontalWrapper.offsetTop):
      $horizontalWrapper.classList.add('sticky');

      var _start = (windowScroll - $horizontalWrapper.offsetTop);
      var _end = ($horizontalWrapper.offsetTop + $horizontalWrapper.offsetHeight - window.innerHeight);

      const scrollSpeedModifier = 2.5; // Adjust this value to change scroll speed
      var pct = (_start / _end) * 100 * scrollSpeedModifier;

      pct = Math.min(pct, 100);

      $horizontalWrapper.querySelectorAll('.inner')[0].style.transform = `translate(-${pct}%)`;
      break;
    default:
      $horizontalWrapper.classList.add('pre-sticky');
      $horizontalWrapper.querySelectorAll('.inner')[0].style.transform = 'translate(0)';
      break;
  }
});

const words = ["Developer", "Designer", "Problem Solver", "Data Analyst", "Researcher"];
const typingSpeed = 100; // Time in milliseconds between each character
const delayBetweenWords = 1000; // Delay before deleting the word and typing the next word

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    // Remove characters
    typingElement.innerHTML = currentWord.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      // Move to the next word after deletion is complete
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Cycle through words
      setTimeout(type, 500); // Short pause before typing the next word
    } else {
      setTimeout(type, typingSpeed / 2); // Faster speed while deleting
    }
  } else {
    // Add characters
    typingElement.innerHTML = currentWord.substring(0, charIndex);
    charIndex++;

    if (charIndex === currentWord.length) {
      // Start deleting after a delay
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('[data-target]');
  const speed = 200; // Adjust the speed of the animation

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        const updateCount = () => {
          const count = +counter.innerText;
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10); // Adjust the delay for smoother animation
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
        observer.unobserve(counter); // Stop observing once the animation starts
      }
    });
  }, {
    threshold: 0.1 // Adjust this value to determine when the animation starts
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});


// Start the typing animation
document.addEventListener("DOMContentLoaded", type);

