NowReadThis Project 1 Prompt
Colin Malcolm's Project 1 Prompt. 

App Name: NowReadThis

What does this app do: Some people are like me and go through 100's of articles a week. There comes a time when you need something new to read and do not know what to select. The "NowReadThis" application will allow the user to find new articles based off recent popular news and genre, listing 5 seletions the user may find interesting. The applications relationship with the API allows the site to have access to a plethorea of articles allowing the user to have the opportunity to be introduced to works they were not familiar with in the past. 

API: http://newsapi.org/v2/top-headlines?country=us&apiKey=1bd549b086404134a14c4fa7d447f748
API 2: http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1bd549b086404134a14c4fa7d447f748
API 3: http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1bd549b086404134a14c4fa7d447f748



WireFrames:
Mobile: https://imgur.com/dY0431g
Web: https://imgur.com/BQNBPHb


MVP: 
1. It will include a drop down menu that will allow the user to select a genre and an input for a user to search for something specifc.
2. Once the search is complete the search will show 5 selections along with its Title, Author, and small description.
3. If the user is not satisfied with the selections, they will be able to refresh the search with it showing 5 new selections. 


PVP: 
1. Like to add at least 5 more API's to broaden the conetent types 
2. Adding media space for adds. This will allow monetization in the future
3.  Leave a review. I want the users to leave their thoughts on the selections they are selecting for other users to use. 
4.  I want to add a rating system This will allow the user to rate selections that appear. 

Goals:
Monday 5/11:Pseudocode, Build the Core App structure, (HTML and CSS), create logo.
Tuesday 5/12: Code fetching from API and add it to the site. 
Wednesday 5/13: Apply rendering and remove functions for refresh button.
Thursday: 5/14: Touch up look of sight and finalize functionality. 
Friday: Present and Pray.

Priorty Matrix: https://imgur.com/yOGGQj5

Time Frames:

Pseudocode: 2 hour
logo: 1 hour 30 mins
HTML: 3 hour
CSS: 3 hours
Input: 1 hour
Drop down menu: 1 hour 30 mins
API added and randomization: 5 hours
Adding rendering and remove functions 3 hours.
Testing, Adding CSS features: 3 hours
Total of 21:30 hours

