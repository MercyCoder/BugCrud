# BUD CRUD code challenge
This is the second attempt to complete the coding challenge. In the first I started with a get call to the Airtable API and started building component actions one by one. After realizing that this approach, while useful for learning the APIs and being more in control of the application architecture, was particularly time consuming in the need to design components ad-hoc. I wanted a more cohesive structure and styling and a method for the services to interact with React State more uniformly. I discovered a wonderful example project that uses react-router and also has clean, comprehensive layout, project structure, and styling. I started the example project to understand react-router and ended up continuing development in this instance, instead of within the project with individually built components. 

As I approached the five hour time limit for this project and had implemented:

1. Sort and search functionality. 
      search functionality scaffolded, but not currently working. 
      sort not implemented.
2. View record functionality.
      Bug list displays and individual bugs can be clicked on and viewed.
3. Add record functionality.
4. Edit record functionality.
      Update records is scaffolded, but not currently working.
5. Delete a single record functionality.
      Delete records is scaffolded, but not currently working.

# Requirements
## 1. Sourcing data for the grid and operations on that data must be implemented via the Airtable API. Any record/data changes you make via your implementation of the Bugs grid view must be reflected in the Bugs table data stored at Airtable.
      Create and Read operations are working. Delete is a work in progress and buggy. Update/Edit would ideally merge the UX of Delete and Add actions. 
## 2. You must implement at least one API request using the Axios HTTP client library.
      Scaffolded these calls using a react-router project example. Spent some time figuring out how to setState properly with the child json objects.
## 3. You must implement at least one API request using the Airtable javascript library.
      Realized midway through that this referred to a separate API client, not just the Airtable Web API that the client should connect to. This was challenging and interesting as the documentation for the Airtable.js client is less available than the Airtable Web API, but I liked the cohesion of how the Airtable client interacted with the web API.
## 4. Other API requests can be made with any method, including methods other than the Airtable and Axios libraries.
      Hard to imagine a third library! I appreciated the challenge of using two, however, comparing them was interesting.
## 5. Create a github repository in your personal account for this challenge. Create and merge pull requests with explanatory notes that demonstrate your progress as you work through the coding challenge.
If I were to start over I would have created remote repository first instead of working from a local that populates with the React project initialization. The habitual work flow of submitting a PR once code is finished and testable superseded my best intentions. I considered going back to amend commits revise the history, but I think that would defeat the purpose of the challenge somewhat, and I'm over the time limit as it is...


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Axios and Airtable
### `npm install axios`
### `npm install airtable`

## Authorization and Airtable Base ID
Create an Airtable account and retrieve a token and a base ID. Replace AIRTABLE_API_TOKEN with your token lines 7 of http-common.js and 14 of delete-bug.component.js and replace AIRTABLE_BASE_ID with your base ID in lines 4 of http-common.js and 15 of delete-bug.component.js

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
