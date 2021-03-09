import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

import catsRouter from './routes/cats.route';

const app = express();

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // instead of bodyParser, since 4.16 Express; extended
app.use(cors());

app.use('/api/cats', catsRouter);

app.use(function (req: Request, res: Response) {
  res.status(404).send('Not found!');
})

app.use(function (err: Error, req: Request, res: Response) {
  res.status(500).end();
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App is running!');
});

export default app;