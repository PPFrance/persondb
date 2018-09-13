#-*- coding: utf-8 -*-
#
#
#
#
# Author: 
# Local testing: 
# Copyright (c) SomeCorp.


import grpc

import person_service_pb2_grpc
import person_service_pb2

import argparse
parser = argparse.ArgumentParser(description='PersonApp gRPC client')
parser.add_argument('--server', dest='server', type=str, nargs='?', default='localhost:50051', help='gRPC server (default: localhost:50051)')
parser.add_argument('name_to_query', type=str, help='The name of the person to query')
args = parser.parse_args()


def process_person_response(request_name, response):
    
    if len(response.persons) > 0:
        
        print('\n * {} result{} for query "{}"'.format(len(response.persons), 's' if len(response.persons)>0 else '', request_name ))
        
        for person in response.persons:
            print (' {}/{}'.format(person.name, person.iso_country))

        print()
    


if __name__ == '__main__':
    
    print('\n PersonApp gRPC client')
    print('\n * server: {}'.format(args.server))
    
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = person_service_pb2_grpc.PersonStub(channel)
        
        person_query = person_service_pb2.PersonRequest(name=args.name_to_query)
            
        person_response = stub.GetPerson(person_query)
            
        if person_response:
            process_person_response(args.name_to_query, person_response)
            

    
    