# PlanTips

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn&metric=coverage)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=isdi-coders-2023_Anna-Marrodan-Final-Project-front-202301-bcn)

Plantips is a website that allows plant lovers to check and share the best tips to help plants grow stronger.
It is built using React, Redux toolkit, styled components, and tested using Jest. The application has been deployed in Netlify.

[PlanTips app](https://anna-marrodan-final-project-202301.netlify.app/login)

![Screenshoots of PlanTips app](images/PlanTips.webp)

## Features

- Users can log in to the application and acces the general list of tips and their private list.
- Users can browse through the general collection of tips and filter by level of care required.
- Users can create and share their plant-growing tips with other users.
- Users can delete their own tips.

## Tech stack

![ts](https://flat.badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/-React_Testing_Library-990000?style=flat-square&logo=react-testing-library&logoColor=white)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/24c75094-9f67-4a1d-9c4f-b4469d0ea9a0/deploy-status)](https://app.netlify.com/sites/anna-marrodan-final-project-202301/deploys)

- React: frontend library for building web applications
- Redux Toolkit: a library that provides a simple and efficient way to manage application state
- Styled components: popular library used to style React applications. It allows to write actual CSS code to style custom components
- Jest: a popular JavaScript testing framework
- React testing library: popular JavaScript library used for testing React applications.

## Future implementations

- Allow users to modify its own tips
- Allow new users to register

## Getting Started

To get started using Plantips, you'll need to have the following tools installed:

- Node.js
- Clone the repository and install all the needed dependencies using _npm install_

This is a full stack project, you can find the backend code here: [Platips back end project](https://anna-marrodan-final-project-202301.netlify.app/login)

## Running Tests

Plantips uses Jest for unit and integration tests. To run the test suite, use the _npm test_ command.

## Deployment

To deploy Plantips to a production environment, run the npm _run build_ command to build a production-ready version of the app. This will generate a build directory containing the compiled code, which you can then serve using a static file server.
