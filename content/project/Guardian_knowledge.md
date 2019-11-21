+++
# Date this page was created.
date = "2019-11-21"

# Project title.
title = "Guardian: The Knowledge"

# Project summary to display on homepage.
summary = "In my free time I enjoy answering football trivia from The Guardian's [The Knowledge](https://www.theguardian.com/football/series/theknowledge) blog programmatically"

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "the_knowledge.png"

# Tags: can be used for filtering projects.
# Example:
tags = ["football"]

# Optional external URL for project (replaces project detail page).

# Does the project detail page use math formatting?
math = false

+++

When I have a free afternoon, I enjoy answering the questions listed on The Guardian's [The Knowledge](https://www.theguardian.com/football/series/theknowledge) blog. This munging generally ends up as [blogposts](http://www.robert-hickman.eu/post/).

Here are the current examples I have published:

# [August 2018](http://www.robert-hickman.eu/post/the-knowledge-4th-august-2018/)

Looked at successive runs of fixtures for English clubs against identical suffix/prefixes. Also scraped FIFA World Cup squads and looked at players who played in a lower shirt number than their age.

# [January 2019](http://www.robert-hickman.eu/post/counties_league_points/)

Grouped football teams by their county and looked at which counties had won the most points over the past 140 years of league football

# [Febuary 2019](http://www.robert-hickman.eu/post/the-knowledge-7th-february-2019/)

Answered 4 questions:
- which football players have scored on the most unique days of the year (Cristiano Ronaldo)
- which football teams had finished 2nd in a league the most times (Manchester United in the 1st Division - 14times)
- what is the earliest a team has been relegated from a league the earliest (Rochdale, with 8 games to go in 1973/1974)
- what is the longest run of games without a draw in the English leagues (Aston Villa with 50 games in 1891/1892)

# [June 2019](http://www.robert-hickman.eu/post/guardian_knowledge_june/)

A pretty fun post trying to work out the players who had played in the Premier League while representing low ranked countries. It turns out it's pretty difficult to answer conclusively, but it seems that Zesh Rehman (Fulham/Pakistan) in 2005 is the lowest ranked, whereas Christpher Wreh seems to be the player with the lowest ranked nationality to actually win the league

For these questions I tend to rely on the [engsoccerdata](https://github.com/jalapic/engsoccerdata) package in R, to which I am a frequent contributor. I also tend to do a fair bit of web scraping using simple (and sometimes [not so simple](http://www.robert-hickman.eu/post/dynamic_web_scraping/)) methods. 

