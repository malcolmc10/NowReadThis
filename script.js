
const DOMAIN = 'http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com,cnn.com,bleacherreport.com,mashable.com,msnbc.com,wired.com,cbsnews.com,apnews.com?country=us&';
const API_KEY = '1bd549b086404134a14c4fa7d447f748';
const BASE_URL = `https://cors-anywhere.herokuapp.com/${DOMAIN}apikey=${API_KEY}&q=`;




let articleList = document.querySelector('#listArticles')
let choice1 = document.querySelector("#dropdown")
let choice1Value = ""
choice1.addEventListener('change', () => {
    choice1Value = choice1.value
    console.log(choice1.value)
})

let input = document.querySelector(`#find`)

let form = document.querySelector(`form`)

form.addEventListener('submit', (e) => {
    e.preventDefault()


    let inputValue = input.value;

    getSearch(inputValue, choice1Value);



});

// The code below represents the the searching and the connecting of the API to the website. 

async function getSearch(iValue, choice1Value) {



    const DOMAIN = `http://newsapi.org/v2/everything?domains=${choice1Value}&`;
    const API_KEY = '1bd549b086404134a14c4fa7d447f748';
    const BASE_URL = `https://cors-anywhere.herokuapp.com/${DOMAIN}apikey=${API_KEY}&q=`;

    console.log(BASE_URL + iValue)
    let response = await axios.get(BASE_URL + iValue)
    console.log(response);
    let newsData = response.data.articles

    removeLastSearch()

    for (let i = 0; i < newsData.length; i++) {

        renderList(newsData[i])
    }


}

// The code below represents each of the articles that appear on the page.

function renderList(article) {

    const articleWrapper = document.createElement('div')
    articleWrapper.classList.add('article-wrapper')

    const title = document.createElement('div')
    title.className = "linkUp"
    title.innerHTML = `<a href="${article.url}">${article.title}</a>`

    articleWrapper.appendChild(title)

    const image = document.createElement('img')
    image.src = article.urlToImage
    articleWrapper.appendChild(image)

    const name = document.createElement('p')
    name.innerText = article.author
    articleWrapper.appendChild(name)
    console.log(articleWrapper)
    articleList.appendChild(articleWrapper)

}

// Below is the remove function to have the older articles disappear.

function removeLastSearch() {
    let oldArticles = document.querySelector('#listArticles')
    oldArticles.innerHTML = ""


    for (let i = 0; i < oldArticles.length; i++) {



    }
}



