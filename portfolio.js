// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert(`Thank you for reaching out, ${name}!`);
      document.getElementById('contact-form').reset();
    }
  });
  
  // Download Resume
  document.getElementById('downloadResume').addEventListener('click', function() {
    const resumeLink = document.createElement('a');
    resumeLink.href = 'resume.pdf';  // Replace 'resume.pdf' with the actual path to your resume
    resumeLink.download = 'Resume.pdf';
    resumeLink.click();
  });
  