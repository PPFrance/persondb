#persondb
Dear R and J,

Here's my attempt. 

In mitigation for my sloth, the list of things I'd never seen before seven days ago includes Docker, SQLAlchemy, Marshmallow, gRPC, react and Flask... which just leaves Material-UI and Postgres.

Best wishes,

PP


##Running

_Prerequisite(s) - Docker installed and up to date, this repository cloned_ 

0. *git clone https://github.com/PPFrance/persondb.git*
1. *cd persondb && docker-compose build*
2. *docker-compose run*
3. Population of DB:
    3.1 via manual curl HTTP POSTing e.g.,
    * curl -i -H "Content-Type: application/json" -X POST -d '{"name": "Louis Fabre", "iso_country": "FR"}' http://localhost:5000/person
    3.2 via web client:
    * http://localhost:8642
    

##Services

###db (postgresql)

###Flask service
Uses:

* Marshmallow to validate JSON from HTTP POST and marshall it into SQLAlchemy wrapper
* SQLAlchemy to communicate with DB

Things I would change before letting this into production:

* thing one
...
* thing one hundred

#Tradeoffs etc
##DB handling

* A lot of time was spent trying to figure out how to handle setting up different users with different, appropriate, rights, before giving up and settling for postgres/postgres@postgres. 

* Similarly, when an instance of the flask service is instantiated, it tries to create the schema in the DB.

  * I wanted to define the schema once, in the SQLAlchemy model; I couldn't see, and can't see - and the internet can't, either, to the best of my knowledge - how easily to share the definition of something, e.g., an SQLAlchemy model, across multiple Docker comoonents. Or it can, but I couldn't find the answer.
  
  



#React app and material UI
TODO

sudo -H npm install create-react-app
sudo -H npm install --save material-ui
