const dashboard = async () => {
  console.log("This is working");

  // Make a GET request to fetch user-specific dashboard data
  try {
    const response = await fetch('/dashboard', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successfully fetched dashboard data, redirect to the dashboard page
      // document.location.replace("/dashboard");
      // window.location.reload();
      console.log("The fetch was successful");
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log("!!! ERROR: Dashboard Fetch Request !!!");
    console.log(err);
  }
};

document.querySelector("#dashboard").addEventListener("click", dashboard);
