Overview
========


DB Users
========
To keep matters simple, I've stuck to

Container/Image Anatomy
=======================


The application consists of five services defined in docker-compose.yaml. 
The four 

* ./database

* ./flask-service
    * http://www.patricksoftwareblog.com/how-to-use-docker-and-docker-compose-to-create-a-flask-application/
    * http://www.ameyalokare.com/docker/2017/09/20/nginx-flask-postgres-docker-compose.html
    

https://github.com/juggernaut/nginx-flask-postgres-docker-compose-example
    

IMPORTANT: 
https://testdriven.io/part-one-postgres-setup



Running
=======

Requires Docker >= 17.05 


Notes
=====

React app dockerization:

* https://mherman.org/blog/dockerizing-a-react-app/


Tradeoffs
=========

* Python Flask server instead of Gunicorn.
    * But proper web server for the static stuff.


Security
========
Postgres pw for db component is superuser. To keep it out of yaml, a dockerfile is used for that component (instead of just defining an image in the yml).

Users/pws for other components are defined in their dockerfiles





Use of marshmallow
-------------------
from marshmallow import Schema, pprint
from marshmallow.fields import String

class QuoteSchema(Schema):
    person = String()
    quote = String()

pprint(QuoteSchema().dump(quotes[0]).data)






#React app and material UI
sudo -H npm install create-react-app
sudo -H npm install --save material-ui
