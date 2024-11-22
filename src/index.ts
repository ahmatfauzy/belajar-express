// import { log } from "console";
import express from "express";
import userRoutes from './routes/userRoute'


const app = express();
const port = 2323;

app.use(express.json());

// app.get("/users", (req, res) => {
//   res.send("Hello world");
// });

// app.post("/users", (req, res) => {
//   res.send("post users");
// });

// app.put("/users/:id", (req, res) => {
//   const id = req.params;
//   res.send(id);
// });

// app.delete("/userss", (req, res) => {
//   res.send("delete users");
// });


app.use(userRoutes)

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
