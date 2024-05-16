const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.querySelectorAll(".navbar__links").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const offsetTop =
      target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".navbar__links").forEach((link) => {
  link.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("is-active")) {
      mobileMenu.classList.remove("is-active");
      // Hide the navbar menu
      const navbarMenu = document.querySelector(".navbar__menu");
      navbarMenu.classList.remove("active");
    }
  });
});



document.getElementById('meetingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const datetime = document.getElementById('datetime').value;

  // Validate form values (additional validation can be added as needed)
  if (name === '' || email === '' || datetime === '') {
      alert('Please fill in all fields.');
      return;
  }

  // Create an appointment object
  const appointment = {
      name: name,
      email: email,
      datetime: datetime
  };

  // Send the appointment data to the server
  fetch('http://localhost:3000/appointments', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointment)
  })
  .then(response => response.json())
  .then(data => {
      // Handle success response
      console.log('Appointment Scheduled:', data);
      alert('Appointment scheduled successfully!');
      document.getElementById('meetingForm').reset(); // Clear the form
  })
  .catch(error => {
      // Handle error response
      console.error('Error:', error);
      alert('There was an error scheduling your appointment. Please try again.');
  });
});