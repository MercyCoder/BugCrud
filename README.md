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
1. Sourcing data for the grid and operations on that data must be implemented via the
Airtable API. Any record/data changes you make via your implementation of the Bugs
grid view must be reflected in the Bugs table data stored at Airtable.
      Create and Read operations are working. Update and Delete are not yet fully functioning from UI operations.
2. You must implement at least one API request using the Axios HTTP client library.
      Scaffolded these calls using a react-router project example. Spent some time figuring out how to setState properly with the child json objects. 
3. You must implement at least one API request using the Airtable javascript library.
      Realized near the end of five hours that this referred to a separate API client, not just the Airtable Web API that the client should connect to. I took the remaining time adding the client to the project and starting to understand I might use different clients for different components/calls, I was able to get the calls working, but not integrated into the React UI. This was challenging and interesting as the documentation for the Airtable.js client is less available than the Airtable Web API, but once I got their test project working, I was pleased with how well the client integrated with the Web API, however, applying it to this React instance, would take more time than I have. Were I to continue, I would use Airtable API client to update and delete existing bugs.
4. Other API requests can be made with any method, including methods other than the
Airtable and Axios libraries.
      Hard to imagine a third library! I appreciated the challenge of using two though, comparing them was interesting. 
5. Create a github repository in your personal account for this challenge. Create and merge
pull requests with explanatory notes that demonstrate your progress as you work
through the coding challenge.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
