import os
from pathlib import Path
from dotenv import load_dotenv

dotenv_path = Path('.env')
load_dotenv(dotenv_path=dotenv_path)

DEBUG = os.getenv('DEBUG')

NEO4J_HOST = os.getenv('NEO4J_HOST')
NEO4J_PORT = int(os.getenv('NEO4J_PORT'))
NEO4J_USER = os.getenv('NEO4J_USER')
NEO4J_PASSWORD = os.getenv('NEO4J_PASSWORD')