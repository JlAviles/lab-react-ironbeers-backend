Install the project via `npm install`

Dump the JSON DB into your local mongo using the command `mongoimport --db lab-react-ironbeers-backend --collection beers --jsonArray beers.json` You can find the beers.json in the project's root folder.

Run the project via `npm run dev`.

The project will run on `port 5000`

### Endpoints

|  Method | Endpoint  |  Response | Action  |
|---|---|---|---|
|GET   | /all  | Beers[]  |  	Get all the beers from the DB |
|GET   | /single/id  | {Beer}  | Get the a single/specific beer  |
|GET   |  /random | {Beer}  | Search with a RegEx using the query specified and return the first 10 results  |
|GET   | /search?q=(query)  | Beers[10]   | Search with a RegEx   |
|POST   | /new  | {Beer}   | Create a new beer (the fields are specified in the instructions)  |