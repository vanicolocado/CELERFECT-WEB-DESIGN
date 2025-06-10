
document.addEventListener("DOMContentLoaded", () => {

    
    const form = document.getElementById("bookingForm"); 
    const confirmation = document.getElementById("confirmation"); 
    const newBookingBtn = document.getElementById("newBookingBtn"); 

  
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        
        const isLoggedIn = localStorage.getItem("isLoggedIn"); 
        if (isLoggedIn !== "true") { 
            alert("Please log in or sign up before booking."); 
            window.location.href = "login.html"; 
            return; 
        }

        
        const requiredFields = ["eventType", "eventDate", "guestCount", "name", "email", "phone"]; 
        for (let field of requiredFields) {
            
            if (!document.getElementById(field).value.trim()) {
                alert("Please fill in all required fields."); 
                return; 
            }
        }

        
        const data = {
            eventType: document.getElementById("eventType").value, 
            eventDate: document.getElementById("eventDate").value, 
            guestCount: document.getElementById("guestCount").value, 
            venueType: document.getElementById("venueType").value, 
            budget: document.getElementById("budget").value, 
            name: document.getElementById("name").value, 
            email: document.getElementById("email").value, 
            phone: document.getElementById("phone").value, 
            message: document.getElementById("message").value,
            services: Array.from(
                document.querySelectorAll('input[name="services"]:checked') 
            ).map(cb => cb.value) 
        };


        const jsonString = JSON.stringify(data, null, 2);


        const blob = new Blob([jsonString], { type: "application/json" });

    
        const url = URL.createObjectURL(blob);

        
        const downloadLink = document.createElement("a");
        downloadLink.href = url; 
        downloadLink.download = "booking-request.json"; 
        downloadLink.click(); 

       
        form.style.display = "none"; 
        confirmation.style.display = "block"; 
    });

    
    newBookingBtn.addEventListener("click", () => {
        form.reset(); 
        form.style.display = "block"; 
        confirmation.style.display = "none"; 

         
        const urlParams = new URLSearchParams(window.location.search); 
        const eventType = urlParams.get("eventType"); 
        if (eventType) {
            document.getElementById("eventType").value = eventType; 
        }
    });

});
