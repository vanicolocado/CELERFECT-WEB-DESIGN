// Run the following code only after the full HTML document is loaded
document.addEventListener('DOMContentLoaded', function () {

  // Get the form element using its ID
  const form = document.getElementById('inquiryForm');

  // Add an event listener for when the form is submitted
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Get the values from the input fields and remove any extra spaces
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventType = document.getElementById('eventType').value;
    const message = document.getElementById('message').value.trim();

    // Create a new inquiry object with the collected data and current timestamp
    const inquiry = {
      name,
      email,
      phone,
      eventType,
      message,
      submittedAt: new Date().toISOString() // Record the date and time of submission
    };

    // Retrieve existing inquiries from localStorage, or use an empty array if none exist
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries')) || [];

    // Add the new inquiry to the array of existing inquiries
    existingInquiries.push(inquiry);

    // Save the updated array of inquiries back into localStorage
    localStorage.setItem('inquiries', JSON.stringify(existingInquiries));

    // Clear the form fields after submission
    form.reset();

    // Show a confirmation message to the user
    alert('Your inquiry has been submitted successfully!');
  });

});
