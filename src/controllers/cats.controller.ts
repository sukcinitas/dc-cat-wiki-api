import { Request, Response } from 'express';

import CatService from '../services/cat.service';
import mostPopularSearch from '../util/mostPopularSearch';

const CatsController = {
  async searchForBreedByQuery(req: Request, res: Response): Promise<void> {
    try {
      const q = typeof req.query.q === 'string' ? req.query.q : undefined;
      if (!q) {
        return res.status(400).json({
          success: false,
          message: 'Parameter "q" is required for request!',
        });
      }
      const searchList = await mostPopularSearch.search(q);
      return res.json({
        success: true,
        searchList,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },
  
  async getBreedByBreedId(req: Request, res: Response): Promise<void> {
    try {
      const { breedId } = req.params;
      const response = await CatService.getBreedByBreedId({ breedId });
      await mostPopularSearch.increaseSearchCount(breedId);
      return res.json({
        success: true,
        catInfo: response.data[0],
      });
    } catch (err) {
      return res.status(500).json({
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
      if (!breedId) {
        return res.status(400).json({
          success: false,
          message: 'Parameter "breedId" is required for request!',
        });
      }
      const response = await CatService.getImagesOfBreedByBreedId({ breedId, limit });
      return res.json({
        success: true,
        catInfo: response.data,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },

  async getMostPopularBreeds(req: Request, res: Response): Promise<void> {
    try {
      const result = await mostPopularSearch.get();
      return res.json({
        success: true,
        mostPopularBreeds: result,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Could not get results!',
        error: err.message,
      });
    }
  },
};

export default CatsController;
