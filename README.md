# DC Cat Wiki Api

An api to get information about cat breeds from CatAPI and to keep track of the most searched ones. Complementary to [dc-cat-wiki](https://github.com/sukcinitas/dc-cat-wiki). You can find the application example [here](https://cats-wiki.netlify.app/) (it might take a little while for the server to wake up). Api can be tried here [https://elemental-oil-tin.glitch.me/api/](https://elemental-oil-tin.glitch.me/api/).

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

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ORIGIN`, `API_KEY`

---

## Setup

- Clone this repository - `git clone https://github.com/sukcinitas/dc-cat-wiki-api.git`, install dependencies `cd dc-cat-wiki-api`, `npm install` (you will need `npm` and `node` installed globally);

  - `npm start` - to run the app on [localhost:8080](http://localhost:8080/)
  - `npm run dev` - to run the app on [localhost:8080](http://localhost:8080/) using nodemon
  - `npm run lint` - to lint
  - `npm run test` - to run tests
  - `npm run build` - to build

---

## Endpoints

Note: in **"development"** mode unsuccessful responses have additional properties: <code>error</code> and <code>stack</code>.

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>Parameters | req body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/ <code>GET</code></td>
    <td>none</td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, mostPopularBreeds: [<b>CatBreedSearchedData</b>]}</code></li></ul> Error response: <ul><li><code>500</code> <code>{ success: false, message: 'Something went wrong!'}</code></li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3"><details>
      <summary><b>CatBreedSearchedData</b></summary>
      <pre>
      {
        weight: {
          imperial: <em>string</em>,
          metric: <em>string</em>,
        }
        id: <em>string</em>,
        name: <em>string</em>,
        cfa_url: <em>string</em>,
        vetstreet_url: <em>string</em>,
        vcahospitals_url: <em>string</em>,
        temperament: <em>string</em>,
        origin: <em>string</em>,
        country_codes: <em>string</em>,
        country_code: <em>string</em>,
        description: <em>string</em>,
        life_span: <em>string</em>,
        indoor: <em>number</em>,
        lap: <em>number</em>,
        alt_names: <em>string</em>,
        adaptability: <em>number</em>,
        affection_level: <em>number</em>,
        child_friendly: <em>number</em>,
        dog_friendly: <em>number</em>,
        energy_level: <em>number</em>,
        grooming: <em>number</em>,
        health_issues: <em>number</em>,
        intelligence: <em>number</em>,
        shedding_level: <em>number</em>,
        social_needs: <em>number</em>,
        stranger_friendly: <em>number</em>,
        vocalisation: <em>number</em>,
        experimental: <em>number</em>,
        hairless: <em>number</em>,
        natural: <em>number</em>,
        rare: <em>number</em>,
        rex: <em>number</em>,
        suppressed_tail: <em>number</em>,
        short_legs: <em>number</em>,
        wikipedia_url: <em>string</em>,
        hypoallergenic: <em>number</em>,
        reference_image_id: <em>string</em>,
        image: {
          id?: <em>string</em>,
          url: <em>string</em>,
          width?: <em>number</em>,
          height?: <em>number</em>,
        },
        searched: <em>number</em>
      }
      </pre>
    </details>
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>Parameters | req body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/search <code>GET</code></td>
    <td>
      Query parameters:
      <ul>
        <li><code>q</code> <em>string required</em></li>
      </code>
    </td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, searchList: [<b>SearchedData</b>]}</code></li></ul> Error responses: <ul><li><code>400</code> <code>{ success: false, message: 'Parameter "q" is required for request!'}</code> if recieves no q parameter</li><li><code>500</code> <code>{ success: false, message: 'Something went wrong!'}</code> if otherwise fails</li></ul>
    </td>
  </tr>
  <tr>
    <td colspan="3">
      <details>
        <summary><b>SearchedData</b></summary>
        <pre>
        {
          id: <em>string</em>,
          name: <em>string</em>,
        }
        </pre>
      </details>
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>Parameters | req body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/images <code>GET</code></td>
    <td>
      Query parameters:
      <ul><li><code>breedId</code>  <em>string required</em></li><li><code>limit</code>  <em>integer optional</em></li></ul>
    </td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, catInfo: [<b>CatBreedImageData</b>]}</code></li></ul> Error responses: <ul><li><code>400</code> <code>{ success: false, message: 'Parameter "breedId" is required for request!'}</code> if recieves no breedId parameter</li><li><code>500</code> <code>{ success: false, message: 'Something went wrong!'}</code> if otherwise fails</li></ul>
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
              imperial: <em>string</em>,
              metric: <em>string</em>,
            }
            id: <em>string</em>,
            name: <em>string</em>,
            cfa_url: <em>string</em>,
            vetstreet_url: <em>string</em>,
            vcahospitals_url: <em>string</em>,
            temperament: <em>string</em>,
            origin: <em>string</em>,
            country_codes: <em>string</em>,
            country_code: <em>string</em>,
            description: <em>string</em>,
            life_span: <em>string</em>,
            indoor: <em>number</em>,
            lap: <em>number</em>,
            alt_names: <em>string</em>,
            adaptability: <em>number</em>,
            affection_level: <em>number</em>,
            child_friendly: <em>number</em>,
            dog_friendly: <em>number</em>,
            energy_level: <em>number</em>,
            grooming: <em>number</em>,
            health_issues: <em>number</em>,
            intelligence: <em>number</em>,
            shedding_level: <em>number</em>,
            social_needs: <em>number</em>,
            stranger_friendly: <em>number</em>,
            vocalisation: <em>number</em>,
            experimental: <em>number</em>,
            hairless: <em>number</em>,
            natural: <em>number</em>,
            rare: <em>number</em>,
            rex: <em>number</em>,
            suppressed_tail: <em>number</em>,
            short_legs: <em>number</em>,
            wikipedia_url: <em>string</em>,
            hypoallergenic: <em>number</em>,
            reference_image_id: <em>string</em>,
          ],
          id: <em>string</em>,
          url: <em>string</em>,
          width: <em>number</em>,
          height: <em>number</em>
        }
        </pre>
      </details>
    </td>
  </tr>
