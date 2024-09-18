
 // Function to toggle the mobile menu
function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}

// Add event listener to the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Function to close the mobile menu if clicked outside
function closeMenuOnClickOutside(event) {
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  
  if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
    mobileMenu.classList.remove('open');
  }
}

// Add event listener to the document to detect clicks outside
document.addEventListener('click', closeMenuOnClickOutside);

// Function to close the mobile menu when a menu item is clicked
function closeMenuOnItemClick() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.remove('open');
}

// Add event listeners to each menu item
document.querySelectorAll('.mobile-nav-links a, .mobile-nav-links button').forEach(item => {
  item.addEventListener('click', closeMenuOnItemClick);
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize the slider
showSlide(currentSlide);

// Optional: Set interval for automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds

  