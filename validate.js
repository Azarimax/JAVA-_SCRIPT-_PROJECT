// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
  
    // Reset error messages
    document.getElementById('firstNameError').style.display = 'none';
    document.getElementById('lastNameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
  
    let isValid = true;
  
    // Validate First Name
    if (firstName === '') {
      document.getElementById('firstNameError').textContent = 'First name is required.';
      document.getElementById('firstNameError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Last Name
    if (lastName === '') {
      document.getElementById('lastNameError').textContent = 'Last name is required.';
      document.getElementById('lastNameError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    }
  
    // Validate Phone Number
    const phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number
    if (!phonePattern.test(phone)) {
      document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    }
  
    // If all validations pass, submit the form
    if (isValid) {
      alert('Form submitted successfully!');
      window.location.href = 'https://home.html'; // Redirect to another page
    }
  });