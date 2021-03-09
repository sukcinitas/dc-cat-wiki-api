import { Request, Response } from 'express';

import CatService from '../services/cat.service';
import mostPopularSearch from '../util/mostPopularSearch';

const CatsController = {
  async searchForBreedByQuery(req: Request, res: Response): Promise<void> {
    try {
      const q = typeof req.query.q === 'string' ? req.query.q : undefined;
      if (!q) {
        res.status(500).json({
          success: false,
          message: 'Could not retrieve search results!',
        });
      }
      const searchList = await mostPopularSearch.search(q);
      res.json({
        success: true,
        searchList,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Could not retrieve search results!',
        error: err.message,
      });
    }
  },
  
  async getBreedByBreedId(req: Request, res: Response): Promise<void> {
    try {
      const { breedId } = req.params;
      const response = await CatService.getBreedByBreedId({ breedId });
      await mostPopularSearch.increaseSearchCount(breedId);
      res.json({
        success: true,
        catInfo: response.data[0],
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },

  async getImagesOfBreedByBreedId(req: Request, res: Response): Promise<void> {
    try {
      const breedId = typeof req.query.breedId === 'string' ? req.query.breedId : undefined;
      const limit = typeof req.query.limit === 'string' ? req.query.limit : undefined;
      const response = await CatService.getImagesOfBreedByBreedId({ breedId, limit });
      res.json({
        success: true,
        catInfo: response.data,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },

  async getMostPopularBreeds(req: Request, res: Response): Promise<void> {
    try {
      const result = await mostPopularSearch.get();
      res.json({
        success: true,
        mostPopularBreeds: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },
};

export default CatsController;
