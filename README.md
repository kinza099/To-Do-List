# To-Do List Web Application
This is a simple To-Do List web application that allows users to add, mark, and remove tasks. Additionally, the application can generate a PDF of the To-Do List.

## Table of Contents
Features
Technologies Used
Setup and Installation
Usage
Generating PDF
License
## Features
Add new tasks to the list.
Mark tasks as completed.
Remove tasks from the list.
Save tasks in the local storage to persist data between sessions.
Generate a well-formatted PDF of the To-Do List with colors and task statuses.
## Technologies Used
HTML
CSS
JavaScript
jsPDF library for PDF generation.
## Setup and Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/todo-list-app.git
Navigate to the project directory:

sh
Copy code
cd todo-list-app
Open index.html in your preferred web browser.

## Usage
Adding Tasks:

Enter your task in the input box.
Click the "Add" button to add the task to the list.
Marking Tasks as Completed:

Click on a task to mark it as completed. The task text will be struck through.
Removing Tasks:

Click on the "×" icon next to a task to remove it from the list.
Saving Tasks:

The tasks are automatically saved in the local storage. You can close the browser and reopen the application without losing your tasks.
## Generating PDF
Click the "Generate PDF" button to create a PDF document of your current To-Do List.
The PDF will have the following features:
The heading "To-Do List" will be centered and in blue color.
Tasks will be listed with their respective statuses (completed or not) and numbered.
Completed tasks will be in green color, and uncompleted tasks will be in black color.
## License
This project is licensed under the MIT License. See the LICENSE file for more details.