</table>

<table>
  <tr>
    <th>URL & HTTP method</th>
    <th>Parameters | req body</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/api/cats/breeds/:breedId <code>GET</code></td>
    <td>none</td>
    <td>
      Success response: <ul><li><code>200</code> <code>{ success: true, catInfo: <b>CatBreedImageData</b>}</code></li></ul> Error response: <ul><li><code>500</code> <code>{ success: false, message: 'Something went wrong!'}</code></li></ul>
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
              imperial: <em>string</em>,
              metric: <em>string</em>,
            }
            id: <em>string</em>,
            name: <em>string</em>,
            cfa_url: <em>string</em>,
            vetstreet_url: <em>string</em>,
            vcahospitals_url: <em>string</em>,
            temperament: <em>string</em>,
            origin: <em>string</em>,
            country_codes: <em>string</em>,
            country_code: <em>string</em>,
            description: <em>string</em>,
            life_span: <em>string</em>,
            indoor: <em>number</em>,
            lap: <em>number</em>,
            alt_names: <em>string</em>,
            adaptability: <em>number</em>,
            affection_level: <em>number</em>,
            child_friendly: <em>number</em>,
            dog_friendly: <em>number</em>,
            energy_level: <em>number</em>,
            grooming: <em>number</em>,
            health_issues: <em>number</em>,
            intelligence: <em>number</em>,
            shedding_level: <em>number</em>,
            social_needs: <em>number</em>,
            stranger_friendly: <em>number</em>,
            vocalisation: <em>number</em>,
            experimental: <em>number</em>,
            hairless: <em>number</em>,
            natural: <em>number</em>,
            rare: <em>number</em>,
            rex: <em>number</em>,
            suppressed_tail: <em>number</em>,  
            short_legs: <em>number</em>,
            wikipedia_url: <em>string</em>,
            hypoallergenic: <em>number</em>,
            reference_image_id: <em>string</em>,
          ],
          id: <em>string</em>,
          url: <em>string</em>,
          width: <em>number</em>,
          height: <em>number</em>
        }
        </pre>
      </details>
    </td>
  </tr>
</table>
