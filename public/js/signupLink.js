const signup = async () => {
    console.log("This is working");
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/signup', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/signup');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#signup').addEventListener('click', signup);