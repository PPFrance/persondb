FROM python:3.6
#Yes, we will use the development server in Flask. In production obvs. this would be something more robust and scalable e.g., gunicorn.

COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install --trusted-host pypi.python.org -r requirements.txt
#TODO is this:  ----------above here----------  necessary to avoid a "package spoofing" attack?
#Doing the pip install before copying the rest of the bulk apparently leverages the Docker cache. 
#TODO this could just be voodoo

COPY ./src/app.py /app
COPY ./src/db_connection_mgr.py /app
COPY ./src/marshmallow_schema.py /app
COPY ./src/sqlalchemy_model.py /app
#Best practice is to copy all files individually.

EXPOSE 5000

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB postgres


CMD ["python", "app.py"]

