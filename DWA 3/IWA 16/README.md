<!-- omit in toc -->
# ✅ Athelets data

You have been handed a data structure that contains information about two athletes. All information is stored under the variable data. However the variable contains additional information returned from the server, so you will need to traverse into the structure to retrieve information from an embedded property also called data.
The nested data property contains an object of two individuals, each with a unique ID that is used as their key in the object. You are to ensure that the following is displayed for each individual on the page (matching each individual with their specific section element).

 

- [features](#features)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [User Stories](#user-stories)


## features

- 📖Fullname (Firstname and Surname)
- 🏃 Number of races
- 📆 Date of most recent race (format: d MMM YYYY)
- ⏲️ Duration of most recent race (format: hh:mm)

## Requirements

The following is required:
An IDE like [Visual studiocode](https://code.visualstudio.co.)
Basic [HTML,CSS and JavaScript](https://developer.mozilla.org/en-US/docs/Learn)skills.
A browser like [chrome](https://www.google.com/chrome)

## Getting started

1.clone the repository

```
git clonehttps://github.com/lesegomatshego/LESMAT001_BCL2302_BENJAMIN_LESEGO_MATSHEGO_IWA1

2.Run localhost server

3.open index.html.

## User Stories

An h2 title that shows the id property of the athlete
A description list that matches values (<dd>) with keys (<dt>). These key/values should be as follows:
Full name (firstName and surname) of athlete
The total recorded amount of races they ran as a number. For example 3 or 5
The date of the last race they ran should be formatted as d MMM YYYY in accordance with the TR35 standard, For example, 7 Oct 2022.
The total time it took to complete the last race also formatted with the TR35 standard as hh:mm. For example, 91 minutes will be 01:31
