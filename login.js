document.addEventListener("DOMContentLoaded", () => {
  
  const loginForm = document.getElementById("loginForm");
  

  const registerForm = document.getElementById("registerForm");
 

  const loginBtn = document.getElementById("loginBtn");
  
  const registerBtn = document.getElementById("registerBtn");
  

  loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
  

    registerForm.classList.remove("active");


    loginBtn.classList.add("active");
   

    registerBtn.classList.remove("active");
    
  });

  
  registerBtn.addEventListener("click", () => {
    registerForm.classList.add("active");
    

    loginForm.classList.remove("active");
    

    registerBtn.classList.add("active");
    

    loginBtn.classList.remove("active");
   
  });

  
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    

    const name = document.getElementById("regName").value;
  

    const email = document.getElementById("regEmail").value;
    

    const password = document.getElementById("regPassword").value;
 

    const phone = document.getElementById("regPhone").value;
   

    
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      alert("Email already registered. Please login.");
      loginBtn.click();
      
      return; 
    }

    
    users.push({ name, email, password, phone });

    
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");
    loginBtn.click();
    
  });


  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
   

    const email = document.getElementById("loginEmail").value;
   

    const password = document.getElementById("loginPassword").value;
  

  
    const users = JSON.parse(localStorage.getItem("users") || "[]");

   
    const foundUser = users.find(user => user.email === email);

    if (!foundUser) {
      alert("Email not found. Please register first.");
      registerBtn.click();
     
      return; 
    }

    if (foundUser.password !== password) {
      alert("Incorrect password. Please try again.");
      
      return; 
    }

  
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInEmail", email);

    alert("Login successful!");


    window.location.href = "Book Now.html";
  });
});
