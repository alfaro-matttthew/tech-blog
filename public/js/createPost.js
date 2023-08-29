const newPostHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.querySelector('#title-newPost').value.trim();
    const body = document.querySelector('#content-newPost').value.trim();
    const user_id = session.user_id;
    console.log(user_id);
  
    if (title && body) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({ title, body, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert('Failed to log in');
      }
    }
  };
  document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler);  