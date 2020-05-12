
const DOMAIN = 'http://newsapi.org/v2/top-headlines?country=us&';
const API_KEY = '1bd549b086404134a14c4fa7d447f748';
const BASE_URL = `https://cors-anywhere.herokuapp.com/${DOMAIN}apikey=${API_KEY}&s=`;


let articleList = document.querySelector('#listArticles')

let input = document.querySelector(`#find`)
// console.log()
let form = document.querySelector(`form`)
console.log(form)
form.addEventListener('click', (e) => {
    e.preventDefault()

    // console.log("sfsgdfg")
    let inputValue = input.value;

    getSearch(inputValue);

});



async function getSearch(iValue) {
    // try {
    let response = await axios.get(BASE_URL + iValue)
    // console.log(newsData);
    let newsData = response.data.articles
    console.log(newsData)

    for (let i = 0; i < 4; i++) {
        // let newsTitle = newsData.data.articles[i].title 
        // let newsImage = newsData.data.articles[i].urlToImage
        // console.log(newsTitle, newsImage)

        renderList(newsData[i])
    }


    // } catch (error) {

    //     console.log(`This is not the news you are looking for. ${error}`)

    // }
}



function renderList(article) {
    // console.log(article)
    const title = document.createElement('p')
    title.innerText = article.title
    articleList.appendChild(title)
    console.log(articleList)

    const image = document.createElement('img')
    image.src = article.urlToImage
    articleList.appendChild(image)
    console.log()


}

function removeLastSearch() {
    let oldArticles =document.querySelectorAll('.listArticles')
    console.log(oldArticles)

    for(let i =0; i < oldArticles.length; i++) {

        oldArticles[i].remove()
    }
}