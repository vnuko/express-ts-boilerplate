import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import homeRoutes from "./routes/home.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", homeRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
