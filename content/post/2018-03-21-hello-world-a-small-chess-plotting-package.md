---
title: Hello World! And A Small Chess Plotting Package
author: Robert Hickman
date: '2018-03-21'
slug: hello-world-a-small-chess-plotting-package
categories: []
tags:
  - rstats
  - package
  - chess
header:
  caption: ''
  image: ''
---

Finally gotten around to using my [blogdown](https://cran.r-project.org/web/packages/blogdown/index.html) website!

Feels like a fairly good place to publicise a small package to plot chess games using only the pgn using ggplot2 in R which can be found [here](https://github.com/RobWHickman/kaRpov)

To copy the readme mini-vignette provides a nice overview of the uber-function which goes from pgn -> gif.

As in the README massive thanks and inspiration to [Joshua Kunst](https://twitter.com/jbkunst) and his [rchess package](http://jkunst.com/rchess/) which I failed to get going on my laptop and decided to try my arm at writing something from scratch.

```{r}
library(kaRpov)

#the pgn for the immortal game
immortal_pgn <- "1.e4 e5 2.f4 exf4 3.Bc4 Qh4+ 4.Kf1 b5 5.Bxb5 Nf6 6.Nf3 Qh6 7.d3 Nh5 8.Nh4 Qg5 9.Nf5 c6 10.g4 Nf6 11.Rg1 cxb5 12.h4 Qg6 13.h5 Qg5 14.Qf3 Ng8 15.Bxf4 Qf6 16.Nc3 Bc5 17.Nd5 Qxb2 18.Bd6 Bxg1 19.e5 Qxa1+ 20.Ke2 Na6 21.Nxg7+ Kd8 22.Qf6+ Nxf6 23.Be7#"

filename <- "C:/Users/MagnusCarlsen/Desktop/immortal_game"

#need to fix library importing
library(tweenr)
library(animation)
library(ggplot2)
library(grid)
library(png)

#create the gif
plot_pgn (immortal_pgn, 
          light_col = "#f5f5dc", dark_col = "#00688b", square_labels = FALSE, plot = FALSE,
          move_cutoff = NULL, frames = 100, interpolation = 0.5,
          speed = 10, pause_end = TRUE, black_shift = NULL,
          name = filename)
          
```

There's also a load of semi-arranged smaller functions used to work out the positions of the pieces and plot the board etc. which people can play around with. I'll probably do a bit more cleaning of it and really want to try and integrate it with a chess engine API to add the relative strengths of each player to the package, but for now there's more interesting things to do elsewhere :)

Thank you for reading- and I hope you enjoy the package!

![Immortal Game](/img/immortal_game.gif)
