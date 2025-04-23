# BUD CRUD Coding challenge for Articulate
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
## 1. Sourcing data for the grid and operations on that data must be implemented via the
Airtable API. Any record/data changes you make via your implementation of the Bugs
grid view must be reflected in the Bugs table data stored at Airtable.
      _Create and Read operations are working. Update and Delete are not yet fully functioning from UI operations._
## 2. You must implement at least one API request using the Axios HTTP client library.
      _Scaffolded these calls using a react-router project example. Spent some time figuring out how to setState properly with the child json objects._
## 3. You must implement at least one API request using the Airtable javascript library.
      _Realized near the end of five hours that this referred to a separate API client, not just the Airtable Web API that the client should connect to. I took the remaining time adding the client to the project and starting to understand I might use different clients for different components/calls. I was not able to implement the Airtable calls successfully. This was challenging and interesting as the documentation for the Airtable.js client is less available than the Airtable Web API, but I liked the cohesion of how the Airtable client interacted with the web API._
## 4. Other API requests can be made with any method, including methods other than the
Airtable and Axios libraries.
      _Hard to imagine a third library! I appreciated the challenge of using two though, comparing them was interesting._
## 5. Create a github repository in your personal account for this challenge. Create and merge
pull requests with explanatory notes that demonstrate your progress as you work
through the coding challenge.
_If I were to start over I would have created remote repository first instead of working from a local that populates with the React project initialization. The habitual work flow of submitting a PR once code is finished and working superseded these instructions. I considered going back to amend commits and create a few pull requests, but I'm over the time limit as it is..._


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Axios and Airtable
### `npm install axios`
### `npm install airtable`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
