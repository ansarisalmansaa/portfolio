# Portfolio



- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**My Portfolio** is a project which highlights and showcases my best work along with experiences and achievements.


<br>

## MVP

- Back End   
  - Build a Ruby on Rails server
  - Make use of RESTful JSON endpoints
  - Implement working Full CRUD 


- Front End   
  - Build Front End using React.js
  - Consume data from Ruby on Rails API 
  - Render Data 
  - Fully CRUD 
  - Admin can Edit,Delete and Add Project

- Styling
  - Style using CSS
  - Hover effects
  - Implement media queries for mobile view

- Deployment   
  - Deploy Back End with Heroku
  - Deploy Front End with Netlify


<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Render Front-End  |
|   React Router   | import and use Link and Route and useHistory to redirect to different pages |
| AOS | add nice animation and effects on scroll throughout the page |
| Axios | make axios calls to the backend |
|  JWT  | used for authentication and validation |
| Bcrypt| used for encrypting passwords |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

<img width="862" alt="Screen Shot 2021-08-12 at 10 30 33 AM" src="https://user-images.githubusercontent.com/84696994/129215517-833184a9-e7ef-40f7-b658-2e126b0282d9.png">

- Mobile View

<img width="181" alt="Screen Shot 2021-08-12 at 10 30 54 AM" src="https://user-images.githubusercontent.com/84696994/129215574-6d172bad-ccd7-463b-83ed-00934ce8e607.png">


#### Component Tree

<img width="790" alt="Screen Shot 2021-08-12 at 10 32 20 AM" src="https://user-images.githubusercontent.com/84696994/129215724-3479bc82-1ee8-4a8a-8153-608e9d4c9059.png">


``` structure

src
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Components
    │   ├── Login.jsx
    │   └── Message.jsx
    ├── Layout
    │   ├── Footer.jsx
    │   └── Navbar.jsx
    ├── Screens
    │   ├── About.jsx
    │   ├── AddProject.jsx
    │   ├── Contact.jsx
    │   ├── DetailProject.jsx
    │   ├── EditProject.jsx
    │   ├── Home.jsx
    │   └── Projects.jsx
    ├── Services
    │   ├── api-config.jsx
    │   ├── auth.jsx
    │   ├── projects.jsx
    │   └── user.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

#### Time Estimates

| Task | Estimated Time | Time Invested |
| ---- | :------------: |:-----: | 
| Rails Backend | 4H | hrs|
| Create CRUD Actions | 4H| hrs |
| Seed Data | 3H | hrs |
| Routes | 4H | hrs |
| Services Folder | 3H | hrs |
| Front-End CRUD | 5H | hrs |
| Debugging | 7H | hrs |
| TOTAL | 30H|hrs|   


### Server (Back End)

#### ERD Model

<img width="718" alt="Screen Shot 2021-08-12 at 10 41 36 AM" src="https://user-images.githubusercontent.com/84696994/129216917-6afdf2d8-b4d9-499e-bdbc-39c3d0092d92.png">

## Code Showcase



## Code Issues & Resolutions
