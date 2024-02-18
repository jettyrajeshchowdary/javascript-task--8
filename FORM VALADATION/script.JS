document.getElementById('myForm').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    let isValid = true;
  
    if (!nameInput.checkValidity()) {
      nameInput.classList.add('is-invalid');
      nameInput.nextElementSibling.classList.add('active');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.nextElementSibling.classList.remove('active');
    }
  
    if (!emailInput.checkValidity()) {
      emailInput.classList.add('is-invalid');
      emailInput.nextElementSibling.classList.add('active');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.nextElementSibling.classList.remove('active');
    }
  
    if (!isValid) {
        // Prevent form submission if not valid
      event.preventDefault(); 
    }
  });
  