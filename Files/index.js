// Define a function to toggle the navigation menu
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open');
  }
  
  // Attach a click event listener to the menu button
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu);
  
  // Define a function to display an alert when the contact form is submitted
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    alert(`Thanks for reaching out, ${name}! Your message has been sent.`);
  }
  
  // Attach a submit event listener to the contact form
  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', handleSubmit);
  
