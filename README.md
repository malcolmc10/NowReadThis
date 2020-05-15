# Project Overview
  

# App Name: 
NowReadThis. 

# What does this app do: 
Some people are like me and go through 100's of articles a week. There comes a time when you need something new to read and do not know what to select. The "NowReadThis" application will allow the user to find new articles based off recent popular news and genre, listing seletions the user may find interesting. The applications relationship with the API allows the site to have access to a plethorea of articles allowing the user to have the opportunity to be introduced to works they were not familiar with in the past. 

#API: https://newsapi.org/docs

Sample Endpoint:  http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1bd549b086404134a14c4fa7d447f748



# WireFrames: 
Web: https://imgur.com/s9ATiGV


# MVP: 
1. It will include a drop down menu that will allow the user to select a news and an input for a user to search for something specifc.
2. Once the search is complete the search will show selections along with its Title and Author.
3. If the user is not satisfied with the selections, they will be able to refresh the search with it to show new selections. 


# Post MVP: 
1. Like to add at least 5 more endpoints to broaden the conetent types 
2. Adding media space for adds. This will allow monetization in the future
3.  Leave a review. I want the users to leave their thoughts on the selections they are selecting for other users to use. 
4.  I want to add a rating system This will allow the user to rate selections that appear. 
5. I would like to add more pages for original content. 
6. I would like to add video.
7. I would like to animation to the title. 


# Goals

|  Day | Deliverable | Status
|---|---| ---|
|May 11| Project Prompt,fetch API data, logo | Complete
|May 12| Build Core APP using HTML and CSS | Complete
|May 13| Apply Rendering and remove functions and refresh button | Complete
|May 14| Touch up and finalize css | Complete
|May 15| Presentation | Incomplete


# Priorty Matrix: 
https://imgur.com/yOGGQj5

# Time Frames:


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| logo | L | 1:30hrs| 1 hrs | 1 hrs |
| HTML | H | 3hrs| 30 mins | 30 mins |
| CSS | H | 3hrs| 5 hrs | 5 hrs |
| Inputs | H | 1hrs| 5 hrs |5 hrs |
| Drop Down | H | 1:30hrs| 5 hrs |5 hrs |
| API added | H | 5hrs| 5 hrs |5 hrs |
| Testing | H | 3hrs| 2 hrs |2 hrs |
| Total | H |18 hrs| 23:30 hrs |23:30 hrs |



# Changes
1. Originally I wanted to only show 4 articles at al time. I changed this because it limited the user options. They may be looking for something more specific and limiting them to 4 options can prevent them from using the tool.




# Snippet:

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
    articleList.appendChild(articleWrapper)}
