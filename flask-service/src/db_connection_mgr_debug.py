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
        db_user = 'postgres'
        db_pwd = 'postgres'
        db_db = 'postgres'
        db_host = 'localhost' 
        db_port = '5432' 
    
        return f'postgres://{db_user}:{db_pwd}@{db_host}:{db_port}/{db_db}'
    
        
    else:
        return 'sqlite:///test_sqlite.db' 

