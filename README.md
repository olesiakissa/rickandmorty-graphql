# Rick and Morty GraphQL usage

A React app with the usage of GraphQL and Apollo Client

## Table of contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Built with](#built-with)
  - [Link](#link)
  - [Previews](#previews)
  - [Local installation](#local-installation)
  - [Useful resources](#useful-resources)

## Overview

In this simple project I used GraphQL query syntax to fetch the characters and their details from the Rick and Morty API.
Data was fetched and cached by using Apollo Client functionality.
Queries were performed by React Hooks that were separated into different files for the potential reuse and to not pile up the components functionality.
The redirection and showing character details features were created with the help of React Router.
The project was set up by CRA and then the necessary dependencies were added.

### What I learned

- The structure of GraphQL queries and how to use the schema on the client side
- Both simple and dynamic routing (with params), the redirection feature in React Router

### Built with

- React.js
- Apollo Client
- Rick and Morty GraphQL API
- Mobile-first workflow
- Utility classes, custom CSS properties

### Link

[Live demo](https://rickandmorty-graphql.netlify.app/)

### Previews

<img src="./previews/mobile-preview.gif" width="300"> <img src="./previews/desktop-preview.gif" width="400">

### Local installation

If you would like to run this project locally, please clone the repository to the project directory on your machine and execute `npm run` command. Then you can open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Useful resources

- [Get Started with Apollo Client](https://www.apollographql.com/docs/react/get-started/)
- [Apollo Client React hooks](https://www.apollographql.com/docs/react/api/react/hooks/)
- [Rick and Morty API GraphQL](https://rickandmortyapi.com/graphql)
- [Rick and Morty API (Homepage)](https://rickandmortyapi.com/)
