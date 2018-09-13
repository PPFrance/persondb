#Create SQLAlchemy model for our table.
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
import sys

class Person(Base):
    __tablename__ = 'person'    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))                  #Length added just in case data end up living on DB other than postgres.
    iso_country = Column(String(4))             #This long rather than just two characters so that region codes can be accomodated, potentially.    

    

def create_database_schema(engine):
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    
    print('In create_database_schema, about to issue create command for {}.'.format(engine), file=sys.stderr)
    Base.metadata.create_all(bind=engine)
    print('About to leave create_database_schema.', file=sys.stderr)

    