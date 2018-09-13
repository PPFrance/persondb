#-*- coding: utf-8 -*-
#
#
#
#
# Author: 
# Local testing: 
# Copyright (c) SomeCorp.

import grpc

import person_service_pb2
import person_service_pb2_grpc

import sys
import time

from concurrent import futures

from db_connection_mgr import get_connection_string
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from sqlalchemy_model import Person

db_connection_string = get_connection_string()
engine = create_engine(db_connection_string, echo=True)
Session = sessionmaker(bind=engine)


class PersonServicer(person_service_pb2_grpc.PersonServicer):
    
    def __init__(self):
        pass
        #self.session = Session()


    def GetPerson(self, request, context):
        print('DEBUG PersonServicer.GetPerson called for request {} and context {}'.format(request,context), file=sys.stderr)
        
        session = Session()
        query = session.query(Person)

        query.filter(Person.name == request.name)
            
        response = person_service_pb2.PersonResponse()
        for res in query.all():
            #TODO I know, this is deeply suboptimal. 
            response.persons.extend([person_service_pb2.PersonResponse.Person(name=res.name, iso_country=res.iso_country)])

        session.close()

        return response
    
    
    

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    person_service_pb2_grpc.add_PersonServicer_to_server(PersonServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    
    #Have to prevent this main process exiting immediately.
    ONE_DAY_IN_SECONDS = 60 * 60 * 24
    try:
        while True:
            time.sleep(ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)

    


if __name__ == '__main__':
    serve()
