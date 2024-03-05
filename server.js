import app from "./app.js";
import dbConnection from "./dbConnection/db.js";

try {
  dbConnection();
  app.listen(process.env.PORT, () => {
    console.log("App is running at " + process.env.PORT);
  });
} catch (error) {
  console.log("Error while connection the database!");
}
