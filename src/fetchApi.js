const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9b2173be03msh2c3c609ea6a9908p135302jsndc427fe44fce',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

/**To avoid code repetition, the "fetchData" function was created.
 *which receives the url as a parameter just like a normal fetch, but adding the options requested by the API */

export default async function fetchData(url) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error(error);
    throw error;
  }
}