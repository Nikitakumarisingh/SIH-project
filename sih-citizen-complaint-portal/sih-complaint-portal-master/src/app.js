const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const complaint = require("./models/complaint");
const axios = require("axios");

// Middleware to log IP address
let ipAdd = "";
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  // console.log('IP Address:', ip);
  ipAdd = ip;
  next();
});

const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

let locationArr = [];





function getLocation(apiKey, ipAddress = null) {
  const baseUrl = "http://api.ipstack.com/";

  let url;
  if (ipAddress) {
    url = `${baseUrl}${ipAddress}?access_key=${apiKey}`;
  } else {
    url = `${baseUrl}check?access_key=${apiKey}`;
  }

  axios
    .get(url)
    .then((response) => {
      const data = response.data;

      if (data.error) {
        console.error(`Error: ${data.error.info}`);
        return null;
      }
      locationArr = [data['latitude'] , data['longitude']];
      // console.log("Location Information:", [ data['latitude'] , data['longitude'] ]);
      return [ data['latitude'] , data['longitude'] ];
    })
    .catch((error) => {
      console.error(`Error making request: ${error.message}`);
      return null;
    });
}

const apiKey = "bbbd59d63df44ef0b75f2d22d846fcd4";
const ipAddress = ipAdd;

getLocation(apiKey , ipAddress);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "uploads");
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({storage: storage });

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/register", (req, res) => {
  res.render("register");
});




app.post("/register", upload.single("Photo"), async (req, res) => {
  try {
    const filePath = req.file.path;
    // console.log("File uploaded:", filePath);
    const currentDate = new Date();
    const newComplaint = new complaint({
      photo: filePath,
      description: req.body.description,
      location: req.body.location.split('-').map(Number),
      complaintDate: currentDate.toDateString(),
      IP: ipAdd,
      PhoneNumber : req.body.phoneNumber,
    });

    await newComplaint.save();

    res.status(201).render("register");
  } catch (error) {
    console.error("Error:", error);
    res.status(400).send(error);
  }
});

// app.post("/register", async (req, res) => {
//   try {
//     console.log(req)
//     const newComplaint = new complaint({
//       photo: filePath,
//       description: req.body.description,
//       location: req.body.location,
//       IP: req.body.IP,
//     });

//     await newComplaint.save();

//     res.status(201).render("register");
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).send(error);
//   }
// });

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
