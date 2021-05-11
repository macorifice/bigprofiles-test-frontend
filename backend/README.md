## BACKEND
# Big Profiles API performance, usage, and errors

[![macorifice - bigprofiles-test-frontend](https://img.shields.io/static/v1?label=macorifice&message=bigprofiles-test-frontend&color=blue&logo=github)](https://github.com/macorifice/bigprofiles-test-frontend) [![ExpressJS](https://img.shields.io/badge/ExpressJS-~4.16.1-yellow)](https://expressjs.com/) [![Mongoose](https://img.shields.io/badge/Mongoose-~^5.12.7-darkred)](https://mongoosejs.com/)

This project allows you to analyze your API.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of npm or yarn
* You have installed a version of MongoDB on your local machine or you need to update the `.env` file inside the root folder of the backend
* If you want to put your database credentials you need to update the `docker.env` file at ` bin/init/src/docker.env` this file allows you to check the connection at startup on your MongoDB instance
## Build
docker build -t backend .

## Run
docker run --name backend -d -p 3000:3000 backend:latest