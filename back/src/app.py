from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import index, user
from .db.database import BaseModel, database

BaseModel.metadata.create_all(bind=database)

app = FastAPI()
app.include_router(index.router)
app.include_router(user.router, prefix="/user")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
