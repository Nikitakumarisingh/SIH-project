const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const Complaint = require("./models/complaint"); // Assuming "Complaint" is your Mongoose model for the complaints collection
require("./db/conn");

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to fetch coordinates from MongoDB
app.get("/coordinates", async (req, res) => {
  try {
    // Fetch coordinates from MongoDB
    const complaints = await Complaint.find({}, "location"); // Assuming "location" is the field containing coordinates
    res.json( complaints );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/list", async (req, res) => {
  const complaints = await Complaint.find({});
  res.render("list", { complaints: complaints });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Route to handle status updates
app.post('/update-status', async (req, res) => {
    const { id, status } = req.body;

    try {
        // Update the status in the database
        const complaint = await Complaint.findOne({ _id: id });
        if (complaint) {
            complaint.Status = status; // Assuming "Status" is the field containing complaint statuses
            await complaint.save();
            res.status(200).json({ message: 'Status updated successfully' });
        } else {
            res.status(404).json({ message: 'Complaint not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
