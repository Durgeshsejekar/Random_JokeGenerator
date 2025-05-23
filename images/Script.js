function getJoke() {
    const jokeElement = document.getElementById('joke');
    const url = 'https://v2.jokeapi.dev/joke/Any?type=single';  // JokeAPI URL

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.joke) {
                jokeElement.textContent = data.joke;  // Display the joke
            } else {
                jokeElement.textContent = 'Oops! Could not fetch a joke. Please try again later.';
            }
        })
        .catch(error => {
            jokeElement.textContent = 'An error occurred. Please try again later.';
            console.error(error);
        });
}
