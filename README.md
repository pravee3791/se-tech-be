# Activity API

This project provides a backend application for an Activity API. It exposes REST endpoints to retrieve and search activities. The activities data is stored in a JSON file, and the API also integrates supplier information from another JSON file.

## Project Structure

The project follows a modular structure to separate concerns and enhance maintainability. The main folders and files in the project are:

- `middlewares`: Contains custom middleware functions.
- `routes`: Contains the route handlers for the API endpoints.
- `swagger`: Contains the Swagger documentation for the API.

## Middlewares

The project utilizes the following middlewares:

- `loggerMiddleware`: Logs HTTP requests to the console for debugging and monitoring purposes.
- `corsMiddleware`: Handles Cross-Origin Resource Sharing (CORS) to allow cross-domain requests.
- `statusMonitor`: Provides a real-time status monitoring middleware for Express. It displays various metrics and information about the server, including CPU and memory usage, request rate, response time, and more.

## Swagger Documentation

The API endpoints and their usage are documented using Swagger. You can access the Swagger documentation by navigating to `/api-docs` after starting the server. The documentation provides details about the available endpoints, request/response schemas, and allows you to test the API interactively.

## Routes

The API routes are defined in separate route handlers located in the `routes` folder. The `activitiesRoutes` file handles the routes related to activities, including retrieving all activities and searching activities by title.

## Default Route

If a request is made to an endpoint that doesn't exist, the server will respond with a 404 "Not Found" error.

## Starting the Server

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `npm run start`
4. The API will be accessible at `http://localhost:3100`

Make sure to provide the necessary JSON files (`activities.json` and `suppliers.json`) in the appropriate location for the API to function properly.

Please note that the server is configured to listen on port 3100 by default. If you need to change the port, you can modify the corresponding code in the `env` file.

