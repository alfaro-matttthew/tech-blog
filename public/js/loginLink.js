const login = async () => {
    console.log("This is working");
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/login', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#login').addEventListener('click', login);