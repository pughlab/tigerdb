from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from graphene import Schema
from neomodel import config
from starlette_graphene3 import GraphQLApp, make_graphiql_handler

from .schema import schema
from .settings import (
    NEO4J_HOST,
    NEO4J_PASSWORD,
    NEO4J_PORT,
    NEO4J_USER
)

config.DATABASE_URL = (
    f'bolt://{NEO4J_USER}:{NEO4J_PASSWORD}@{NEO4J_HOST}:{NEO4J_PORT}'
)

def create_app():
    app = FastAPI()
    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_methods=['POST'],
        allow_headers=['*']
    )
    app.mount('/', GraphQLApp(schema=schema, on_get=make_graphiql_handler()))
    
    return app