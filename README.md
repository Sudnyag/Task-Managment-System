
# Task Managment System
A Node.js application for managing task, supporting CRUD operations. This project uses MongoDB for data storage and provides RESTful API endpoints for interaction.



## Projet Overview
This project is designed to provide an easy-to-use interface for user management. It allows users to perform the following operations:

Create new task.
Retrieve task details by ID.
Update task information.
Delete task accounts.
Features
RESTful API design.
MongoDB for database storage.
Error handling for better user experience.

## Tehnologies Used
Node.js - Backend framework.
Express.js - API routing and middleware.
Postgreysql - Database for storing user information.
Pool - Pg object modeling for Node.js.

## API Reference

#### create task 

```http
  POST /taskApp/submit
```

#### GetAll task 

```http
  GET /taskApp/getAll
```

#### Search
```http

  GET /taskApp/get/:TaskID

```
#### Update task

```http

  PUT /taskApp/update
```
#### delete task

```http

  DELETE /taskApp/delete
```



