//Movies exercise
async function getBadMovies() {
    try {
      const moviesListing = await fetch(
        "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
      );
      const movies = await moviesListing.json();
      const badMovies = movies.filter((movie) => movie.rating < 5);
      const badMoviesSince2000 = badMovies.filter((movie) => movie.year > 2000);
      console.log(badMovies);
      console.log(badMoviesSince2000);
    } catch (error) {
      throw "Something went wrong";
    }
  }
  getBadMovies();

  //Promise that resolves after set time
  function makePromise(resolveAfter) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), resolveAfter * 3000);
	});
}
console.log("I am called asynchronously")

//Using async/await
async function asyncAwaitExample() {
	const promise = await makePromise(8);
	console.log("I am called asynchronously")
}