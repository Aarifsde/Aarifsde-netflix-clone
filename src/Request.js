const key ='294f036ea3ca1aa4e66d1e63b1409684'

const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=4`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestHorror:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
}

//https://image.tmdb.org/t/p

export default requests