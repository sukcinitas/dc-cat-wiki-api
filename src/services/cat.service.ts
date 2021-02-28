import axios from 'axios';
import dotenv from 'dotenv';

import { CatBreedData, CatBreedImageData } from '../types';

dotenv.config();
axios.defaults.headers['x-api-key'] = process.env.API_KEY;

const CatService = {
  searchForBreedByQuery({ q }: {q: string}): Promise<{data:[CatBreedData]}> {
    return axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${q}`);
  },
  getBreedByBreedId({ breedId }: {breedId: string}): Promise<{data:[CatBreedImageData]}> {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
  },
  getImagesOfBreedByBreedId({ breedId, limit }: {breedId: string, limit:string}): Promise<{data:[CatBreedImageData]}> {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=${limit}`);
  },
};

export default CatService;