#!/usr/bin/env Rscript


withCallingHandlers(
    install.packages(c('optparse','tidyverse', 'igraph'),repos='https://cloud.r-project.org/'),
    warning = stop
)

# http://cran.us.r-project.org