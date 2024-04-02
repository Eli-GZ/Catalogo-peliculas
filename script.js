document.getElementById('searchButton').addEventListener('click', buscarMovies)
let api_key = 'fbd9d085bd91a5b1e29b16b0cb32d864';
let urlBase = 'https://api.themoviedb.org/3/search/movie'

  function buscarMovies() {
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response=>response.json())
    .then(response=>console.log(response))
  }