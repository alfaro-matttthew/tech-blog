const blogFeed = async () => {
    console.log("This is working");
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#blogFeed').addEventListener('click', blogFeed);