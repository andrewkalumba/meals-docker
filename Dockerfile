FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"] 

# after that then you use the command below to run the image (docker run -d --name my-container my-image
# )

# I'll explain this Dockerfile line by line and what it does:
# Overall Purpose
# This Dockerfile creates a containerized Node.js application. It builds a Docker image that can run your application in an isolated, reproducible environment.
# Line-by-Line Breakdown
# FROM node:22-alpine

# Starts with a base image of Node.js version 22 running on Alpine Linux
# Alpine is a lightweight Linux distribution (~5MB), making your final image smaller and faster
# This gives you Node.js and npm pre-installed

# WORKDIR /app

# Sets the working directory inside the container to /app
# All subsequent commands will run from this directory
# If the directory doesn't exist, it's created automatically

# COPY package*.json ./

# Copies package.json and package-lock.json (if it exists) from your local machine to the container's /app directory
# The * wildcard matches both files
# This is done separately from copying the rest of the code for better caching

# RUN npm install

# Installs all dependencies listed in package.json
# Downloads node_modules into the container
# This layer is cached, so if package.json doesn't change, this step won't re-run

# COPY . .

# Copies all remaining files from your local directory to /app in the container
# The first . is the source (your local directory)
# The second . is the destination (the WORKDIR /app)

# RUN npm run build

# Runs the build script defined in your package.json
# Typically compiles TypeScript, bundles assets, or prepares the production build
# Creates optimized files for production

# EXPOSE 3000

# Documents that the application listens on port 3000
# This is informational only - it doesn't actually open the port
# You still need to map the port when running the container with -p 3000:3000

# CMD ["npm", "start"]

# Defines the default command to run when the container starts
# Executes npm start, which runs the start script from package.json
# This typically starts your Node.js server

# How to Use This
# Build the image:
# bashdocker build -t my-app .
# Run the container:
# bashdocker run -p 3000:3000 my-app
# Optimization Tip
# For production, you might want to use npm ci instead of npm install for faster, more reliable installs, and consider a multi-stage build to keep the final image smaller.RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. Sonnet 4.5