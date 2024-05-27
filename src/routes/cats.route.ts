import express from 'express';
import { Request, Response, NextFunction } from 'express';

import CatsController from '../controllers/cats.controller';

const router = express.Router();

const catchErr = (f: (req: Request, res: Response, next: NextFunction) => Promise<any>) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => f(req, res, next).catch(next);

router.route('/breeds/:breedId').get(catchErr(CatsController.getBreedByBreedId));
router.route('/images').get(catchErr(CatsController.getImagesOfBreedByBreedId));
router.route('/search').get(catchErr(CatsController.searchForBreedByQuery));
router.route('/').get(catchErr(CatsController.getMostPopularBreeds));

export default router;