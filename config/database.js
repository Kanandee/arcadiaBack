let mongoose = require ('mongoose');
mongoose.set("strictQuery", true);

const db = () =>
   mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
         console.log("Connection stablished on: ", process.env.MONGO_URI);
      })
      .catch((error) => {
         console.log("Error connecting to MongoDB", error);
      });

module.exports = db;
