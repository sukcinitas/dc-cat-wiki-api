import { Request, Response } from 'express';

import CatService from '../services/cat.service';

const CatsController = {
  async searchForBreedByQuery(req: Request, res: Response): Promise<void> {
    try {
      const q = typeof req.query.q === "string" ? req.query.q : undefined;
      const response = await CatService.searchForBreedByQuery({ q });
      res.json(response.data);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: '',
        error: err.message,
      });
    }
  },
  
  async getBreedByBreedId(req: Request, res: Response): Promise<void> {
    try {
      const { breedId } = req.params;
      const response = await CatService.getBreedByBreedId({ breedId });
      res.json(response.data[0]);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: '',
        error: err.message,
      });
    }
  },
  async getImagesOfBreedByBreedId(req: Request, res: Response): Promise<void> {
    try {
      const breedId = typeof req.query.breedId === 'string' ? req.query.breedId : undefined;
      const limit = typeof req.query.limit === 'string' ? req.query.limit : undefined;
      const response = await CatService.getImagesOfBreedByBreedId({ breedId, limit });
      res.json(response.data);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: '',
        error: err.message,
      });
    }
  },
};

export default CatsController;
