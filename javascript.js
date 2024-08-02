function toggleForm(type) {
  const studentForm = document.getElementById('student-form');
  const companyForm = document.getElementById('company-form');
  const studentBtn = document.querySelector('.student-btn');
  const companyBtn = document.querySelector('.company-btn');

  if (type === 'student') {
    studentForm.classList.remove('-translate-x-full');
    companyForm.classList.add('-translate-x-full');
    studentBtn.classList.add('active');
    companyBtn.classList.remove('active');
  } else {
    studentForm.classList.add('-translate-x-full');
    companyForm.classList.remove('-translate-x-full');
    companyBtn.classList.add('active');
    studentBtn.classList.remove('active');
  }
}

const studentRadio = document.getElementById('student-radio');
const companyRadio = document.getElementById('company-radio');
const submitBtn = document.getElementById('submitBtn');

let selectedOption = null;

studentRadio.addEventListener('change', () => {
  selectedOption = 'student';
  studentRadio.checked = true;
  companyRadio.checked = false;
});

companyRadio.addEventListener('change', () => {
  selectedOption = 'company';
  companyRadio.checked = true;
  studentRadio.checked = false;
});

submitBtn.addEventListener('click', () => {
  if (selectedOption === 'student') {
    window.location.href = 'student-registration.html';
  } else if (selectedOption === 'company') {
    window.location.href = 'company-registration.html';
  } else {
    alert('Please select an option.');
  }
});

 // Retrieve and populate user data
 const urlParams = new URLSearchParams(window.location.search);
 const name = urlParams.get('name');
 const email = urlParams.get('email');
 // Populate other profile fields

 document.getElementById('name').value = name;
 document.getElementById('email').value = email;
 // Populate other profile fields

 // Handle form submission
 document.getElementById('profile-form').addEventListener('submit', (event) => {
     event.preventDefault();
     // Send updated profile data to the server
     // You can use AJAX or form submission
     // ...
 });