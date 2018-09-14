personapp
=========

Up and running
--------------

$ git clone https://github.com/PPFrance/persondb.git
$ cd persondb && docker-compose build
$ docker-compose run

* _The flask service has a dependency on the DB service. Nevertheless, the DB service sometimes surfaces *after* the flask service. If that happens, please execute *docker-compose restart* (!)._



Description
-----------

_Summary_ 

There are four docker services, intended to be run using docker-compose, coordinated by ./docker-compose.yml at the root. The GUI is available at http://localhost:4000. It sends HTTP POST Ajax requests to http://localhost:5000/person, at which there's a flask server. A postgres database is at port 5432, a gRPC server at port 50051. There's a console client to interrogate the database via gRPC, implemented in python, at ./grpc-client/src/client.py 

There are a few infelicities in the layout of html, and even the logic. As per the request, I concentrated on learning and composing the technologies, all except two of which were new to me, rather than ironing out the functionality itself. The important thing, I thought, is data can be entered in the GUI, received in the Flask backend, marshalled in marshmallow, inserted via SqlAlchemy into postgres, then retrieved via a gRPC client communicating via protocol buffer messages.

_Docker services_

* Flask server
    * ./flask-service
    * Published at http://localhost:5000/person
    * The flask_cors package is used to allow (indiscriminate) cross-browser support (necessary as the static site is obvs. served from different port).  
    * The flask instance validates requests it receives using Marshmallow, which then fits into an SqlAlchemy model. 
    * It attempts to create the schema on startup.
        
    
* Postgres DB
    * ./db
        * Although this wasn't strictly necessary (as can be defined directly in docker-compose.yml), anticipated having create_users.sql, migrate_schema.sql to run, potentially. 
    * Data is stored on a separate volume, which means it persists across docker-compose ups and downs.
        
* Node webserver 
    * ./web-react-app
    * The UI, available at http://localhost:4000
        * Disappointingly, I couldn't get the material-UI objects such as TextField to play nicely with react - so I defaulted to using the standard HTML UI components, running rapidly out of time, this morning.
    * When submit is pressed, Axios is used to send Ajax requests to the flask server.
    
        
* gRPC server
    * ./grpc-service
    * SqlAlchemy is used to retrieve data from the postgres DB. 
        * However, although I appreciate this is something of a cardinal sin, I simply couldn't find a way to make a library of common features available to the entire project, so had to copy-paste sqlalchemy_model.py from ./flask-service/src 
        * In a real project, I would hope to have definitions of models generated at compile time from some common source, but as it is, I couldn't think of a way of doing this both minimally and neatly. 
        * I'm certainly aware it stinks, doing it this way, but it's marginally better than nothing.
    * There's also a bug in the query: I can't add a functioning _where_ clause using SqlAlchemy. Again, more time needed, my apologies.
        
        
There is also a (non-dockerized) client for the the gRPC server:

* gRPC client
    * ./grpc-client
    * It may be necessary to install grpc in the local python packages; pip install grpc.
    * Usage:
    * cd ./grpc-client/src
    * python client.py
    

        

