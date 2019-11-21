+++
# Date this page was created.
date = "2019-11-21"

# Project title.
title = "Could Yorkshire Win the World Cup"

# Project summary to display on homepage.
summary = "In 2018, after watching the [CONIFA World Cup](https://en.wikipedia.org/wiki/2018_CONIFA_World_Football_Cup) final live, I wondered if an Independent Yorkshire could win the FIFA World Cup. This resulted in a few blogposts that were turned into an article in [Citymetric magazine](https://www.citymetric.com/horizons/football-could-independent-yorkshire-win-world-cup-3961)"

# Optional image to display on homepage (relative to `static/img/` folder).
image_preview = "yorkshire_logo.png"

# Tags: can be used for filtering projects.
# Example:
tags = ["football", "machine_learning"]

# Optional external URL for project (replaces project detail page).

# Does the project detail page use math formatting?
math = false

+++

In 2018, after watching the [CONIFA World Cup](https://en.wikipedia.org/wiki/2018_CONIFA_World_Football_Cup) final live, I wondered if an Independent Yorkshire could win the FIFA World Cup. This resulted in a few blogposts that were turned into an article in [Citymetric magazine](https://www.citymetric.com/horizons/football-could-independent-yorkshire-win-world-cup-3961).

This page lists the blog posts and a one line description of techniques therein. The copies the article text below.

# Blog Posts

- [Data and Scraping](http://www.robert-hickman.eu/post/yorkshire_world_cup_1/) - Grabbing the FIFA video game player data and UK maps

- [Player Position LASSO](http://www.robert-hickman.eu/post/yorkshire_world_cup_2/) - Using LASSO regression to calculate player abilities in various positions

- [Finding Birthplaces](http://www.robert-hickman.eu/post/yorkshire_world_cup_3/) - Scraping the birthplaces of British players and binning by county

- [Picking Teams](http://www.robert-hickman.eu/post/yorkshire_world_cup_4/) - Simulating various lineups to find the best team each nation/county can put out on the field

- [Simulating World Cup](http://www.robert-hickman.eu/post/yorkshire_world_cup_5/) - Calculate implied county ELO and simulate World Cups to get a sense of the chance of a county winning it

- [*Bonus* UK/Rest of the World teams](http://www.robert-hickman.eu/post/yorkshire_world_cup_6/) - Doing the same but for an all UK team/ players from Nations who did not qualify for the World Cup

# Article Text
With less than a week until the start of the 2018 World Cup in Russia, it’s worth remembering, that another World Cup – the 2018 ConIFA World Cup for stateless people, minorities, and regions unaffiliated with FIFA - is also taking place in London.

Though happening in the UK, neither of the local ConIFA members will be competing. The Ellan Vannin team from the Isle of Man withdrew midway; and the latest ConIFA member, Yorkshire, only gained membership earlier this year.

One of Yorkshire’s most obvious characteristics, is that it’s absolutely huge compared to most other UK counties. It also – probably – has the highest contemporary population of any of the historic British counties. Indeed, as recently as this February the region resisted attempts to split control of the region up, demanding a “One Yorkshire” devolution deal instead of the proposed control to regions surrounding four of it’s major cities – and in May, a vocal proponent of such a “One Yorkshire” devolution, Dan Jarvis, the Labour MP for Barnsley, was elected as mayor of one of the Sheffield City region.

Given its size, ConIFA membership, and pushes for further devolution, I was wondering how Yorkshire would do as an independent full FIFA member. If it seceded as a whole from the rest of the UK could it field a team that could challenge internationally? Could any of the historic British counties? 

Overall, there are 88 historic counties in Great Britain, plus the 6 counties of Northern Ireland (I couldn’t find shapefiles for the older subdivisions) which could be potential independent FIFA members.

Once I had these, I needed some way to rate potential players, and therefore teams. Luckily, the popular video game FIFA18 maintains up to date ratings of thousands of players across 36 different stats (e.g. dribbling, heading, pace etc.). After scraping an online database of players, I’m left with 18,058 players of various nationalities and abilities.

Using a simple regression model, I can use these abilities and the player’s listed preferred positions to predict what each players rating for each position, and use these position ratings to train a computer to pick optimal teams across a variety of formations. If we do this do for every nation that has at least 11 players in the database (10 outfield + 1 goalkeeper), the best 4 national teams that can be fielded are from Brazil, Germany, Spain, and Belgium. 

To pick the teams for each county, though, I first had to find the birthplace of player. To simplify things a bit I only check players listed as English, Scottish, Welsh, Northern Irish, or Irish (due to the weirdness of the Irish FA) in my database of FIFA players. For each of these I ran a script to look the player up on wikipedia and scrape their birthplace. Once this was geocoded, I had a map of each British player and their birthplace, and therefore, the county of their birth. 
 
Unsurprisingly, it basically shows a population density map of the UK, with more players born in the urban centres of London, Birmingham, the Lancashire cities and the West Yorkshire urban centres. After binning the players by county of birth, twenty historic counties have enough players to field a team.

On this chart, ‘FIFA_ability’ is the perceived ability of the optimal 11 players in a starting line up for that county, as judged by FIFA stats.

Perhaps a little surprisingly, the Lancashire team is rated slightly higher than the Yorkshire team – though looking at the sheer number of players they can select from it makes sense. Elsewhere, the home counties do well, as do Glasgow and Warwickshire (which contains much of contemporary Birmingham).

Looking at the selections the alogirthm chooses, it’s pretty clear some of these teams tend to be a bit flawed but overall make sense. The Yorkshire/Lancashire teams in particular are full of England international players and are lacking only an experienced top level goalkeeper. 

In order to predict how these teams would do at a World Cup, I needed some form of quantifiable rating of a team;s ability. Luckily, ELO ratings in chess can do exactly that: the likelihood of any team A beating a team B is a direct function in the difference in their ELO rating.

Plotting the ELO ratings of each actual national team (an up to date calculation is maintained at ELOrating.net) against the ability of each national team as judged by FIFA18 shows a pretty clear linear trend. Using a regression model of this relationship, we can predict the ability of each hypothetical county national team.

When plotted, these ELO ratings show that some of the counties are definitely in the ball park of established world cup qualifiers – and so we might expected a post-super-devolution Britain to be sending multiple teams to the World Cup. 

In fact, Yorkshire and Lancashire are predicted to be about as good as the national teams of Serbia and Sweden. Lagging a bit behind, Essex and Surrey – both of which take in large chunks of what is now London – could expect to be competititve with teams like Turkey and Morocco.

However, just finding out how good these teams would be wasn’t what I wanted to know. I wanted to see if an independent British county could win the World Cup.

To do this, I swapped each of these counties in for the national English team and ran 10000 simulations of the post-devolution 2018 World Cup, uusing the same draws and fixtures as the real tournament uses. 

The bad news is, the real-life favourites tend to dominate the simulations. Brazil or Germany were predicted to win the tournament in almost half of all the simulations. On the graph, it;s just possible to make out the red bars of Yorkshire and Lancashire, both of which won 41 out of 10000 simulations (a 0.41 per cent chance of winning any random World Cup).

This seems pretty low – but is comparable to pretty respectable teams like Denmark (0.775 per cent), Senegal (0.217 per cent), and even higher than the Iceland team which knocked england out of Euro2016 (0.339 per cent). It’s way higher than the chances the simulation gives the Russian hosts (0.07 per cent). 

Scaling down to just these pretty hopeless nations/counties really shows how little hope the independent British counties would have at an international tournament. However, the best four counties (Lancashire, Yorkshire, Essex, and Surrey) all have about a 0.2 per cent or higher chance, or 500-1 odds, at winning the 2018 World Cup were they to replace England at the last minute. This is an order of magnitude greater than the 5000-1 odds given to Leicester City at the start of 2015-2016 Premier League season, so there’s always a chance. 