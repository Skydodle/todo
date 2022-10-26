# todo-list-app

## Overview
Simple to-do list frontend app built with Create-React-App boiler plate, using React Hooks and localStorage with basic CRUD operations for adding, updating, deleteing, & displaying tasks. Filters to display by task's active/completed status.

<img src="https://media.giphy.com/media/rVnkPAcxdenm25Iqja/giphy.gif" >

## Project Workflow
You can find my project workflow in the link below. I used Notion since it's a solo smaller project. It contains my planned task list and brainstorms throughout the project.

[Project workflow - To-Do List App](https://cuboid-desk-092.notion.site/d792f3bbfdac4697b896cb77602d20dd?v=a27f3e92c0ce44bba8f3ef243ea632ff)

## Setup
After cloning to local machine, navigate to `frontend-todo` folder
1. To install dependencies:
```
npm install
```
2. To run client dev (has built in webpack from react script):
```
npm start
```
Browser should open http://localhost:3000

## Future Development
I started in the `frontend-todo` folder because this the frontend only version.
My plan is to make the following separate versions in the future:
- Typescript frontend: convert frontend-todo into typescript
- Backend only: using Node, Express, PostgreSQL
- Fullstack: a fullstack version combining front and back 
- Deployment: maybe convert to NextJS with vercel deployment for front-end only; Amazon EC2 for fullstack
