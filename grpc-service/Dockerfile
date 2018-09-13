FROM python:3.6

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

#TODO is this:  ----------above here----------  necessary to avoid a "package spoofing" attack?

#Doing the pip install before copying the rest of the bulk apparently leverages the Docker cache. 
#TODO this could just be voodoo

COPY ./src/server.py /app
COPY ./src/db_connection_mgr.py /app
COPY ./src/sqlalchemy_model.py /app
COPY ./protoc/person_service.proto /app

RUN python -m grpc_tools.protoc --python_out=. --grpc_python_out=. --proto_path=. person_service.proto


EXPOSE 50051


ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB postgres

CMD ["python", "server.py"]