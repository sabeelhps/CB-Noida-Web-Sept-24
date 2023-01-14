const BASE_URL = "https://api.tvmaze.com/search";

async function fetchMovies(searchKeyword) {
    const url = `${BASE_URL}/shows?q=${searchKeyword}`;
    try {
        const res = await axios.get(url);
        if (res.status !== 200) {
            throw new Error('Failed to fetch movies');
        }
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

async function main() {
    const movies = await fetchMovies("friends");
    
    for (let movie of movies) {
        console.log(movie);
        if (movie.show.image) {
            const image = document.createElement('img');
            image.setAttribute('src', movie.show.image.medium);
            document.body.append(image);
        }
    }
}

main();



