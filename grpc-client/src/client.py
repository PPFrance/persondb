#-*- coding: utf-8 -*-
#
#
#
#
# Author:
# Local testing:
# Copyright (c) SomeCorp.

import sys

try:
    import grpc
except ImportError:
    print('This script relies on the grpcio and grpcio-tools packages for emitting and receiving gRPC calls from python. An attempt to import them threw an ImportError.\n'
          '\n'
          'But you can install them with, e.g., \n'
          '$pip3 install grpcio grpcio-tools\n')
    sys.exit(-1)


import person_service_pb2_grpc
import person_service_pb2


from argparse import ArgumentParser
parser = ArgumentParser(description='PersonApp gRPC client')
parser.add_argument('--server', dest='server', type=str, nargs='?', default='localhost:50051', help='gRPC server (default: localhost:50051)')
parser.add_argument('name_to_query', type=str, help='The name of the person to query')
args = parser.parse_args()


def process_person_response(request_name, response):
    """
    Deals appropriately (formats to screen) each Person  with person_service_grpc.

    """

    if response.persons:

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
