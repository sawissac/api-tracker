import { save, deep, read } from "./core.js";

/**
 * The function fetchStarWar asynchronously fetches data about a Star Wars character based on the
 * provided ID.
 * @param id - The `id` parameter in the `fetchStarWar` function represents the unique identifier of a
 * Star Wars character. This function fetches information about a specific Star Wars character from the
 * Star Wars API (swapi.dev) based on the provided `id`.
 * @returns The `fetchStarWar` function is returning a Promise that resolves to the JSON data of a Star
 * Wars character with the specified `id`.
 */
async function fetchStarWar(id) {
  const res = await fetch("https://swapi.dev/api/people/" + id);
  return res.json();
}

/* The line `const DIR = "./api-startwar";` is declaring a constant variable `DIR` and assigning it the
value `./api-startwar`. This variable is used to store the directory path where the data related to
Star Wars characters will be saved or read from. In this case, it seems like the data fetched from
the Star Wars API will be saved in a directory named `api-startwar`. */
const DIR = "./api-startwar";

/**
 * The function `init` fetches Star Wars data for two different indices, saves the data, and then
 * compares the saved files automatically or manually.
 */
async function init() {
  await fetchStarWar(1).then((res) => {
    save(deep(res), DIR);
  });
  await fetchStarWar(2).then((res) => {
    save(deep(res), DIR);
  });
}

// automatically compare file from latest index and latest index - 1
init()
  .then(() => read(DIR))
  .catch(console.log);

// can compare file manually 
init()
  .then(() => read(DIR, 1, 2))
  .catch(console.log);
