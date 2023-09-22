const express = require("express");

const app = express();

const PORT = 8002;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Get reporting successfully",
    data: {},
  });
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
