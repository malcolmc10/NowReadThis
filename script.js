// Set the API.

const getOption = async () => {

    const url = 'http://newsapi.org/v2/everything?q=Apple&from=2020-05-11sortBy=popularity&apiKey=1bd549b086404134a14c4fa7d447f748'


    //Set the try and catch.
    try {

        let response = await axios.get(url)
        // console.log(response.data)

        let newsList = Object.keys(response.data)

        let select = document.querySelector('select')

        newsList.forEach((news) => {

            let option = document.createElement('option')

            option.value = `${news}`

            option.text = `${news}`

            select.append(option)


        })

    } catch (error) {

        console.log(`This Is Not The News You Are Looking For. Please Search Again. ${error}`)

    }


}

// Set up the input.
getOption()


function optionValue(e) {

    e.preventDefault()

    let select = document.querySelector(genre)

    let value = select.value

    // console.log(value)

    // getNews(value)

}
//set up the Event Listener
// const form = document.querySelector('form')
// form.addEventListener('submit', optionValue)

// Place a value into the API endpoint and make a request.

// Images. Create the tags for the images,src,and then append.

//remove old pic.

//