API Snippet:
 "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Tarrant County confirms nearly 500 new coronavirus cases, most from Fort Worth prison - Fort Worth Star-Telegram",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vd3d3LnN0YXItdGVsZWdyYW0uY29tL25ld3MvY29yb25hdmlydXMvYXJ0aWNsZTI0MjYzNTI4Ni5odG1s0gFEaHR0cHM6Ly9hbXAuc3Rhci10ZWxlZ3JhbS5jb20vbmV3cy9jb3JvbmF2aXJ1cy9hcnRpY2xlMjQyNjM1Mjg2Lmh0bWw?oc=5",
            "urlToImage": null,
            "publishedAt": "2020-05-10T22:17:08Z",
            "content": null
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "T.C. Sottek",
            "title": "Trump and Intel are reportedly pushing for new chip factories in the US - The Verge",
            "description": "The US government and major chip manufacturers are reportedly in talks to build processor foundries in the US, but it’s not so simple.",
            "url": "https://www.theverge.com/2020/5/10/21253922/trump-intel-tsmc-us-processor-factories",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/yUy60r7v6jJpg3hF3BFKZ6V1-0g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10082205/VGS01017.0.jpg",
            "publishedAt": "2020-05-10T21:57:59Z",
            "content": "Intel says its very serious\r\nIntel Core i7-6950X\r\nPhoto by Vlad Savov / The Verge\r\nThe Trump administration is reportedly in talks with major processor manufacturers to build factories in the US, according to a report from The Wall Street Journal. While the J… [+1713 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dailymail.co.uk"
            },
            "author": "By Sophie Tanno For Mailonline Afp",
            "title": "Flash mobs break out in Hong Kong as anti-government protests resume - Daily Mail",
            "description": "Riot police chased protesters through Hong Kong's shopping malls and streets on Sunday as democracy activists launched Mother's Day flash mob rallies",
            "url": "https://www.dailymail.co.uk/news/article-8305601/Flash-mobs-break-Hong-Kong-anti-government-protests-resume.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2020/05/10/21/28233802-0-image-a-38_1589142192433.jpg",
            "publishedAt": "2020-05-10T21:54:00Z",
            "content": "Anti-government protests have resumed in Hong Kong as restrictions in the city began to ease, following a period of enforced calm due to the coronavirus pandemic.  \r\nRiot police chased protesters through Hong Kong's shopping malls and streets on Sunday as dem… [+4949 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "[{\"@type\":\"Person\",\"name\":\"Natasha Jokic\",\"url\":\"https://www.buzzfeed.com/natashajokic1\",\"jobTitle\":\"BuzzFeed Staff\"}]",
            "title": "Khloé Kardashian TP'd Her Sister's House During A Toilet Paper Shortage And People Aren't Happy - BuzzFeed",
            "description": "Read the room, people.",
            "url": "https://www.buzzfeed.com/natashajokic1/kardashian-house-tp-reacts",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/10/19/enhanced/d57fa8c28b9d/original-8047-1589140413-4.jpg?crop=1246:653;0,12%26downsize=1250:*",
            "publishedAt": "2020-05-10T21:50:15Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Theguardian.comworld"
            },
            "author": "Guardian staff reporter",
            "title": "Trump coronavirus vaccine goal 'amazingly ambitious', Senate Republican says - The Guardian",
            "description": "Vaccine success would underpin reopening of economy, while White House does not want immediate stimulus bill",
            "url": "https://amp.theguardian.comworld/2020/may/10/trump-coronavirus-vaccine-senate-republicans",
            "urlToImage": "https://i.guim.co.uk/img/media/f029e909dac4edd927562e8faa21b239bc791753/0_393_5901_3541/master/5901.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7db02ed65a9db9b3326e347c2bd631b7",
            "publishedAt": "2020-05-10T21:43:53Z",
            "content": "White House predictions about how the US economy might rebound from the coronavirus crisis and how quickly a vaccine might be rolled out came under question on Sunday.\r\nThe US will need more tests before schools can reopen later in the year, said Lamar Alexan… [+3864 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "",
            "title": "Microsoft now protects Office 365 users against 'reply all' email storms - Engadget",
            "description": "Microsoft now offer protection against 'reply all' email storms to Office 365 users around the world.",
            "url": "https://www.engadget.com/microsoft-office-365-193941389.html",
            "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-05%2Fd3785c90-92e8-11ea-bfaa-3649fd1cd417&client=amp-blogside-v2&signature=d672850630ccf8532e198c4a399b5ef10d649f15",
            "publishedAt": "2020-05-10T21:28:10Z",
            "content": "Microsoft might just save you the next time a less-than-attentive coworker starts a “reply all” email storm. It’s now rolling out (via ZDNet) an Exchange feature that protects Office 365 users worldwide against those barrages of unwanted messages. It’ll initi… [+409 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mmafighting.com"
            },
            "author": "Damon Martin",
            "title": "Khabib Nurmagomedov sends Tony Ferguson message of support following loss at UFC 249 - MMA Fighting",
            "description": "Khabib Nurmagomedov put his rivalry with Tony Ferguson behind him to send the former interim champion a message of support following a heartbreaking loss at UFC 249.",
            "url": "https://www.mmafighting.com/2020/5/10/21253927/khabib-nurmagomedov-sends-tony-ferguson-message-of-support-following-loss-at-ufc-249",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/jJ_EIG4FTvSuQHeGepXpRbdHvuQ=/0x0:2880x1508/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19174725/141_Khabib_Nurmagomedov.jpg",
            "publishedAt": "2020-05-10T21:13:37Z",
            "content": "Khabib Nurmagomedov engaged in a heated rivalry with Tony Ferguson for several years. But in the aftermath of UFC 249, the reigning lightweight champion put personal feelings aside when addressing Fergusons heartbreaking loss to Justin Gaethje.\r\nOriginally, U… [+1789 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Huffpost.com"
            },
            "author": "Nina Golgowski",
            "title": "Coronavirus Cluster Linked To California Birthday Party: Officials - HuffPost",
            "description": "A person coughing and not wearing a face covering at the Pasadena party is believed to have infected multiple people, health officials said.",
            "url": "https://www.huffpost.com/entry/pasadena-coronavirus-cluster-birthday-party_n_5eb850f5c5b6bb4495e4528e",
            "urlToImage": "https://img.huffingtonpost.com/asset/5eb868eb220000d112828757.jpeg?cache=d6wsmjx7ph&ops=1778_1000",
            "publishedAt": "2020-05-10T21:02:00Z",
            "content": "A large birthday party held in California amid the states stay-at-home order has led to several people testing positive for the new coronavirus, health officials said Saturday.\r\nA person who was not wearing a face covering at the Pasadena event had been cough… [+1608 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Derek Hawkins, Katie Mettler, Meryl Kornfield, Siobhán O'Grady, Hannah Knowles, Steven Goff, Kareem Copeland",
            "title": "Live updates: Mnuchin says unemployment will get worse before it gets better amid coronavirus pandemic - The Washington Post",
            "description": "With unemployment at record levels, pressure is high to reopen the country, even as the easing of restriction has resulted in new infection clusters in the U.S. and abroad.",
            "url": "https://www.washingtonpost.com/nation/2020/05/10/coronavirus-update-us/",
            "urlToImage": "https://www.washingtonpost.com/resizer/nYZ---0ufxKOzqDUrbR6xsa9LFk=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/X6XMOMESYAI6VB5DELJSII2WGY.jpg",
            "publishedAt": "2020-05-10T20:32:51Z",
            "content": "As several states lifted quarantine measures this weekend, allowing businesses and public spaces to reopen, Tom Inglesby, director of the Center for Health Security at Johns Hopkins University, warned that even a partial reopening of the country could pose li… [+1818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cbssports.com"
            },
            "author": "",
            "title": "NFL 2020 schedule: Ranking the top five quarterback matchups, including Tom Brady vs. Drew Brees - CBS Sports",
            "description": "There are going to be plenty of big-time QB duels in 2020; here are five you won't want to miss",
            "url": "https://www.cbssports.com/nfl/news/nfl-2020-schedule-ranking-the-top-five-quarterback-matchups-including-tom-brady-vs-drew-brees/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2020/05/10/48b59392-a2b6-4899-ad9f-df022259f78b/thumbnail/1200x675/b86684f07f8f8b3399f1276efc2c79b1/bradybrees.jpg",
            "publishedAt": "2020-05-10T20:26:56Z",
            "content": "The 2020 NFL season is one of the most anticipated ones in recent memory. Thanks to Tom Brady heading to the Tampa Bay Buccaneers after 20 seasons with the New England Patriots, there are plenty of storylines and new rivalries to be formed featuring Brady -- … [+6808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nytimes.com"
            },
            "author": "Reid J. Epstein",
            "title": "Democrats’ Vote-By-Mail Effort Won in Wisconsin: Will It Work Elsewhere? - The New York Times",
            "description": "After winning by a surprising margin in a key Wisconsin judicial race, Democrats are hoping they can replicate the same game plan.",
            "url": "https://www.nytimes.com/2020/05/10/us/politics/Wisconsin-election-vote-by-mail-.html",
            "urlToImage": "https://static01.nyt.com/images/2020/04/13/us/politics/10wisconsin-export/13wisconsin-results2-facebookJumbo.jpg",
            "publishedAt": "2020-05-10T20:21:10Z",
            "content": "It was a shocking margin of victory in what was expected to be a close race: an 11-point blowout by a liberal judge over a conservative incumbent for a seat on the Wisconsin Supreme Court.\r\nNow Wisconsin Democrats are working to export their template for succ… [+9415 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Macrumors.com"
            },
            "author": "Hartley Charlton",
            "title": "iPhone 12 Pro Rumored to Feature 120Hz ProMotion Display, 3x Camera Zoom, and Improved Face ID - MacRumors",
            "description": "iPhone 12 Pro may contain a 120Hz ProMotion Display, a 3x rear camera zoom, and improved Face ID, according to unreliable leaker Max Weinbach, who...",
            "url": "https://www.macrumors.com/2020/05/10/iphone-12-120hz-promotion-3x-camera-face-id/",
            "urlToImage": "https://images.macrumors.com/article-new/2020/05/maxresdefault.jpg",
            "publishedAt": "2020-05-10T20:20:40Z",
            "content": "iPhone 12 Pro may contain a 120Hz ProMotion Display, a 3x rear camera zoom, and improved Face ID, according to unreliable leaker Max Weinbach, who shared his information with YouTube channel EverythingApplePro.\r\nWeinbach suggests that iPhone 12 Pro, rumored t… [+1822 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aseaofblue.com"
            },
            "author": "NathanBeighle",
            "title": "Zion Williamson served request to admit he got illegal benefits to attend Duke - A Sea Of Blue",
            "description": "This is something to follow.",
            "url": "https://www.aseaofblue.com/2020/5/10/21253861/zion-williamson-caa-prime-sports-duke-blue-devils-basketball-news",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/tzAyVgnIXyPSnvu84KATmGRc060=/0x0:4101x2147/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19956973/usa_today_12451092.jpg",
            "publishedAt": "2020-05-10T19:50:42Z",
            "content": "Zion Williamson was college basketballs hottest name a season ago. His recruitment changed the basketball landscape, and now the attorney in his private lawsuit is looking for answers, and hes not taking any way around it.\r\nThe questions that Williamson will … [+1276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aol.com"
            },
            "author": "Kelsey Driscoll",
            "title": "Why the unemployment rate could be 5 percentage points higher - AOL",
            "description": "The U.S. economy lost a never-before-seen 20.5 million payrolls in April, bringing the unemployment rate to 14.7% — but those numbers may actually be worse.",
            "url": "https://www.aol.com/article/finance/2020/05/10/why-the-unemployment-rate-could-be-5-percentage-points-higher/24262122/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/6178x4050+0+0/resize/1028x675!/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-05%2Fd0e73e80-92f5-11ea-9eaa-fa3b35a49972",
            "publishedAt": "2020-05-10T19:43:02Z",
            "content": "The U.S. economy lost a never-before-seen 20.5 million payrolls in April, bringing the unemployment rate to 14.7%. \r\nBut the Bureau of Labor Statistics says the unemployment rate is likely higher than the official numbers it released because of how the househ… [+2616 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Terrence McCoy",
            "title": "While other countries look to open up, Brazil can’t find a way to shut down - The Washington Post",
            "description": "President Jair Bolsonaro has deferred to state governors, who have punted the responsibility of implementing the strictest measures to municipalities.",
            "url": "https://www.washingtonpost.com/world/while-other-countries-look-to-open-up-brazil-cant-find-a-way-to-shut-down/2020/05/10/2c02abea-92c1-11ea-87a3-22d324235636_story.html",
            "urlToImage": "https://www.washingtonpost.com/resizer/TzG5h63B3zxqb14zeyf1OAyWQXA=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OLH27TES54I6VAVUZDNRMH7W4U.jpg",
            "publishedAt": "2020-05-10T19:28:36Z",
            "content": "In hard-hit urban centers such as Rio de Janeiro, people still pack the streets. The boardwalks are still populated by beachgoers, including the elderly. Brazilian President Jair Bolsonaro is still downplaying the threat, declaring last week he would celebrat… [+4307 chars]"
        },
        {



