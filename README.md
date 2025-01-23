**Express.js Dockerized Web Application**
**Project Overview**
This project demonstrates a simple Express.js web application that displays "Hello, Express is running!" on the home route. The app is containerized using Docker, with deployment automated through Ansible.

**Prerequisites**
Before running or deploying the project, ensure the following are installed on your system:
Node.js (v16+)
Docker Desktop (latest version)
Ansible

**Steps to Build and Run**
1. Clone the Repository
git clone <repository-url>
cd <repository-folder>
2. Run Using Docker
Build the Docker Image:
docker build -t my-web-app .
Run the Docker Container:
docker run -d -p 5000:5000 my-web-app
Access the Application:
Open your browser and go to http://localhost:3000.

**Monitoring the Application**
You can monitor the running Docker container and application logs.
View Logs:
docker logs <container-id>
Monitor Resource Usage:
docker stats
