
const DOMAIN = 'http://newsapi.org/v2/top-headlines?country=us&';
const API_KEY = '1bd549b086404134a14c4fa7d447f748';
const BASE_URL = `https://cors-anywhere.herokuapp.com/${DOMAIN}apikey=${API_KEY}&s=`;


let input = document.querySelector(`#find`)

let button = document.querySelector(`#search`)

button.addEventListener('click', (e) => {

    let inputValue = input.value

    getSearch(inputValue);

});

async function getSearch(iValue) {
    // try {
        let newsData = await axios.get(BASE_URL + iValue)
        console.log(newsData);

        for(let i = 0; i < 4; i++) {
            let newsTitle = newsData.data.articles[i].title 
            let newsImage = newsData.data.articles[i].urlToImage
            console.log(newsTitle, newsImage)
        }
        

    // } catch (error) {
        
    //     console.log(`This is not the news you are looking for. ${error}`)

    // }
}


// function renderList(article) {

//     article.forEach((newArticle) => {

//         const appendArticle = document.querySelector('.listArticle')

//         const img = document.createElement('img')

//         const title = document.createElement('p')

//         dataView.classList.add()
//     })

// }








