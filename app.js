var jokeList = document.getElementById('jokeList')
var regJokes = document.getElementById('jokes')
var oneLiners = document.getElementById('oneLiners')
var cleanJokes = document.getElementById('cleanJokes')
let jokesUrl = 'https://www.reddit.com/r/jokes/hot/.json'
let oneLinersUrl = 'https://www.reddit.com/r/oneliners/hot.json'
let cleanJokesUrl = 'https://www.reddit.com/r/cleanjokes/hot.json'

let jokeTitle = document.createElement('h3')
let jokeDescrip = document.createElement('p')

regJokes.addEventListener('click', regularJokes)
oneLiners.addEventListener('click', oneLinerJokes)
cleanJokes.addEventListener('click', clean)

function regularJokes(event) {

    fetch(jokesUrl)
        .then(response => response.json())
        .then(myJSON => {
            console.log(myJSON)
            jokes(myJSON)
        })
}

// function jokes(myJSON) {

    // let array = []
    // let dataArray = myJSON.data.children
    // array.push(dataArray)
    // console.log(array)
    // let shuffled = []
    // while (array[0].length > 0) {
    //     console.log(array[0].length)
    // }
    // let random = dataArray[Math.floor(Math.random() * dataArray.length)]

    // if (random.data.selftext.length < 100) {
    
    //     jokeTitle.textContent = random.data.title
    //     jokeDescrip.textContent = random.data.selftext
    //     jokeList.appendChild(jokeTitle)
    //     jokeList.appendChild(jokeDescrip)
    // }
// }

// function randomNumbers() {
//     var numbers = [];
//     for (var i = 1; i <= 25; i++) {
//         numbers.push(i);
//     }

//     var shuffled = [];
//     while (numbers.length > 0) {
//         // Remove a random number from the array.
//         // splice() returns a one-element array.
//         console.log(numbers.length);
//         var pick = numbers.splice(Math.floor(Math.random() * numbers.length), 1);

//         // Add it to the shuffled array.
//         shuffled.push(pick[0]);
//     }

//     return shuffled;
// }

function jokes(myJSON) {

    let dataArray = myJSON.data.children
    let random = dataArray[Math.floor(Math.random() * dataArray.length)]

    if (random.data.selftext.length < 100) {
    
        jokeTitle.textContent = random.data.title
        jokeDescrip.textContent = random.data.selftext
        jokeList.appendChild(jokeTitle)
        jokeList.appendChild(jokeDescrip)
    }
}

function oneLinerJokes(event) {

    fetch(oneLinersUrl)
        .then(response => response.json())
        .then(myJSON => {
            console.log(myJSON)
            appendOneLiners(myJSON)
        })
}

function appendOneLiners(myJSON) {

    let dataArray = myJSON.data.children
    let random = dataArray[Math.floor(Math.random() * dataArray.length)]
    if (random.data.selftext.length === 0) {
        jokeTitle.textContent = random.data.title
        jokeDescrip.textContent = random.data.selftext
        jokeList.appendChild(jokeTitle)
        jokeList.appendChild(jokeDescrip)
    }
}

function clean(event) {

    fetch(cleanJokesUrl)
        .then(response => response.json())
        .then(myJSON => {
            console.log(myJSON)
            appendCleanJokes(myJSON)
        })
}

function appendCleanJokes(myJSON) {

    let dataArray = myJSON.data.children
    let random = dataArray[Math.floor(Math.random() * dataArray.length)]

    if (random.data.selftext.length < 100) {
        jokeTitle.textContent = random.data.title
        jokeDescrip.textContent = random.data.selftext
        jokeList.appendChild(jokeTitle)
        jokeList.appendChild(jokeDescrip)
    }

}

