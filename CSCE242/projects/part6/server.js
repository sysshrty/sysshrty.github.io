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
  
    // Retrieve the uploaded image file
    const imageFile = document.getElementById("image-upload").files[0];
  
    // Create a FormData object to send both form data and image file
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("first-name", firstName);
    formData.append("last-name", lastName);
    formData.append("date", date);
    formData.append("theme", theme);
    formData.append("address", address);
    formData.append("quantity", guest);
    formData.append("email", email);
  
    // Make a fetch request to your backend, sending formData
    fetch("/api/bookings", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle success response
      console.log("Booking created:", data);
      // Display success message or handle redirection
    })
    .catch(error => {
      // Handle error
      console.error("Error creating booking:", error);
      // Display error message to the user
    });
  };
  app.post("/api/bookings", upload.single("image"), async (req, res) => {
    try {
      // Validate booking data
      const { error } = validateBooking(req.body);
      if (error) return res.status(400).send(error.details[0].message);
  
      // Check if image file exists
      if (!req.file) return res.status(400).send("No Image File Found");
  
      // Create a new booking document
      const booking = new Booking({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        date: req.body.date,
        theme: req.body.theme,
        address: req.body.address,
        guest: req.body.guest,
        email: req.body.email,
        image: req.file.filename // Save image filename to database
      });
  
      // Save the booking to the database
      await booking.save();
  
      res.send(booking);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  });