window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition < windowHeight) {
        document.body.style.backgroundColor = "#000000";
    } else if (scrollPosition < windowHeight * 2) {
        document.body.style.backgroundColor = "#ccfbf1";
    } else if (scrollPosition < windowHeight * 3) {
        document.body.style.backgroundColor = "#fde047";
    } else {
        document.body.style.backgroundColor = "#ef4444";
    }
});



const words = ["Developer", "Designer", "Problem Solver","Data Analyst", "Researcher",];
const typingSpeed = 150; // Time in milliseconds between each character
const delayBetweenWords = 2000; // Delay before deleting the word and typing the next word

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
