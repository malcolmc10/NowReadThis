const getOption = async () => {

    const url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=1bd549b086404134a14c4fa7d447f748"




try {
    
    let response = await axios.get(url)
    // console.log(response.data)

    let newsList = Object.keys(response.data)

    let select = document.querySelector('select')

    newsList.forEach( (news) => {

        let option = document.createElement('option')

        option.value = `${news}`

        option.text = `${news}`

        select.append(option)


    })

} catch (error) {
    
    console.log(`This Is Not The News You Are Looking For. Please Search Again. ${error}`)

}


}

getOption()


function optionValue(e) {

    e.preventDefault()

    let select = document.querySelector(genre)

    let value = select.value

    console.log(value)

}













