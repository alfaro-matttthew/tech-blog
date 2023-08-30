const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-newPost').value.trim();
    const body = document.querySelector('#content-newPost').value.trim();
    const user_id = document.querySelector('#user_id').value.trim();
    console.log(user_id);
  
    if (title && body) {
      const response = await fetch('/api/posts/create', {
        method: 'POST',
        body: JSON.stringify({ title, body, user_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler);  