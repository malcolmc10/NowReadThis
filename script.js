
const DOMAIN = 'http://newsapi.org/v2/everything?domains=wsj.com,nytimes.com?country=us&';
const API_KEY = '1bd549b086404134a14c4fa7d447f748';
const BASE_URL = `https://cors-anywhere.herokuapp.com/${DOMAIN}apikey=${API_KEY}&q=`;




let articleList = document.querySelector('#listArticles')

let input = document.querySelector(`#find`)
// console.log()
let form = document.querySelector(`form`)
// console.log(form)
form.addEventListener('submit', (e) => {
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
    // console.log(newsData)
    removeLastSearch()

    for (let i = 0; i < newsData.length; i++) {
        // let newsTitle = newsData.data.articles[i].title 
        // let newsImage = newsData.data.articles[i].urlToImage
        // console.log(newsTitle, newsImage)
        // removeLastSearch()
        renderList(newsData[i])
    }


    // } catch (error) {

    //     console.log(`This is not the news you are looking for. ${error}`)


    

        // let response = await axios.get(url)
        // // console.log(response.data)

        // let newsList = Object.keys(response.data)

        // let select = document.querySelector('select')

        // newsList.forEach((news) => {

        //     let option = document.createElement('option')

        //     option.value = `${author}`

        //     option.text = `${author}`

        //     select.append(option)


        // })


}


function renderList(article) {


    // console.log(article)

    const title = document.createElement('div')
    title.innerHTML = '<a href="${article.url}">${article.title}</a>'
    // title.innerHTML = '<a href="${url}">${title}</a>'
    articleList.appendChild(title)
    // console.log(articleList)


    const image = document.createElement('img')
    image.src = article.urlToImage
    articleList.appendChild(image)
    // console.log()


    articleList.append(title)

    const name = document.createElement('p')
    name.innerText = article.author
    articleList.appendChild(name)

    // const connect = document.createElement('link')
    // name.innerText = article.url
    // articleList.appendChild(connect)




}

function removeLastSearch() {
    let oldArticles = document.querySelector('#listArticles')
    oldArticles.innerHTML = ""
    console.log('dfgdfgdfgh')

    // console.log(oldArticles)

    for (let i = 0; i < oldArticles.length; i++) {

        // while (oldArticles.lastChild) {
        //     oldArticles.removeChild(oldArticles.lastChild)
        // }


        // oldArticles[i].remove()
        // }

    }
}



// articleList.forEach(article => {
//     const title = document.createElement('div')
//     DataView.className = 'stuff'
//     title.innerHTML = '<a href="${article.url}">${article.title}</a>'
//     document.getElementsByClassName('stuff-section')[0].appendChild(div)
//     // articleList.appendChild(title)
//     // console.log(articleList)


//     const image = document.createElement('img')
//     image.src = article.urlToImage
//     articleList.appendChild(image)
//     // console.log()


//     articleList.append(title)

//     const name = document.createElement('p')
//     name.innerText = article.author
//     articleList.appendChild(name)

//     // const connect = document.createElement('link')
//     // name.innerText = article.url
//     // articleList.appendChild(connect)

// } )