const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL, connectionParams } = require("./src/config/config");
const contactRoutes = require('./src/routes/contactRoutes');
const laboratoriesRoutes = require('./src/routes/laboratoriesRoutes');
const offersRoutes = require('./src/routes/offersRoutes');
const checkoutRoutes = require('./src/routes/checkoutRoutes');
const testRoutes = require('./src/routes/testRoutes');
const labRequestRoutes = require('./src/routes/labRequestRoutes');
const userRoutes = require('./src/routes/userRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Routes
app.use("/contact", contactRoutes);
app.use("/lab",laboratoriesRoutes);
app.use("/admin",adminRoutes);
app.use("/offers", offersRoutes);
app.use('/checkout', checkoutRoutes);
app.use("/test", testRoutes);
app.use('/user' , userRoutes);
app.use('/labreq' , labRequestRoutes);




// Connect to MongoDB
mongoose.connect(MONGO_URL, connectionParams)
  .then(() => {
    console.log("Connected to the database");
    // Start the server after successful database connection
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });
