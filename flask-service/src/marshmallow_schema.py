#-*- coding: utf-8 -*-
#
#
#
#
# Author: 
# 
# Copyright (c) SomeCorp.

from marshmallow import Schema, fields, ValidationError, post_load
from sqlalchemy_model import Person

import sys

def name_valid(data):
    if not data:
        raise ValidationError("No name provided")

def length_conforms_to_iso_country_standard(data):
    if not data or not len(data) in [2,4]:
        raise ValidationError("Data does not conform to specification (iso country with optional region)")
       
       
class PersonSchema(Schema):
    id = fields.Int(dump_only = True)
    name = fields.Str(validate = name_valid)
    iso_country = fields.Str(validate = length_conforms_to_iso_country_standard)
    
    #This decorator inflates an sqlalchemy Person after a .load({blah}) 
    @post_load   
    def make_person(self, data):
        print ('post_load in make_person, data: {}'.format(data), file=sys.stderr)
        return Person(**data) if data else Person()

    
    
    

