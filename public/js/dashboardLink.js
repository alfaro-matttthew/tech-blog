const dashboard = async () => {
    console.log("This is working");
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/dashboard', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#dashboard').addEventListener('click', dashboard);