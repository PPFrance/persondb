#-*- coding: utf-8 -*-
#
#
#
#
# Author: 
# Local testing: 
# curl -i -H "Content-Type: application/json" -X POST -d '{"name": "Peter", "iso_country": "GB"}' http://127.0.0.1:5000/person

# Copyright (c) SomeCorp.

from flask import Flask, render_template, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


from db_connection_mgr import get_connection_string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db_connection_string = get_connection_string()
engine = create_engine(db_connection_string, echo=True)
Session = sessionmaker(bind=engine)


from sqlalchemy_model import Person             #The definition of the SQLAlchemy model of our table.
from marshmallow_schema import PersonSchema   

#We'll catch these...
from marshmallow import ValidationError
from sqlalchemy.exc import OperationalError

import sys
@app.route('/hello', methods=['GET'])
def hello():
    return "Hello!", 200

@app.route('/person', methods=['POST'])
def person():
    """
    
    """
    session = Session()

    insertion_result = 'Unknown'
    try:
        mm_person = PersonSchema()
        mm_marshalling_result = mm_person.load(request.get_json())
        
        sqla_person = mm_marshalling_result.data
        
        print('DEBUG sqla_person.name: {}, sqla_person.iso_country: {}'.format(sqla_person.name, sqla_person.iso_country), file=sys.stderr)
        
        #All the validation of the input is managed by Marshmallow
        #See the definition of the marshmallow schema for Person (curently in marshmallow_schema.py), as this is just a toy example. 
        #Obviously were this anything more industrial, model, schema, database mgt, etc, would be rather better thought out.
    
        #As emphasis is on engineering, I haven't gone down the rabbit hole of working out how sqlalchemy.exists() operates yet. 
        #In other words, this just adds the data into the db, even if it might be a dup.
        session.add(sqla_person)
        session.commit()
        
        insertion_result = 'OK'
    except ValidationError as err:
        session.abort()
        return err.messages,201
        
        
    return insertion_result,200


if __name__ == '__main__':
    
    from sqlalchemy_model import create_database_schema
    #I know how terrible this looks, it's just for sqlite testing, and I can't currently get the hang of initializing the schema outside the current container
    #Using the sqlalchemy model declared in this one.
    create_database_schema(engine)
    
    
    app.run(host='0.0.0.0', debug=True)
    