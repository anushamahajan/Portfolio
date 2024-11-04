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
    document.body.style.backgroundColor = "#bef264";
  } else if (scrollPosition < windowHeight * 7) {
    document.body.style.backgroundColor = "#bef264";
  }
  else if (scrollPosition < windowHeight * 8) {
    document.body.style.backgroundColor = "#bef264";
  }


});


const scrollContainer = document.getElementById('horizontal-scroll');

    // Listen for scroll event on the window
    window.addEventListener('wheel', (event) => {
      // Check if we're scrolling vertically
      if (event.deltaY !== 0) {
        event.preventDefault(); // Prevent the default vertical scroll
        scrollContainer.scrollLeft += event.deltaY; // Apply vertical scroll to horizontal scroll
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

// Start the typing animation
document.addEventListener("DOMContentLoaded", type);
