import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

import { router } from "@/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.json({ limit: process.env.MAX_REQUEST_SIZE }));

app.use(router);

export { app };

// REQ -> ROUTES -> CONTROLLER(RES) <-> USECASE <-> REPOSITORY <-> PRISMA <-> DATABASE
