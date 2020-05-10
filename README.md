NowReadThis Project 1 Prompt
Colin Malcolm's Project 1 Prompt. 

App Name: NowReadThis

What does this app do: Some people are like me and go through a pile of books year. There comes a time when you need something new to read and do not know what to select. The "NowReadThis" application will allow the user to find new books based off a genre or input, listing 5 seletions the user may find interesting. The applications relationship with the GoodReads API allows the site to have access to a plethorea of titles and authors allowing the user to have the opportunity to be introduced to works they were not familiar with in the past. 

API: https://www.goodreads.com/search.xml?key=eh8YBM4Bo6WRx7JIp0cuOA&q=Ender%27s+Game
API 2: https://www.goodreads.com/search.xml?key=eh8YBM4Bo6WRx7JIp0cuOA&q=



WireFrames:
Mobile: https://imgur.com/dY0431g
Web: https://imgur.com/BQNBPHb


MVP: 
1. It will include a drop down menu that will allow the user to select a genre and an input for a user to search for something specifc Author.
2. Once the search is complete the search will show 5 selections along with its Title, Author, and small description.
3. If the user is not satisfied with the selections, they will be able to refresh the search with it showing 5 new selections. 


PVP: 
1. I would like to create a book bank. A place where a user can store selections while they are parusing the site. so they can grab the list before they leave the site. 
2. Adding an Amazon API that will allow me to add a Afiliate code. This will allow the usuer to buy the selections from the site and allow me to monetize the application.
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
<?xml version="1.0" encoding="UTF-8"?>
<GoodreadsResponse>
  <Request>
    <authentication>true</authentication>
      <key><![CDATA[eh8YBM4Bo6WRx7JIp0cuOA]]></key>
    <method><![CDATA[search_search]]></method>
  </Request>
  <search>
  <query><![CDATA[Adventure]]></query>
    <results-start>1</results-start>
    <results-end>20</results-end>
    <total-results>139278</total-results>
    <source>Goodreads</source>
    <query-time-seconds>0.12</query-time-seconds>
    <results>
        <work>
  <id type="integer">1835605</id>
  <books_count type="integer">5577</books_count>
  <ratings_count type="integer">1122904</ratings_count>
  <text_reviews_count type="integer">14998</text_reviews_count>
  <original_publication_year type="integer">1876</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>3.82</average_rating>
  <best_book type="Book">
    <id type="integer">2956</id>
    <title>The Adventures of Huckleberry Finn</title>
    <author>
      <id type="integer">1244</id>
      <name>Mark Twain</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956._SX50_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">41326609</id>
  <books_count type="integer">5758</books_count>
  <ratings_count type="integer">729697</ratings_count>
  <text_reviews_count type="integer">9482</text_reviews_count>
  <original_publication_year type="integer">1875</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>3.91</average_rating>
  <best_book type="Book">
    <id type="integer">24583</id>
    <title>The Adventures of Tom Sawyer</title>
    <author>
      <id type="integer">1244</id>
      <name>Mark Twain</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404811979l/24583._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404811979l/24583._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">4219</id>
  <books_count type="integer">102</books_count>
  <ratings_count type="integer">212140</ratings_count>
  <text_reviews_count type="integer">11328</text_reviews_count>
  <original_publication_year type="integer">2000</original_publication_year>
  <original_publication_month type="integer">5</original_publication_month>
  <original_publication_day type="integer">22</original_publication_day>
  <average_rating>4.08</average_rating>
  <best_book type="Book">
    <id type="integer">33313</id>
    <title>Kitchen Confidential: Adventures in the Culinary Underbelly</title>
    <author>
      <id type="integer">1124</id>
      <name>Anthony Bourdain</name>
    </author>
    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">1222101</id>
  <books_count type="integer">1035</books_count>
  <ratings_count type="integer">231325</ratings_count>
  <text_reviews_count type="integer">6402</text_reviews_count>
  <original_publication_year type="integer">1892</original_publication_year>
  <original_publication_month type="integer">10</original_publication_month>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.31</average_rating>
  <best_book type="Book">
    <id type="integer">3590</id>
    <title>The Adventures of Sherlock Holmes</title>
    <author>
      <id type="integer">2448</id>
      <name>Arthur Conan Doyle</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1164045516l/3590._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1164045516l/3590._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">2693329</id>
  <books_count type="integer">14</books_count>
  <ratings_count type="integer">179905</ratings_count>
  <text_reviews_count type="integer">10722</text_reviews_count>
  <original_publication_year type="integer">2000</original_publication_year>
  <original_publication_month type="integer">9</original_publication_month>
  <original_publication_day type="integer">19</original_publication_day>
  <average_rating>4.18</average_rating>
  <best_book type="Book">
    <id type="integer">3985</id>
    <title>The Amazing Adventures of Kavalier &amp; Clay</title>
    <author>
      <id type="integer">2715</id>
      <name>Michael Chabon</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503806495l/3985._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503806495l/3985._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">321174</id>
  <books_count type="integer">117</books_count>
  <ratings_count type="integer">146339</ratings_count>
  <text_reviews_count type="integer">5400</text_reviews_count>
  <original_publication_year type="integer">1985</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.28</average_rating>
  <best_book type="Book">
    <id type="integer">5544</id>
    <title>Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character</title>
    <author>
      <id type="integer">1429989</id>
      <name>Richard P. Feynman</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348445281l/5544._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348445281l/5544._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">55548884</id>
  <books_count type="integer">8404</books_count>
  <ratings_count type="integer">218798</ratings_count>
  <text_reviews_count type="integer">9239</text_reviews_count>
  <original_publication_year type="integer">1865</original_publication_year>
  <original_publication_month type="integer">11</original_publication_month>
  <original_publication_day type="integer">26</original_publication_day>
  <average_rating>4.02</average_rating>
  <best_book type="Book">
    <id type="integer">6324090</id>
    <title>Alice's Adventures in Wonderland (Alice's Adventures in Wonderland, #1)</title>
    <author>
      <id type="integer">8164</id>
      <name>Lewis Carroll</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391204048l/6324090._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391204048l/6324090._SX50_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">6708278</id>
  <books_count type="integer">69</books_count>
  <ratings_count type="integer">86365</ratings_count>
  <text_reviews_count type="integer">4568</text_reviews_count>
  <original_publication_year type="integer">2009</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>3.85</average_rating>
  <best_book type="Book">
    <id type="integer">6516450</id>
    <title>What the Dog Saw and Other Adventures</title>
    <author>
      <id type="integer">1439</id>
      <name>Malcolm Gladwell</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344263875l/6516450._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344263875l/6516450._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">1936544</id>
  <books_count type="integer">65</books_count>
  <ratings_count type="integer">110657</ratings_count>
  <text_reviews_count type="integer">4810</text_reviews_count>
  <original_publication_year type="integer">1983</original_publication_year>
  <original_publication_month type="integer">9</original_publication_month>
  <original_publication_day type="integer">1</original_publication_day>
  <average_rating>4.26</average_rating>
  <best_book type="Book">
    <id type="integer">13831</id>
    <title>Alanna: The First Adventure (Song of the Lioness, #1)</title>
    <author>
      <id type="integer">8596</id>
      <name>Tamora Pierce</name>
    </author>
    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">1041162</id>
  <books_count type="integer">54</books_count>
  <ratings_count type="integer">77890</ratings_count>
  <text_reviews_count type="integer">5097</text_reviews_count>
  <original_publication_year type="integer">1992</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.00</average_rating>
  <best_book type="Book">
    <id type="integer">227265</id>
    <title>Ishmael: An Adventure of the Mind and Spirit (Ishmael, #1)</title>
    <author>
      <id type="integer">10330</id>
      <name>Daniel Quinn</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388180479l/227265._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388180479l/227265._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">2766104</id>
  <books_count type="integer">12</books_count>
  <ratings_count type="integer">80050</ratings_count>
  <text_reviews_count type="integer">920</text_reviews_count>
  <original_publication_year type="integer">1891</original_publication_year>
  <original_publication_month type="integer">6</original_publication_month>
  <original_publication_day type="integer">25</original_publication_day>
  <average_rating>4.20</average_rating>
  <best_book type="Book">
    <id type="integer">1848444</id>
    <title>A Scandal in Bohemia (The Adventures of Sherlock Holmes, #1)</title>
    <author>
      <id type="integer">17932981</id>
      <name>Ronald  Holt</name>
    </author>
    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">30365</id>
  <books_count type="integer">108</books_count>
  <ratings_count type="integer">55396</ratings_count>
  <text_reviews_count type="integer">2231</text_reviews_count>
  <original_publication_year type="integer">1977</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.15</average_rating>
  <best_book type="Book">
    <id type="integer">29946</id>
    <title>Illusions: The Adventures of a Reluctant Messiah</title>
    <author>
      <id type="integer">16904</id>
      <name>Richard Bach</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353964306l/29946._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353964306l/29946._SY75_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">1411202</id>
  <books_count type="integer">964</books_count>
  <ratings_count type="integer">58607</ratings_count>
  <text_reviews_count type="integer">970</text_reviews_count>
  <original_publication_year type="integer">1883</original_publication_year>
  <original_publication_month type="integer" nil="true"/>
  <original_publication_day type="integer" nil="true"/>
  <average_rating>4.06</average_rating>
  <best_book type="Book">
    <id type="integer">93007</id>
    <title>The Merry Adventures of Robin Hood</title>
    <author>
      <id type="integer">53350</id>
      <name>Howard Pyle</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389006722l/93007._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389006722l/93007._SX50_.jpg</small_image_url>
  </best_book>
</work>

        <work>
  <id type="integer">4238490</id>
  <books_count type="integer">43</books_count>
  <ratings_count type="integer">17547</ratings_count>
  <text_reviews_count type="integer">623</text_reviews_count>
  <original_publication_year type="integer">1969</original_publication_year>
  <original_publication_month type="integer">8</original_publication_month>
  <original_publication_day type="integer">14</original_publication_day>
  <average_rating>3.82</average_rating>
  <best_book type="Book">
    <id type="integer">4191136</id>
    <title>Business Adventures</title>
    <author>
      <id type="integer">250754</id>
      <name>John Brooks</name>
    </author>
    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405094011l/4191136._SX98_.jpg</image_url>
    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405094011l/4191136._SY75_.jpg</small_image_url>
  </best_book>
</work>

        

    </results>
</search>

</GoodreadsResponse>



