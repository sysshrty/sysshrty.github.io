const submitEvent = (e) => {
  e.preventDefault();

  const form = document.getElementById("my-form");
  const firstName = form.elements["txt-first-name"].value;
  const lastName = form.elements["txt-last-name"].value;
  const date = form.elements["time-date"].value;
  const theme = form.elements["type-theme"].value;
  const address = form.elements["address"].value;
  const guest = form.elements["quantity"].value;
  const email = form.elements["email"].value;

  // Display success!
  const successMessage = document.getElementById("success-message");
  successMessage.classList.remove("hidden");
  setTimeout(() => {
      successMessage.classList.add("hidden");
  }, 2000);
  console.log(firstName);
  console.log(lastName);
  console.log(date);
  console.log(theme);
  console.log(address);
  console.log(guest);
  console.log(email);
};

document.getElementById("my-form").onsubmit = submitEvent;


