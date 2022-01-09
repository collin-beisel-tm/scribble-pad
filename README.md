# Note Taker Starter Code

 ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

 ## Table of Contents
  * [Links](#links)
  * [Description](#app-descriptino)
  * [Technologies Used](#technologies-used)
  * [Why I Built](#why-did-i-build-this-project)
  * [What I learned](#what-did-i-learn)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [User Story](#User-Story)
  * [Acceptance Criteria](#acceptance-criteria)

![Home Page Screenshot](https://github.com/collin-beisel-tm/scribble-pad/blob/main/images/home-screenshot.PNG)
![Notes Page Screenshot](https://github.com/collin-beisel-tm/scribble-pad/blob/main/images/notes-screenshot.PNG)

## Links
 - Github Repo: https://github.com/collin-beisel-tm/scribble-pad
 - Live Site Heroku Link: https://scribble-pad-cb.herokuapp.com/
## App Description

Scribble pad is a JavaScript web application that allows users to create notes and save them for later. They can enter a Title and text body. These notes can be retrieved later and can be edited. They can also be deleted. This app was built as an assignment for SMU's Full Stack Web Development Bootcamp.

## Technologies used
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- Express.js
- Heroku
- Git/GitHub

## Why did I build this project?
I built this project as a bootcamp assignment. 

## What did I learn?
This project taught me how to use Express.js to set up API/HTML routes to GET, POST, PUT, and DELETE data from a database (in this case a JSON file).

## Installation
 - Navigate to https://scribble-pad-cb.herokuapp.com/
 - click the "Get Started" button
 - You will be presented with an open note
 - Once you add a title and text body you will see a save button appear in the top right hand corner. Click this to save your note.
 - You will see your new note populate on the left side of the page.
 - You can now navigate and edit your existing notes, create new notes, or delete existing notes.
 - Your notes will persist between browser sessions
## license
MIT License

Copyright (c) [2021] [CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
