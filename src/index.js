const express = require("express");
const app = express();
const route = require("../src/route/router")


app.use("/",route)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
