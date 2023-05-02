const express = require("express");

const app = express();

const userRoute = require("./routes/User");

app.use("/user", userRoute);

app.listen(3005, () => {
  console.log("Server running on port 3005");
});

/*
    -Mvc is a pattern in which you structure your project
    -Divide into 3 parts: modules, views, controllers
    -Views is normally frontend
    -Created express server
    -Routes for different routes: user
    -Models: define structure of schema, for database
    -Controllers: execute all the different things you want to do with data, manage the data
    -Creating a route

*/
