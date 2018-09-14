FROM node:latest

# Create app directory
WORKDIR /app

COPY ./webapp ./app

RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -l 6000 -d build

# Tell Docker about the port we'll run on.
EXPOSE 6000

#6000 instead of 5000 as I'm not quite sure I have time to try and understand whether 5000 will impact other choices made for the flask server.
