# pull official base image
FROM python:3.11.4-slim-buster

# install system dependencies
RUN apt-get update && apt-get install -y netcat

# set work directory
WORKDIR /app

# install dependencies
RUN pip install --upgrade pip
COPY ./