This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



# Table of Contents

- [Shopify Web Development Challenge](#shopify-web-development-challenge)

- [Installation](#installation)

- [Project Demo](#project-demo)


# Shopify Web Development Challenge

Build a web app to search Github repositories, favourite repos, manage favourites.

### Instructions
- **Reproduce the designs** provided in the [screenshots](screenshots/desktop.jpg)
- Must use Github API **v3 or v4**
- Typing in the search input field should **NOT** perform an API call
- Hitting enter or clicking the "Search" button should perform an API call to Github
- Performing a search should render a list of **10 repositories**
	- Each item should
		- render the name with owner *(Ex. shopify/polaris)* and link to the repo's page on Github
		- render the name of the primary language
		- render the latest release tag **if present**
		- render the "Add" button **if the repo is not already favourited**
		- clicking the "Add" button should add the repo to the favourites list
- When the search input field is cleared, the list of results should cleared
- When the number of favourites is **more than one**
	- render a **list of favourited repositories**
		- Each item should
			- render the name with owner *(Ex. shopify/polaris)* and link to the repo's page on Github
			- render the name of the primary language
			- render the latest release tag if present
			- render the "Remove" button **if the repo has been favourited**
			- clicking the "Remove" button should remove the repo from the favourites list

### Notes
- [Github Developer](https://developer.github.com/)
- [Docs on how to create a personal access token to make request to the Github API](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

# Installation

Requirements:
- NodeJs installed with lastest release and ReactJs version 16+
- Setup your own Client ID and Client with a callback URL
 
1. First run "npm install" to install the node packages
2. To execute the application run "npm run start"

# Project Demo

Project link: https://frontendshopifychallenge.herokuapp.com

Notes:
- The application uses local storage from the web browser to store the bookmark repos
- It is hosted on Heroku and need some time to load
- To checkout the OAuth token version, [click here](https://github.com/lappang-cheung/frontendshopify)