document.addEventListener('DOMContentLoaded', function() {
  // Get all Book Now buttons
  const bookButtons = document.querySelectorAll('.book-btn');
  
  // Add click event to each button
  bookButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Find the closest venue card
      const venueCard = this.closest('.venue-card');
      
      // Get venue name from data attribute
      const venueName = venueCard.getAttribute('data-name');
      
      // Update the parent link's href
      const parentLink = this.closest('a');
      parentLink.href = `Book Now.html?eventType=wedding&venue=${encodeURIComponent(venueName)}`;
      
      // Allow the link to proceed naturally
      // (no e.preventDefault() since we want normal navigation)
    });
  });
});