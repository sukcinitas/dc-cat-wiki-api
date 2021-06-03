import { Request, Response, NextFunction } from 'express';

import CatService from '../services/cat.service';
import mostPopularSearch from '../util/mostPopularSearch';
import { AppError } from '../errorHandling/errorClasses';



const CatsController = {
  async searchForBreedByQuery(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const q = typeof req.query.q === 'string' ? req.query.q : undefined;
      if (!q) {
        throw new AppError('Parameter "q" is required for request!', 400);
      }
      const searchList = await mostPopularSearch.search(q);
      return res.json({
        success: true,
        searchList,
      });
    } catch (err) {
      return next(err);
    }
  },
  
  async getBreedByBreedId(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { breedId } = req.params;
      const response = await CatService.getBreedByBreedId({ breedId });
      await mostPopularSearch.increaseSearchCount(breedId);
      return res.json({
        success: true,
        catInfo: response.data[0],
      });
    } catch (err) {
      return next(err);
    }
  },

  async getImagesOfBreedByBreedId(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const breedId = typeof req.query.breedId === 'string' ? req.query.breedId : undefined;
      const limit = typeof req.query.limit === 'string' ? req.query.limit : undefined;
      if (!breedId) {
        throw new AppError('Parameter "breedId" is required for request!', 400);
      }
      const response = await CatService.getImagesOfBreedByBreedId({ breedId, limit });
      return res.json({
        success: true,
        catInfo: response.data,
      });
    } catch (err) {
      return next(err);
    }
  },

  async getMostPopularBreeds(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const result = await mostPopularSearch.get();
      return res.json({
        success: true,
        mostPopularBreeds: result,
      });
    } catch (err) {
      return next(err);
    }
  },
};

export default CatsController;
