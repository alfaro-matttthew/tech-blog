const commentFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const comment = document.querySelector("#add-comment").value.trim();

  const element = document.getElementById("comment-form");

  const postID = element.getAttribute("data-id");

  if (comment) {
    console.log(comment);
    // Send the e-mail and password to the server
    const response = await fetch(`/api/comments/${postID}`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });


    if (response.ok) {
      document.location.replace(`/post/${postID}`);
    } else {
      alert("Failed to comment");
    }
  }
};
document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
