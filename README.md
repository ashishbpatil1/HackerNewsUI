# HackerNewsUI

This project is an Angular application that displays the latest HackerNews stories. It allows users to view a list of stories, and navigate through paginated results.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Prerequisites

- [Node.js and npm](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)

## Getting Started
1. **Clone the Repository:**
  https://github.com/yourusername/hackernews-angular-app.git

2. **Install Dependencies:**
  Run `npm install` to install all dependent packages.

3.**Build the Application:**
  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
  
4. **Run the Application:** 
  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.  
  The application will be available at [http://localhost:4200](http://localhost:4200)

5. **Running unit tests:**
  Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features
**Newest Stories List:** Displays the latest HackerNews stories.
**Story Links:** Each story includes a link to the full article.
**Pagination:** Supports pagination to navigate through stories.
**Loading Indicator:** Shows a loading indicator while fetching data.

## Project Structure
**src/app:** Contains the main application components and services.
**src/app/story-list:** The component for displaying the list of stories.
**src/app/story.service.ts:** The service for fetching stories from the API.
**src/app/story.model.ts:** The model represents a story.

## Configuration
The API URL is configured in the StoryService (src/app/story.service.ts):
`private apiUrl = 'https://localhost:7102/api/story';`

## License
This project is licensed under the MIT License.
These README files provide the necessary steps to get started with each project, including prerequisites, installation instructions, configuration details, and basic usage information. Adjust the repository URLs and any specific configuration details as needed for your projects.

