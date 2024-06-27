import express from "express";
import taskRoute from "./routes/route";

const app = express();
const PORT = 3005;
app.use(express.json());
app.use('/task',taskRoute)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
