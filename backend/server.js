import express from "express";
import cors from "cors";
import connectDB from "./database.js";
import userRoutes from "./userRoutes.js";

const app = express();
const port = 3000;

// Connect to database
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Live 🎉");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
