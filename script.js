

// Specify the API endpoint for user data
const API_KEY='1cc0fd3626ee6e8b0e3b7eb46774e66d';
const API=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
const IMAGE_URL=`https://image.tmdb.org/t/p/original/`


// Make a GET request using the Fetch API
fetch(`${API}&page=${1}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  