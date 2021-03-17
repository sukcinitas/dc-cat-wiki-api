# DC Cat Wiki Api

An application to get information about cat breeds & keep information on most searched ones. Complementary to [dc-cat-wiki](https://github.com/sukcinitas/dc-cat-wiki).

---

## Built with

- TypeScript
- Express 4
- Axios

##### APIs

- CatAPI

##### Testing

- Mocha & Chai

##### Linting
- ESLint

##### Compiling 

- Babel 7

---

## Setup

- Clone this repository - `git clone https://github.com/sukcinitas/dc-cat-wiki-api.git`, install dependencies `cd dc-cat-wiki-api`, `npm install` (you will need `npm` and `node` installed globally);

  - `npm start` - to run the app on [localhost:8080](http://localhost:8080/) using nodemon
  - `npm run serve` - to run the app on [localhost:8080](http://localhost:8080/) without nodemon
  - `npm run lint` - to lint
  - `npm run test` - to run tests
  - `npm run build` - to build

---

## Endpoints

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>URL query params</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/ <code>GET</code></td>
    <td>none</td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, mostPopularBreeds: [<b>CatBreedSearchedData</b>]}</code></li></ul> Error response: <ul><li><code>500</code> <code>{ success: false, message: 'Could not get results!'}</code></li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3"><details>
      <summary><b>CatBreedSearchedData</b></summary>
      <pre>
      {
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
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>URL query params</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/search <code>GET</code></td>
    <td><code>q=[string]</code> <em>required</em></td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, searchList: [<b>SearchedData</b>]}</code></li></ul> Error response: <ul><li><code>400</code> <code>{ success: false, message: 'Parameter "q" is required for request!'}</code> if recieves no q parameter</li><li><code>500</code> <code>{ success: false, message: 'Could not get results!'}</code> if otherwise fails</li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <details>
        <summary><b>SearchedData</b></summary>
        <pre>
      {
        id: string,
        name: string,
      }</pre>
      </details>
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>URL query params</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/images <code>GET</code></td>
    <td><code>breedId=[string]</code> <em>required</em></td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, catInfo: [<b>CatBreedImageData</b>]}</code></li></ul> Error response: <ul><li><code>400</code> <code>{ success: false, message: 'Parameter "breedId" is required for request!'}</code> if recieves no breedId parameter</li><li><code>500</code> <code>{ success: false, message: 'Could not get results!'}</code> if otherwise fails</li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <details>
  <summary><b>CatBreedImageData</b></summary>
  <pre>
  {
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
    height: number
}</pre>
</details>
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>URL query params</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/breeds/:breedId<code>GET</code></td>
    <td>none</td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, catInfo: <b>CatBreedImageData</b>}</code></li></ul> Error response: <ul><li><code>500</code> <code>{ success: false, message: 'Could not get results!'}</code></li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <details>
  <summary><b>CatBreedImageData</b></summary>
  <pre>
  {
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
    height: number
}</pre>
</details>
    </td>
  </tr>
</table>