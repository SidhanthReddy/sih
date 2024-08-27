const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const AlumniModel = require("./Models/AluminiModel"); 

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/SIH', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json()); // Middleware to parse JSON body

// POST route to receive and store the data
app.post("/signup", async (req, res) => {
  try {
    const { NameToBeSent, PasswordToBeSent, EmailToBeSent, Linkden_Link, Twitter_Link, InstaGram_Link, verified } = req.body;

    // Create a new instance of the AlumniModel
    const newAlumni = new AlumniModel({
      NameToBeSent,
      PasswordToBeSent,
      EmailToBeSent,
      Linkden_Link,
      Twitter_Link,
      InstaGram_Link,
      verified,
    });
    await newAlumni.save();

    console.log(`${NameToBeSent} ${EmailToBeSent} ${PasswordToBeSent} ${Linkden_Link} ${Twitter_Link} ${InstaGram_Link} ${verified}`);
    res.status(200).json({ message: "Sign-up successful" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Error occurred" });
  }
});


app.get("/api/alumni", async (req, res) => {
  try {
    const alumniData = await AlumniModel.find({verified:'false'});
    res.status(200).json(alumniData);
  } catch (error) {
    console.error("Error fetching alumni data:", error);
    res.status(500).json({ message: "Error occurred" });
  }
});
app.put('/api/alumni/:id/verify', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAlumni = await AlumniModel.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    );
    if (!updatedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.status(200).json(updatedAlumni);
  } catch (error) {
    console.error('Error updating alumni:', error);
    res.status(500).json({ message: 'Error occurred' });
  }
});
app.delete('/api/alumni/:id/verify', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlumni = await AlumniModel.findByIdAndDelete(
      id,
    );
    if (!deletedAlumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.status(200).json(deletedAlumni);
  } catch (error) {
    console.error('Error updating alumni:', error);
    res.status(500).json({ message: 'Error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
