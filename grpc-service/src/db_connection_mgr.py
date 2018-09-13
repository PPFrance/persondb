#-*- coding: utf-8 -*-
#
#
#
#
# Author: 
# 
# Copyright (c) SomeCorp.


import os
def get_connection_string(type='POSTGRES'):
    
    if type=='POSTGRES':
        db_user = os.environ['POSTGRES_USER']
        db_pwd = os.environ['POSTGRES_PASSWORD']
        db_db = os.environ['POSTGRES_DB']
        db_host = 'db' 
        db_port = '5432' 
    
        return f'postgres://{db_user}:{db_pwd}@{db_host}:{db_port}/{db_db}'
    
        
    else:
        return 'sqlite:///test_sqlite.db' 

