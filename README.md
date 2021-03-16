# DC Cat Wiki Api

An application to explore information about cat breeds & keep information on most searched ones. Complementary to [dc-cat-wiki](https://github.com/sukcinitas/dc-cat-wiki).

---

## Built with

- TypeScript
- Express 4
- Axios

##### APIs

- CatAPI

##### Testing & compiling & linting

- Mocha & Chai
- ESLint (Airbnb style guide)
- Babel 7

---

## Features

- 

---

## Setup

- Clone this repository - `git clone https://github.com/sukcinitas/dc-cat-wiki-api.git`, install dependencies `cd dc-cat-wiki-api`, `npm install` (you will need `npm` and `node` installed globally);

  - `npm start` - to run the app on [localhost:8080](http://localhost:8080/) using nodemon
  - `npm run serve` - to run the app on [localhost:8080](http://localhost:8080/) without nodemon
  - `npm run lint` - to lint
  - `npm run test` - to run tests
  - `npm run build` - to build

---


| URL & HTTP method | URL query params |      Response      |            
| ------------------| ---------------------- | ---------------- |
| /api/cats/ `GET`  |           none           |Success response: <ul><li>`200` `{ success: true, mostPopularBreeds: []}`</li></ul> Error response: <ul><li>`500` `{ success: false, message: 'Could not get results!'}`</li></ul>|

<details>
  <summary>CatBreedSearchedData</summary>
  <pre>{
    weight: {
      imperial: string,
      metric: string,
    }
    id: string,
    name: string,
    cfa_url: string,
    vetstreet_url: string,
    vcahospitals_url: string,
    temperament: string,
    origin: string,
    country_codes: string,
    country_code: string,
    description: string,
    life_span: string,
    indoor: number,
    lap: number,
    alt_names: string,
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    reference_image_id: string,
    image: {
      id?: string,
      url: string,
      width?: number,
      height?: number,
    },
    searched: number
}</pre>
</details>

| URL & HTTP method | URL query params |      Response      |            
| ------------------| ---------------------- | ---------------- |
| /api/cats/search `GET`  | <ul><li>`q=[string]` required</li></ul>|Success response: <ul><li>`200` `{ success: true, searchList: [SearchedData]}`</li></ul> Error response: <ul><li>`400` `{ success: false, message: 'Parameter "q" is required for request!'}` if recieves no q parameter</li><li>`500` `{ success: false, message: 'Could not get results!'}` if otherwise fails</li></ul>|


<details>
  <summary>SearchedData</summary>
  <pre>{
    id: string,
    name: string,
}</pre>
</details>

| URL & HTTP method | URL query params |      Response      |            
| ------------------| ---------------------- | ---------------- |
| /api/cats/images `GET`  | <ul><li>`breedId=[string]` required</li><li>`limit=[number]`</li></ul> |Success response: <ul><li>`200` `{ success: true, catInfo: [CatBreedImageData]}`</li></ul> Error responses: <ul><li>`400` `{ success: false, message: 'Parameter "breedId" is required for request!'}` if recieves no breedId parameter</li><li>`500` `{ success: false, message: 'Could not get results!'}`</li></ul>|


<details>
  <summary>CatBreedImageData</summary>
  <pre>{
  breeds: [
      weight: {
      imperial: string,
      metric: string,
    }
    id: string,
    name: string,
    cfa_url: string,
    vetstreet_url: string,
    vcahospitals_url: string,
    temperament: string,
    origin: string,
    country_codes: string,
    country_code: string,
    description: string,
    life_span: string,
    indoor: number,
    lap: number,
    alt_names: string,
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    reference_image_id: string,
  ],
  id: string,
  url: string,
  width: number,
  height: number,
}</pre>
</details>

| URL & HTTP method | URL query params |      Response      |            
| ------------------| ---------------------- | ---------------- |
| /api/cats/breeds/:breedId `GET`  |           none           |Success response: <ul><li>`200` `{ success: true, catInfo: CatBreedImageData}`</li></ul> Error response: <ul><li>`500` `{ success: false, message: 'Could not retrieve search results!'}`</li></ul>|

<details>
  <summary>CatBreedImageData</summary>
  <pre>{
  breeds: [
      weight: {
      imperial: string,
      metric: string,
    }
    id: string,
    name: string,
    cfa_url: string,
    vetstreet_url: string,
    vcahospitals_url: string,
    temperament: string,
    origin: string,
    country_codes: string,
    country_code: string,
    description: string,
    life_span: string,
    indoor: number,
    lap: number,
    alt_names: string,
    adaptability: number,
    affection_level: number,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    reference_image_id: string,
  ],
  id: string,
  url: string,
  width: number,
  height: number,