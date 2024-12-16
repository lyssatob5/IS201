// Dad Joke Game Code (wrapped in an IIFE)
(function() {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "What do you call a lazy kangaroo? Pouch potato!",
      "Why can't Monday lift Saturday? It's a weak day!",
      "What did the fish say when it hit the wall? Dam!",
      "Why did the bicycle fall over? Because it was two tired!",
      "How do you get out of an elephant? Run around until you get pooped!",
      "What do you call a fake noodel? An Impasta!",
      "Do do you make a tissue dance? Put a little boogie in it!",
      "What is a funny mountain called? Hill-arious",
      "What do you call a song about a tortilla? A wrap",
      "The child refused to nap. She was found guilty of resisting a rest", 
    ];
  
    const jokeDisplay = document.getElementById('jokeDisplay'); //Make sure you have a <div id="jokeDisplay"></div> in your HTML
    const getJokeButton = document.getElementById('getJoke');   //Make sure you have a <button id="getJoke">Get a Joke</button> in your HTML
  
    if (jokeDisplay && getJokeButton) {
      getJokeButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        jokeDisplay.textContent = jokes[randomIndex];
      });
    } else {
      console.error("jokeDisplay or getJokeButton element not found.");
    }
  })();