import { promises as fs} from 'fs';
import * as path from 'path';

import CatService from '../services/cat.service';
import { CatBreedSearchedData } from '../types';

const file = path.resolve(__dirname, '../../cats.json');

const increaseSearchCount = async (id: string): Promise<void> => {
  const result = await fs.readFile(file, 'utf8');
  const info = JSON.parse(result);

  const changedInfo = info.map((cat: { id: string, name: string, searched: number }) => {
    if (cat.id === id) {
      return {
        id: cat.id,
        name: cat.name,
        searched: cat.searched + 1,
      }
    } else {
      return {
        id: cat.id,
        name: cat.name,
        searched: cat.searched,
      }
    }
  });

  await fs.writeFile(file, JSON.stringify(changedInfo), 'utf8');
}

const get = async (): Promise<Array<CatBreedSearchedData>> => {
  const result = await fs.readFile(file, 'utf8');
  const info = JSON.parse(result);

  const sortedInfo = info.sort(function (a: { id: string, name: string, searched: number }, b: { id: string, name: string, searched: number }) {
    return b.searched - a.searched;
  }).slice(0, 10);
  const { data } = await CatService.getAllBreeds();
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    const exist = sortedInfo.filter((elem: { id: string, name: string, searched: number }) => {
      return elem.id === data[i].id;
    });
    if (exist.length !== 0) {
      if (data[i].name === 'Persian') {
        newArray.push({...data[i], searched: exist[0].searched, image: { url: 'https://cdn2.thecatapi.com/images/LutjkZJpH.jpg' } });
        continue;
      }
      newArray.push({...data[i], searched: exist[0].searched });
    } else {
      continue;
    }
  }

  return newArray;
}

const search = async (pattern: string): Promise<Array<{ name: string, id: string }>> => {
  const result = await fs.readFile(file, 'utf8');
  const info = JSON.parse(result);
  const changedInfo = info
    .filter((item: { id: string, name: string, searched: number }) => {
      return (new RegExp('^' + pattern, 'i')).test(item.name);
    })
    .map((item: { id: string, name: string, searched: number }) => ({ name: item.name, id: item.id }));
  return changedInfo;
}

export default {
  get,
  increaseSearchCount,
  search,
};