FROM node:latest


COPY ./webapp/package.json ./app/package.json
COPY ./webapp/src/. ./app/src/.
COPY ./webapp/public/. ./app/public/.

WORKDIR /app

RUN npm install
RUN npm install react-scripts
#Install material ui
RUN npm install @material-ui/core
#Axios, to be able to POST to the flask component.
RUN npm install axios
#Build for prod
RUN npm run build --production
# Install `serve` to run the application.
RUN npm install -g serve


# Set the command to start the node server.
CMD serve -l 4000 -d build

# Tell Docker about the port we'll run on.
EXPOSE 4000

#4000 instead of 5000 as I'm not quite sure I have time to try and understand whether 5000 will impact other choices made for the flask server.
