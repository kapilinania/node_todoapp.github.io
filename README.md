# To-Do Application

This is a simple To-Do application built with Node.js, MySQL, and Bootstrap. It allows users to create, update, and delete tasks in a user-friendly interface.

## Features

- Add new tasks with title and description.
- Mark tasks as completed.
- Delete tasks.
- Responsive design using Bootstrap.

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS (Embedded JavaScript templating)
- Bootstrap

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   `bash
   git clone https://github.com/yourusername/nodejs-mysql-todo.git
   cd nodejs-mysql-todo

  ## Install the required packages:
   npm install

## Database Setup
  Create a MySQL database:

##  Log into MySQL:
  CREATE DATABASE todo_db;
  USE todo_db;
  CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      status ENUM('pending', 'completed') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

## Running the Application
  Start the server:node server.js
## Usage
Add a Task: Enter the title and description of the task in the input fields and click the "Add Task" button.
Complete a Task: Click the "Complete" button next to a pending task to mark it as completed. The button will disappear once the task is marked complete.
Delete a Task: Click the "Delete" button next to any task to remove it from the list.
## Contributing
Feel free to fork this repository and submit pull requests. Any contributions are welcome!
