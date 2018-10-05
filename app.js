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
            jokes(myJSON)
        })
}

function jokes(myJSON) {

    let dataArray = myJSON.data.children
    console.log(dataArray)

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

