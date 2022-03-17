import express, { Request, Response, NextFunction, } from "express";
import { router } from "./Routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000);