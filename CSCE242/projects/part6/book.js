const mongoose = require('mongoose');

// Define schema for crafts
const craftSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    supplies: [String],
    image: { type: String, required: true } // Assuming storing image URLs
});

// Create model based on schema
const Craft = mongoose.model('Craft', craftSchema);

// Connect to MongoDB database
mongoose.connect('mongodb+srv://sbegay:shry101@finalproject242.nrojfty.mongodb.net/?retryWrites=true&w=majority&appName=Finalproject242', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Update your POST route to save craft data to MongoDB
app.post("/api/crafts", upload.single("image"), async (req, res) => {
    try {
        // Create a new craft object
        const craft = new Craft({
            name: req.body.name,
            description: req.body.description,
            supplies: req.body.supplies.split(","),
            image: req.file.filename // Assuming storing image filenames
        });

        // Save the craft to the database
        await craft.save();

        res.send(craft);
    } catch (err) {
        console.error('Error creating craft:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Similar updates for PUT and DELETE routes...
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


