import { promises as fs} from 'fs';
import path from 'path';

import CatService from '../services/cat.service';

const file = path.resolve(__dirname, '../../cats.json');

const increaseSearchCount = async (id: string): Promise<void> => {
  const result = await fs.readFile(file, 'utf8');
  let info = JSON.parse(result);

  info = info.map((cat) => {
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

  fs.writeFile(file, JSON.stringify(info), 'utf8', err => {
    if (err) throw err;
  });
}

const get = async (): Promise<Array<{ id: string, name: string, searched: number }>> => {
  const result = await fs.readFile(file, 'utf8');
  const info = JSON.parse(result);

  const sortedInfo = info.sort(function (a, b) {
    return b.searched - a.searched;
  }).slice(0, 10);
  const { data } = await CatService.getAllBreeds();
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    const exist = sortedInfo.some((elem) => {
      return elem.id === data[i].id;
    });
    if (exist) {
      newArray.push(data[i]);
    } else {
      continue;
    }
  }
  return newArray;
}

const search = async (pattern: string): Promise<Array<string>> => {
  const result = await fs.readFile(file, 'utf8');
  const info = JSON.parse(result);
  const newArray = info
    .filter((item) => {
      return (new RegExp('^' + pattern, 'i')).test(item.name);
    })
    .map((item) => ({ name: item.name, id: item.id }));
  return newArray;
}

export default {
  get,
  increaseSearchCount,
  search,
};