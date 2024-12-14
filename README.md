# Marimekko E-commerce Web Application

## Overview

This project is a modern monolithic web application built to showcase Marimekko's latest collection. It consists of both the frontend and backend, all within a single Next.js app that uses Payload as a CMS for managing product data. The application is Dockerized for easy local development, with CI/CD deployed via Google Cloud Build to Cloud Run.

You can view the live deployment of the application here: [Live Deployment](https://marimekko-204215439482.europe-north1.run.app)

## Technologies Used

- **Frontend**: Next.js (React-based framework)
- **Backend/CMS**: Payload CMS (for managing product data)
- **Database**: PostgreSQL (hosted on Google Cloud SQL)
- **Deployment**: Google Cloud (Cloud Run, Cloud SQL, Cloud Build, Cloud Storage, Secret Manager)
- **Containerization**: Docker (Docker Compose for local development)
- **CI/CD**: Google Cloud Build (automated build and deployment pipeline)

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:

- **Node.js v22.12.0**
- **npm v10.9.0**
- **Docker**: Docker should be installed to run the app locally in containers.
- **Git**: (for cloning the repository)

You can use [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) to manage the correct Node.js version.

1.  **Install Node.js v22.12.0**: If you’re using `nvm`, you can install the specific Node.js version by running:

    ```console
    nvm install 22.12.0
    nvm use 22.12.0
    ```

2.  **Install Docker**:

    - You can download and install Docker from Docker's official site.
    - Once installed, verify Docker is running:

      ```console
      docker --version
      ```

3.  Verify Node.js and npm versions:

    ```console
    node -v    # v22.12.0
    npm -v     # v10.9.0
    ```

### Docker Setup

This app uses **Docker** for both development and production environments. There are separate Dockerfiles for production and local development.

#### Local Development Docker Setup

1.  **Build the local development Docker containers**: To build the Docker containers for local development, run the following command:

    ```console
    npm run build:dev
    ```

2.  **Start the containers for local development**: Once the containers are built, use the following command to start the containers, including the local PostgreSQL instance:

    ```console
    npm run up:dev
    ```

    This will start the application in development mode, as well as a local PostgreSQL database. The app will be available at http://localhost:3000.

### Continuous Integration & Deployment (CI/CD)

The project is set up with **Google Cloud Build** for Continuous Integration and Deployment (CI/CD). Whenever a push is made to the `main` branch, Cloud Build automatically triggers the following actions:

1.  **Build** the application using Docker.
2.  **Deploy** the built application to **Google Cloud Run**.

This CI/CD pipeline ensures that changes are automatically built and deployed with minimal manual intervention. There’s no need to use the Google Cloud SDK for this process, as Cloud Build handles the entire pipeline automatically.
