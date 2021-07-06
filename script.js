const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const dadJokeBtn = document.getElementById('dadJokeBtn')

generateDadJoke();

function generateDadJoke(){
    const config ={
        headers: {
            Accept:'application/json',
        }, 
    }

    fetch('https://icanhazdadjoke.com', config)
    .then((response) => response.json())
    .then((data) => jokeEl.innerHTML = data.joke);
    

    
}
//add jokes from other APIs?
/* function generateJoke(){
    const config ={
        headers:{
            Accept:'application/json',
        },
    }
    fetch('https://api.jokes.one/joke/random', config)
    .then((response) => response.json())
    .then((data) => console.log(data));

}
generateJoke(); */




dadjokeBtn.addEventListener('click',() =>{
    generateDadJoke()
})