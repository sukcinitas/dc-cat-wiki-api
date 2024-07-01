import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import catsRouter from "./routes/cats.route";
import { AppError } from "./errorHandling/errorClasses";
import errorHandlingMiddleware from "./errorHandling/errorHandlingMiddleWare";

const app = express();

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // instead of bodyParser, since 4.16 Express; extended
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? [process.env.ORIGIN, process.env.ORIGIN2]
        : "http://localhost:4000",
  })
);

app.use("/api/cats", catsRouter);

app.all("*", function (req: Request, res: Response, next: NextFunction) {
  next(new AppError("Not found!", 404));
});

app.use(errorHandlingMiddleware);

app.listen(process.env.PORT || 8080, () => {
  console.log("App is running!");
});

export default app;
