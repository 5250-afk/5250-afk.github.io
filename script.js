const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload
  const email = emailInput.value.trim();

  // Validate input
  if (email === '') {
    showError('Please provide a valid email');
  } else if (!isValidEmail(email)) {
    showError('Invalid email format');
  } else {
    showError(''); // Clear error message
    alert('Form submitted successfully!');
    emailInput.value = ''; // Clear input
  }
});

// Function to validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to show error
function showError(message) {
  errorMsg.textContent = message;
  if (message) {
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = '#ccc';
  }
}
